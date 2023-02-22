import {elegirOperacion} from "./operaciones.js"

const displayResultadoAnterior = document.querySelector("#resultadoAnterior");
const displayResultadoActual = document.querySelector("#resultadoActual");
const displaySignoOperacion = document.querySelector("#signoOperacion");



document.addEventListener("click",(event)=>{
    const boton = event.target;
    if(!boton.matches(".boton")){
        console.log("No se tocó un boton")
        return
    }
    manejadorBotones(boton);
})


function manejadorBotones(boton){
    
    if(boton.classList.contains("numero")){
        console.log(`Se oprimió el número ${boton.textContent}`);
        seOprimioNumero(boton);
    }

    if(boton.classList.contains("operador")){
        console.log(`Se oprimió el operador ${boton.textContent}`);
        seOprimioOperador(boton);
    };

    if(boton.classList.contains("borrarTodo")){
        console.log(`Se oprimió Borrar Todo`);
        borrarTodo();
    }

    if(boton.classList.contains("borrar")){
        console.log(`Se oprimió Borrar Individualmente`);
        borrarIndividual();
    };

    if(boton.classList.contains("punto")){
        console.log(`Se oprimió el punto`);
        seOprimioPunto();
    }
};


function seOprimioNumero(boton){
    if (displayResultadoAnterior.textContent !== "" && displaySignoOperacion.textContent === ""){
        actualizarDisplayAnterior("");
    }
    
    if(boton.textContent === "0" && displayResultadoActual.textContent === ""){
         actualizarDisplayActual("0");
    }else{
        if(displayResultadoActual.textContent === "0"){
             actualizarDisplayActual(boton.textContent);
        }else{
            actualizarDisplayActual(displayResultadoActual.textContent + boton.textContent);
        };
    };
};

function seOprimioOperador(boton){
    const a = displayResultadoAnterior.textContent;
    const b = displayResultadoActual.textContent;
    if(boton.textContent === "="){
        if(a !== "" && b !== ""){ 
            calcular(a,b,displaySignoOperacion.textContent)
            actualizarDisplayOperador("");
            actualizarDisplayActual("");
        }
    } else{
        if (a !== "" && b !== ""){
            calcular(a,b,displaySignoOperacion.textContent)
            actualizarDisplayOperador(boton.textContent);
            actualizarDisplayActual("");
        }else if(a !== "" && b === ""){
            actualizarDisplayOperador(boton.textContent);
            actualizarDisplayActual("");
        }else{
            actualizarDisplayOperador(boton.textContent);
            actualizarDisplayAnterior(b);
            actualizarDisplayActual("");
        };
    }
}


function actualizarDisplayActual(data){
    displayResultadoActual.textContent = data;
}
function actualizarDisplayAnterior(data){
    displayResultadoAnterior.textContent = data;
};

function actualizarDisplayOperador(data){
    displaySignoOperacion.textContent = data;
};


function borrarTodo(){
    actualizarDisplayActual("");
    actualizarDisplayAnterior("");
    actualizarDisplayOperador("");
};

function borrarIndividual(){
    let data = displayResultadoActual.textContent.slice(0,-1)
    actualizarDisplayActual(data);
};


function seOprimioPunto(){
    if (displayResultadoAnterior.textContent !== "" && displaySignoOperacion.textContent === ""){
        actualizarDisplayAnterior("");
    }
    
    if (displayResultadoActual.textContent.includes(".")){
        return;
    }
    if(displayResultadoActual.textContent === ""){
        actualizarDisplayActual("0.");
    }else{
        actualizarDisplayActual(displayResultadoActual.textContent + ".");
    };  
};

function calcular(a,b,operador){
    actualizarDisplayAnterior(elegirOperacion(a,b,operador));

}