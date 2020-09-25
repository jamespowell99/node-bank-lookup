**running**
1. replace 'REPLACE_ME' with IP
2. npm install
3. node main.js
4. hit http://localhost:9899/v1/banklookup/bank?country=US&routingNumber=999999123 - observe 200 with JSON response
5. hit http://localhost:9899/v1/banklookup/bank?country=US&routingNumber=999999503 for a failure
