const fibonacci = require('../core-functions/specials/fibonacci');
//ITERATIVE LOOP
/**
 * @param {* número del cual se calculara la funcion de Fibonacci
 * Utilizando un bucle iterativo (programación secuencial).
 *  Tiene que ser un número natural (Entero positivo) } n 
 * @returns devuelve la funcion de Fibonacci (Fib(n))
 */
const fibonacciS = (req, res) => {
    const number = req.params.number;
    const result = fibonacci.fibonacciS(number);

    if (result && !isNaN(result))
        return res.status(200).send({
            fibonacci: `fibonacci's ${number}th number is ${result}`
        });

    return res.status(500).send({
        message: 'Error'
    });
}

//RECURSION
/**
 * @param {* número del cual se calculara la funcion de Fibonacci
 * Utilizando recursión. Tiene que ser un número natural (Entero positivo) } n 
 * @returns devuelve la funcion de Fibonacci (Fib(n))
 */
const fibonacciR = (req, res) => {
    const number = req.params.number;
    const result = fibonacci.fibonacciR(number);

    if (result && !isNaN(result))
        return res.status(200).send({
            fibonacci: `fibonacci's ${number}th number is ${result}`
        });

    return res.status(500).send({
        message: 'Error'
    });
};

//PROGRAMACION DINAMICA
/**
 * @param {* número del cual se calculara la funcion de Fibonacci
 * Utilizando un algoritmos agressivo (programación dinámica).
 *  Tiene que ser un número natural (Entero positivo) } n 
 * @returns devuelve la funcion de Fibonacci (Fib(n))
 */
let recuerdaNumero  = [];

const fibonacciDP = (req, res) => {
    const number = req.params.number;
    const result = fibonacci.fibonacciDP(number, recuerdaNumero);

    if (result && !isNaN(result))
        return res.status(200).send({
            fibonacci: `fibonacci's ${number}th number is ${result}`
        });

    return res.status(500).send({
        message: 'Error'
    });
};


module.exports = { fibonacciS, fibonacciR, fibonacciDP };