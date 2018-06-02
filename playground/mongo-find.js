// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/*var obj = new ObjectID();
console.log(obj);*/

/*var user = {name: 'Meetu', age:25};
var {name} = user;
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch Todos');
    });
    
    db.collection('Todos').find().count().then((count)=>{
        console.log('Todos count');
        console.log(JSON.stringify(count, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch Todos');
    });
    
    db.collection('Users').find({name:'Meetu'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    });
    // client.close();
});
