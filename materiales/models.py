from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
from sqlalchemy.types import Float

Base = declarative_base()

class Materiales(Base):
    __tablename__ = "materiales"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(255), nullable=False)
    descripcion = Column(String(255), nullable=False)
    precio = Column(Float, nullable=False)
    cantidad = Column(Integer, nullable=False)
    id_chatarreria = Column(Integer, nullable=False)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now)
