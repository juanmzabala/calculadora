function suma(a,b){
    return Number(a)+ Number(b)
};

function resta(a,b){
    return Number(a)- Number(b)
};

function division(a,b){
    if(Number(b)=== 0){
        return "Err"
    }else{
        let resultado = (Number(a)/ Number(b)).toFixed(3);
        let entero = Math.trunc(resultado);
        if (((resultado-entero)/1 === 0)){
            return entero;
        }else{
            return resultado;
        }
        
    }
};

function multiplicacion(a,b){
    return Number(a) * Number(b)
};

export function elegirOperacion(a,b,operador){
    let data;
    switch (operador){
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
    return data;
}
