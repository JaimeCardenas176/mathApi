const powS = (base, exp) => {
    let pow = 1;

    if(exp == 0)
        return pow;

    for (let i=0; i < exp; i++) {
        pow = pow * base;
    }

    return pow;
};

const powR = (base, exp) => {
    let pow = 1;
    if(exp == 0)
        return pow;

    pow = base * powR(base, exp-1);
    return pow;
}       