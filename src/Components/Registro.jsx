import React, { useState } from 'react'
import Enviado from './Enviado';

const Registro = () => {

    const [nombre, setNombre] = useState ("");
    const [edad, setEdad] = useState (0);
    const [pokemon, setPokemon] = useState ("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState (false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.length > 4 && edad >= 18 && pokemon != null) {
            setShow(true)
        } else {setError(true)}
    }

return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Nombre completo: </label>
        <input type='text' name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>

        <label>Edad: </label>
        <input type="number" name='edad' value={edad} onChange={(e) => setEdad(e.target.value)}/>

        <label>Pokemon favorito: </label>
        <input type="text" name='pokemon'value={pokemon} onChange={(e) => setPokemon(e.target.value)}/>
        <button>Enviar</button>
        </form>
        {
            show ? <Enviado nombre={nombre} edad={edad} pokemon={pokemon} /> : null
        }
        {
            error ? <h5>Verificar los datos</h5> : null
        }
    </div>
)
}

export default Registro