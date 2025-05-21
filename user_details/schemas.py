from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class UserDetailsBase(BaseModel):
    nombre_chatarreria: str
    direccion: str
    telefono: str
    email: str

class UserDetailsCreate(UserDetailsBase):
    id: int
    pass

class UserDetailsUpdate(UserDetailsBase):
    pass

class UserDetails(UserDetailsBase):
    id: int
    created_at: datetime
    updated_at: datetime