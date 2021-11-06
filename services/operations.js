const gcd = require ('../core-functions/operations/gcd');

const greatestDivisor = (req, res) => {
    const pair = req.params;
    const result = gcd.greatestDvisor(pair[0], pair[1]);

    if (result && !isNaN(result))
        return res.status(200).send({
            gratestCommonDiv: `gcd between ${pair[0]} & ${pair[1]}: ${result}`
        });

    return res.status(500).send({
        message: 'Error'
    });
};
module.exports = { greatestDivisor };