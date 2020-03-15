const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');
const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
   assert.equal(err,null);
   
   console.log('Connected to server!');

   const db = client.db(dbname);

   dboper.insertDocument(db,{ name: "pizza", description: "valona"}, 'dishes', (result) =>{
       console.log('Insert Document: \n', result.ops);
       dboper.findDocument(db, 'dishes', (docs) =>{
           console.log('Found doccuments:\n', docs);
           dboper.updateDocument(db, {name: "pizza"}, { description: 'Updated'},'dishes', (result)=>{
                console.log('Updated doccument: \n',result.result);
                dboper.findDocument(db, 'dishes', (docs) =>{
                    console.log('Found doccuments:\n', docs);
                    db.dropCollection('dishes', (result)=>{
                        console.log('Dropped Collection: ', result);

                    });
                });
           });
       });
   });
});