const factorialS = (num) => {ç
    let fact = 1;
    if (num == 0)
        return fact;
    
    for(let i=1; i<=n; i++){
        fact = fact*i;
    }

    return fact;
}

const factorialR = (num) => {
    if ( num == 0)
        return 1;
    
    return factorial(num-1);
}

const factorialDP = (n, lista) => {

    if( lista[n] !== undefined)
        return lista[n];

    if( n == 0){
        lista[n] = 1;
        return lista[n];
    }else{
        lista[n] = (n * factorialDP(n-1, lista));
        return lista[n];
    }
};