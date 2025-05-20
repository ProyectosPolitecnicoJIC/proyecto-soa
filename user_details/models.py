from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class User_Details(Base):
    __tablename__ = "user_details"
    id = Column(Integer, primary_key=True, index=True)
    nombre_chatarreria = Column(String(255), nullable=False)
    direccion = Column(String(255), nullable=False)
    telefono = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now)
