from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Orden(Base):
    __tablename__ = "ordenes"
    
    id = Column(Integer, primary_key=True, index=True)
    id_usuario = Column(Integer, nullable=False)
    created_at = Column(DateTime, default=datetime.now)
    
    # Relación con los materiales de la orden
    materiales = relationship("OrdenMaterial", back_populates="orden")

class OrdenMaterial(Base):
    __tablename__ = "orden_material"
    
    id = Column(Integer, primary_key=True, index=True)
    id_orden = Column(Integer, ForeignKey("ordenes.id"), nullable=False)
    id_material = Column(Integer, nullable=False)
    cantidad = Column(Integer, nullable=False)
    
    # Relación con la orden
    orden = relationship("Orden", back_populates="materiales")
