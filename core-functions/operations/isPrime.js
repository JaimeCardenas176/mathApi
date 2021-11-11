const isPrimeS = (number) => {
    if(number < 2)
        return false;
    
    for (let i = 2; i < n/2; i++) {
        if( (numero % i) == 0)
            return false;
    }

    return true;
}

const isPrimeR = (number, div) => {
    if(number/2 < div){
        return true;
    }
    if(number%div == 0){
        return false;
    } else {
        return numeroPrimo(num, div+1);
    }
}

let listaPrimos = [];
const isPrimeDP = (number, div) => {
    if( listaPrimos.find(number))
        return true;

    if(isPrimeR(number, div)){
        listaPrimos.push(number);
        return true;
    }
    return isPrimeR(number, div+1);
    
}