import {suma,resta,multiplicacion,division} from "./operaciones.js"

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
        console.log(`Se primió el número ${boton.textContent}`);
        seOprimioNumero(boton);
    }

    if(boton.classList.contains("operador")){
        console.log(`Se primió el operador ${boton.textContent}`);
        seOprimioOperador(boton);
    };

    if(boton.classList.contains("borrarTodo")){
        console.log(`Se primió Borrar Todo`);
        borrarTodo();
    }

    if(boton.classList.contains("borrar")){
        console.log(`Se primió Borrar Individualmente`);
        borrarIndividual();
    };

    if(boton.classList.contains("punto")){
        console.log(`Se primió el punto`);
        seOprimioPunto();
    }
};


function seOprimioNumero(boton){
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
    let data;
    const a = displayResultadoAnterior.textContent;
    const b = displayResultadoActual.textContent;
    if(boton.textContent === "="){
        if(a !== "" && b !== ""){
            switch (displaySignoOperacion.textContent){
                case "+":
                    data = suma(a ,b);
                    break;
                case "-":
                    data= resta(a,b);
                    break;
                case "x":
                    data=multiplicacion(a,b);
                    break;
                case "%":
                    data=division(a,b);
                    break;
            }
            actualizarDisplayAnterior(data);
            actualizarDisplayOperador("");
            actualizarDisplayActual("");
        }
    }else{
        if(displayResultadoAnterior.textContent === ""){
            actualizarDisplayOperador(boton.textContent);
            actualizarDisplayAnterior(b);
            actualizarDisplayActual("");
        }else{
            actualizarDisplayOperador(boton.textContent);
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
    if (displayResultadoActual.textContent.includes(".")){
        return;
    }
    if(displayResultadoActual.textContent === ""){
        actualizarDisplayActual("0.");
    }else{
        actualizarDisplayActual(displayResultadoActual.textContent + ".");
    };  
};