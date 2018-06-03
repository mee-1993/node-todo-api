var mongoose = require('mongoose');
var Todo = mongoose.model('Todo', {
    text:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

module.exports = {Todo};
/*var newTodo = new Todo({
    test:'Cook Dinner'
});

newTodo.save().then((doc)=>{
    console.log('saved TODO', doc);
}, (e)=>{
    console.log('Unable to save TODO');
});*/

/*var otherTodo = new Todo({
    text: 'Feed the cat',
    completed:true,
    completedAt:123
});

otherTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc, undefined, 2));
}, (e)=>{
    console.log('Unable to save', e);
});*/