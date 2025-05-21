
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models
import schemas
from typing import List
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Orders Service",
    description="API para el servicio de pedidos",
    version="1.0.0"
)


# Configuración CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/orders/{order_id}", response_model=schemas.Orden)
def read_orders(order_id: int, db: Session = Depends(get_db)):
    order = db.query(models.Orden).filter(models.Orden.id == order_id).first()
    if order is None:
        raise HTTPException(status_code=404, detail="Order not found")
    return order

@app.get("/orders", response_model=List[schemas.Orden])
def read_orders(db: Session = Depends(get_db)):
    orders = db.query(models.Orden).all()
    return orders

@app.post("/orders", response_model=schemas.Orden)
def create_order(order: schemas.OrdenCreate, db: Session = Depends(get_db)):
    print(order)
    db_order = models.Orden(
        id=order.id,
        id_usuario=order.id_usuario,
        materiales=order.materiales,
        created_at=datetime.now()
    )
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    return db_order

@app.put("/orders/{order_id}", response_model=schemas.Orden)
def update_order(order_id: int, order: schemas.OrdenUpdate, db: Session = Depends(get_db)):
    db_order = db.query(models.Orden).filter(models.Orden.id == order_id).first()
    if db_order is None:
        raise HTTPException(status_code=404, detail="Order not found")
    
    for key, value in order.model_dump().items():
        setattr(db_order, key, value)
    
    db.commit()
    db.refresh(db_order)
    return db_order


@app.delete("/orders/{order_id}")
def delete_order(order_id: int, db: Session = Depends(get_db)):
    db_order = db.query(models.Orden).filter(models.Orden.id == order_id).first()
    if db_order is None:
        raise HTTPException(status_code=404, detail="Order not found")
    db.delete(db_order)
    db.commit()
