//ITERATIVE LOOP
const fibonacciS = (n) => {
    let f0 = 0;
    let f1 = 1;
    let fn;
    
    if( n < 2)
        return n;

    for (let i = 0; i < n-1; i++) {
        fn = f0 +f1;
        f0 = f1;
        f1 = fn;       
    }
    
    return fn;
};

//RECURSION
const fibonacciR = (n) => {
    //caso base
    if( n < 2)
        return n;  
    //caso recursivo
    return (fibonacciR(n-1) + fibonacciR(n-2));
};


//PROGRAMACION DINAMICA
const fibonacciDP = (n, lista) => {

    if( lista[n] !== undefined)
        return lista[n];

    if( n < 2){
        lista[n] = n;
        return lista[n];
    }else{
        lista[n] = (fibonacciDP(n-1, lista) + fibonacciDP(n-2, lista));
        return lista[n];
    }
};

module.exports = { fibonacciS, fibonacciR, fibonacciDP };