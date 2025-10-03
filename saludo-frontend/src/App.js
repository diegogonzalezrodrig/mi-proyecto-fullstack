import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';  // Importa axios

function App() {
    const [data, setData] = useState(null);  // Estado para almacenar la respuesta

    useEffect(() => {
        // Llamada a la API de Spring Boot cuando el componente se monta
        axios.get('http://localhost:8080/saludo')  // Aquí va la URL de tu endpoint de Spring Boot
            .then(response => {
                setData(response.data);  // Actualiza el estado con los datos de la respuesta
            })
            .catch(error => {
                console.error("Hubo un error al obtener los datos:", error);
            });
    }, []);  // El array vacío asegura que la solicitud se haga solo una vez, al montar el componente

    return (
        <div className="App">
            <header className="App-header">
                <img src="logo.svg" className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {data ? (
                    <div>
                        <h2>Datos desde Spring Boot:</h2>
                        <pre>{JSON.stringify(data, null, 2)}</pre>  {/* Muestra los datos de la API */}
                    </div>
                ) : (
                    <p>Cargando datos...</p>
                )}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
