from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List

class MaterialesBase(BaseModel):
    nombre: str
    descripcion: str
    precio: float
    cantidad: int
    id_chatarreria: int

class MaterialesCreate(MaterialesBase):
    pass

class MaterialesUpdate(MaterialesBase):
    id: int
    nombre: str
    descripcion: str
    precio: float
    cantidad: int
    id_chatarreria: int
    pass

class Materiales(MaterialesBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True 