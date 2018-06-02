// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
   
    db.collection('Todos').findOneAndUpdate({
        _id:new ObjectID("5b1227a8de3b3d3bfcc1c3f9")
    }, {
        $set:{
            completed:true
        }
    }, {
            returnOriginal:false
        }).then((result)=>{
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID("5b12331a9083b80618d65a8c")
    }, {
        $set:{
            name:'Jen'
        },
        $inc: {
            age: 1
        }
    }, {
            returnOriginal:false
        }).then((result)=>{
        console.log(result);
    });
});
