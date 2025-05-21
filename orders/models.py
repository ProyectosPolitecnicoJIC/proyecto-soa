from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Orden(Base):
    __tablename__ = "ordenes"
    
    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_usuario = Column(Integer, nullable=False)
    id_material = Column(Integer, nullable=False)
    cantidad = Column(Integer, nullable=False)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now, onupdate=datetime.now)
