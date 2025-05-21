from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional


# TODO: Organizar los esquemas de los modelos de la base de datos
# Esquemas para OrdenMaterial
class OrdenMaterialBase(BaseModel):
    id_material: int
    cantidad: int

class OrdenMaterialCreate(OrdenMaterialBase):
    pass

class OrdenMaterial(OrdenMaterialBase):
    id: int
    id_orden: int

    class Config:
        from_attributes = True

# Esquemas para Orden
class OrdenBase(BaseModel):
    id_usuario: int

class OrdenCreate(OrdenBase):
    materiales: List[OrdenMaterialCreate]

class OrdenUpdate(OrdenBase):
    materiales: Optional[List[OrdenMaterialCreate]] = None

class Orden(OrdenBase):
    id: int
    created_at: datetime
    materiales: List[OrdenMaterial]

    class Config:
        from_attributes = True