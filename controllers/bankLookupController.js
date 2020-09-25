const axios = require('axios');

exports.lookupBank = (req, res) => {
    //todo validate country & routingNumber params
    const country = req.query.country;
    const routingNumber = req.query.routingNumber;
    
    console.log('checking for country ' + country + ' and routingNumber ' + routingNumber);
    
    axios.get('http://172.31.7.153:9310/cfx/api/123456/0/banks', {
        params: {
            country: country,
            query: routingNumber
        }
    })
        .then(function (response) {
            //todo check for non 200 response & handle
            // console.log('got response', response)
            // console.log(response.data.content.data.rows[0]);
            const bankEntry = response.data.content.data.rows[0];
            res.json({
                routingNumber: bankEntry.nationalBankCode,
                bankName: bankEntry.institutionName,
                swiftBic: bankEntry.swiftBIC
                //todo address
            })
        })
        .catch(function (error) {
            console.error('got an error: ' + error);
            res.status(500).send('error occured...check logs')
        });
    
}
