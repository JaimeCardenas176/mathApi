/***
 * 
 */
 const maxValue = (hillArray) => {
    
    if(hillArray.length === 1)
        return hillArray[0];
    
    if(hillArray.length === 2)
        return (hillArray[0] < hillArray[1]) 
                ? hillArray[1]
                : hillArray[0];
    
    let cutHillArray = hillArray;
    let middle = Math.floor(hillArray.length/2);
    
    (hillArray[middle-1] > hillArray[middle])
        ? cutHillArray.splice(middle, (hillArray.length-middle))
        : cutHillArray.splice(0, middle);
    
    return maxValue(cutHillArray);
    
};

module.exports = { maxValue };