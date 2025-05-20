se va a utilizar un virtual env

comandos:
crear: python -m venv nombre_del_env
correr: mi_entorno\Scripts\activate
apagar: deactivate

generar archivo de dependencias: pip freeze > requirements.txt
instalar archivo de dependencias: pip install -r requirements.txt

correr servidor: uvicorn main:app --reload