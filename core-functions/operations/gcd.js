const greatestCommonDivisor = (numA, numB) => {
    const high = Math.max(numA, numB);
    const low = Math.min(numA, numB);
    const rest = high % low;
    if ( rest === 0)
        return low;
    
    return greatestCommonDivisor(low, rest);
}; 

module.exports = { gcd };