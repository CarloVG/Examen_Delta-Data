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





