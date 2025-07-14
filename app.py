from flask import Flask, request, jsonify, render_template
import sqlite3


app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')

# Configuración de la base de datos
# Usaremos SQLite para simplicidad
DATABASE = 'database.db'

def init_db():
    with sqlite3.connect(DATABASE) as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS creditos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                cliente TEXT NOT NULL,
                monto REAL NOT NULL,
                tasa_interes REAL NOT NULL,
                plazo INTEGER NOT NULL,
                fecha_otorgamiento TEXT NOT NULL
            )
        ''')
        conn.commit()

# Inicializar DB al iniciar la app
init_db()

# Ruta para registrar un nuevo crédito
@app.route('/creditos', methods=['POST'])
def agregar_credito():
    data = request.get_json()
    with sqlite3.connect(DATABASE) as conn:
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO creditos (cliente, monto, tasa_interes, plazo, fecha_otorgamiento)
            VALUES (?, ?, ?, ?, ?)
        ''', (
            data['cliente'],
            data['monto'],
            data['tasa_interes'],
            data['plazo'],
            data['fecha_otorgamiento']
        ))
        conn.commit()
        return jsonify({'mensaje': 'Crédito agregado exitosamente'}), 201

# Ruta para listar todos los créditos
@app.route('/creditos', methods=['GET'])
def listar_creditos():
    with sqlite3.connect(DATABASE) as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM creditos')
        rows = cursor.fetchall()
        columnas = [column[0] for column in cursor.description]
        resultados = [dict(zip(columnas, row)) for row in rows]
        return jsonify(resultados)

# Ruta para editar un crédito
@app.route('/creditos/<int:id>', methods=['PUT'])
def editar_credito(id):
    data = request.get_json()
    with sqlite3.connect(DATABASE) as conn:
        cursor = conn.cursor()
        cursor.execute('''
            UPDATE creditos
            SET cliente = ?, monto = ?, tasa_interes = ?, plazo = ?, fecha_otorgamiento = ?
            WHERE id = ?
        ''', (
            data['cliente'],
            data['monto'],
            data['tasa_interes'],
            data['plazo'],
            data['fecha_otorgamiento'],
            id
        ))
        conn.commit()
        return jsonify({'mensaje': 'Crédito actualizado'})

# Ruta para eliminar un crédito
@app.route('/creditos/<int:id>', methods=['DELETE'])
def eliminar_credito(id):
    with sqlite3.connect(DATABASE) as conn:
        cursor = conn.cursor()
        cursor.execute('DELETE FROM creditos WHERE id = ?', (id,))
        conn.commit()
        return jsonify({'mensaje': 'Crédito eliminado'})

if __name__ == '__main__':
    app.run(debug=True)
