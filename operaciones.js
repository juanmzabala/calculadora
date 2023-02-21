export function suma(a,b){
    return Number(a)+ Number(b)
};

export function resta(a,b){
    return Number(a)- Number(b)
};

export function division(a,b){
    if(Number(b)=== 0){
        return "Err"
    }else{
        return Number(a)/ Number(b)
    }
};

export function multiplicacion(a,b){
    return Number(a) * Number(b)
};