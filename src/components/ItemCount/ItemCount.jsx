// import React, {useState} from "react";
import './ItemCount.css'



// export const ItemCount = () =>{
    // Sacamos el hook de estado de counter y lo mandamos al ItemDetail y aca lo traemos como parametros
    // const [counter, setCounter] = useState(0)

    // const sumar = () =>{
    //     setCounter( counter +1 )
    // }
    // const restar = () =>{
    //     if(counter >0){
    //         setCounter(counter-1)
    //     }
    // }
    // const resetear = ()=>{
    //     setCounter(0)
    // }

// Como quedaria realmente

export const ItemCount = ({max, cantidad, modify}) =>{

    const restar = () =>{
        if(cantidad > 0){
            modify(cantidad -1)
        }
    }

    const sumar = () =>{
        if(cantidad < max){
            modify(cantidad + 1)
        }
    }
    // const resetear = () =>{

    // }

    return(
        <>
        <h4>{cantidad}</h4>
        <div>
        
            <button onClick={sumar}>➕</button>
            <button onClick={restar}>➖</button>
            {/* <button onClick={resetear}>🔄</button> */}
        </div>
        </>
    )
}
