from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models
import schemas


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/users/{user_id}", response_model=schemas.UserDetails)
def read_users(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User_Details).filter(models.User_Details.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.post("/users/{user_id}", response_model=schemas.UserDetails)
def create_user(user_id: int, user: schemas.UserDetailsCreate, db: Session = Depends(get_db)):
    db_user = models.User_Details(
        id=user_id,
        nombre_chatarreria=user.nombre_chatarreria,
        direccion=user.direccion,
        telefono=user.telefono,
        email=user.email
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.put("/users/{user_id}", response_model=schemas.UserDetails)
def update_user(user_id: int, user: schemas.UserDetailsUpdate, db: Session = Depends(get_db)):
    db_user = db.query(models.User_Details).filter(models.User_Details.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    for key, value in user.model_dump().items():
        setattr(db_user, key, value)
    
    db.commit()
    db.refresh(db_user)
    return db_user


@app.delete("/users/{user_id}")
def delete_user(user_id: int, db: Session = Depends(get_db)):
    db_user = db.query(models.User_Details).filter(models.User_Details.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(db_user)
    db.commit()
