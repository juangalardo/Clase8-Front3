import React from 'react'


const Enviado = ({nombre, edad, pokemon}) => {
return (
    <div>
        <h2>Perfecto, {nombre}!</h2>
        <h3>Tenés {edad} años y {pokemon} es tu pokemón!</h3>
    </div>
)
}

export default Enviado