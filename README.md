# Registro de Créditos 
-Autor: Carlo Vargas González
-Examen Tecnico|13 de Julio 2025
-Delta Data 

Este proyecto es una aplicación web desarrollada en Python con Flask y base de datos SQLite como parte del examen técnico para Delta Data Consulting.  
Que permite registrar, visualizar, editar y eliminar créditos, así como mostrar una gráfica del total de créditos otorgados por cliente

# Repositorio

Repositorio GitHub:  
➡[https://github.com/CarloVG/Examen_Delta-Data.git]
(https://github.com/CarloVG/Examen_Delta-Data.git)

---

# Tecnologías Utilizadas

- Python 3/Superior
- Flask
- SQLite3
- HTML, CSS y JavaScript
- Chart.js (para gráficas)

---

# Instrucciones para ejecutar el proyecto

# 1. Clonar el repositorio

-bash (Terminal)
git clone https://github.com/CarloVG/Examen_Delta-Data.git

cd Examen_Delta-Data

# 2. Crear un entorno virtual (Recomendado)
python -m venv env

# 3. Activar el entorno vitual
-En Windows
env\Scripts\activate

-En Mac/Linux
source env/bin/activate

# 4. Instalar dependencias
pip install flask

pip install -r requirements.txt

# 4.1 
Si al momento de iniciar la app con python app.py o flask --app app --debug run les arroja un error, deben checar los archivos de la carpeta donde estan con el comando "dir"
si este les arroja 3 archivos solamente:
d-----     13/07/2025  09:12 p. m.                .venv

d-----     13/07/2025  09:07 p. m.                env

d-----     13/07/2025  09:03 p. m.                Examen_Delta-Data

La app esta en la carpeta Examen_Delta-Data, asi que solo se debe cambiar de directorio con: "cd .\Examen_Delta-Data\", y volver a correr con flask --app app --debug run, asi
arrojara la direccion ip donde se esta ejecutando el programa

# 5. Ejecutar la aplicacion (pagina web)
python app.py

ó

flask --app app --debug run

# 6. Abrir la app en el navegador de preferencia
http://127.0.0.1:5000

Examen_Delta-Data/

│

├── app.py                  # Código principal en Flask

├── database.db             # Base de datos SQLite (ignorada parcialmente por Git)

├── requirements.txt        # Dependencias (opcional)

├── static/

│   ├── style.css           # Estilos pagina web

│   └── script.js           # Lógica JS y comunicación con Flask

├── templates/

│   └── index.html          # Página principal (Registros)





