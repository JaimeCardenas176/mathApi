const hillArray = require ('../core-functions/arrays/hill');

/**
 * 
 * @param {* array de la forma "colina" (un array tal que
 *  n<n+1 hasta un n a partir del cual n>n+1)} array 
 * @returns el valor máximo contenido en el array "colina"
 *  en tiempo complejidad algorítmico O(log n) .
 */
const maxValueInHillArray = (req, res) => {
    const list = req.params.list;
    const result = hillArray.maxValue(list);

    if (result && !isNaN(result))
        return res.status(200).send({
            binarySearch: `binary Search applied on list: ${result}`
        });

    return res.status(500).send({
        message: 'Error'
    });
};

module.exports = { maxValueInHillArray };