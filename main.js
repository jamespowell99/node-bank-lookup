const app = require('express')()
const bankLookupController = require('./controllers/bankLookupController');

const port = 9899

app.listen(port);

console.log('started app on port: ', port);

app.route('/v1/banklookup/bank')
    .get(bankLookupController.lookupBank);


console.log('done starting');
