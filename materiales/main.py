from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models
import schemas
from typing import List
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

PORT = 8001

app = FastAPI(title="Materiales API", description="API para el manejo de materiales")

# Configuración CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/materiales/{material_id}", response_model=schemas.Materiales)
def read_materiales(material_id: int, db: Session = Depends(get_db)):
    material = db.query(models.Materiales).filter(models.Materiales.id == material_id).first()
    if material is None:
        raise HTTPException(status_code=404, detail="Material not found")
    return material

@app.get("/materiales", response_model=List[schemas.Materiales])
def read_materiales(db: Session = Depends(get_db)):
    materiales = db.query(models.Materiales).all()
    return materiales

@app.post("/materiales", response_model=schemas.Materiales)
def create_material(material: schemas.MaterialesCreate, db: Session = Depends(get_db)):
    db_material = models.Materiales(
        nombre=material.nombre,
        descripcion=material.descripcion,
        precio=material.precio,
        cantidad=material.cantidad,
        id_chatarreria=material.id_chatarreria
    )
    db.add(db_material)
    db.commit()
    db.refresh(db_material)
    return db_material

@app.put("/materiales/{material_id}", response_model=schemas.Materiales)
def update_material(material_id: int, material: schemas.MaterialesUpdate, db: Session = Depends(get_db)):
    db_material = db.query(models.Materiales).filter(models.Materiales.id == material_id).first()
    if db_material is None:
        raise HTTPException(status_code=404, detail="Material not found")
    
    for key, value in material.model_dump().items():
        setattr(db_material, key, value)
    
    db.commit()
    db.refresh(db_material)
    return db_material


@app.delete("/materiales/{material_id}")
def delete_material(material_id: int, db: Session = Depends(get_db)):
    db_material = db.query(models.Materiales).filter(models.Materiales.id == material_id).first()
    if db_material is None:
        raise HTTPException(status_code=404, detail="Material not found")
    db.delete(db_material)
    db.commit()
