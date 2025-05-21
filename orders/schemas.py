from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional


class OrdenBase(BaseModel):
    id_usuario: int
    id_material: int
    cantidad: int

class OrdenCreate(OrdenBase):
    pass

class OrdenUpdate(BaseModel):
    id_usuario: Optional[int] = None
    id_material: Optional[int] = None
    cantidad: Optional[int] = None

class Orden(OrdenBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class OrdenMaterial(BaseModel):
    id: int 
    id_orden: int
    id_material: int
    cantidad: int
    created_at: datetime
    updated_at: datetime

class OrdenMaterialCreate(BaseModel):
    id_material: int
    cantidad: int
