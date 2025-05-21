se va a utilizar un virtual env
nombrar los virtual envs como v*

comandos:
crear: python -m venv nombre_del_env
correr: mi_entorno\Scripts\activate
apagar: deactivate

generar archivo de dependencias: pip freeze > requirements.txt
instalar archivo de dependencias: pip install -r requirements.txt


correr servidor en puerto: uvicorn main:app --host 0.0.0.0 --port 8002 --reload
python -m uvicorn main:app --port 8002 --reload
