const mongoose = require('mongoose');
const Dishes = require('./models/dishes');
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) =>{
    console.log('Connected to server');

    Dishes.create({
        name: 'rice',
        description: 'white'
    })

        .then((dish) =>{
            console.log(dish);
            return Dishes.findByIdAndUpdate(dish._id,{
                $set: {description: 'updated test'},
            },{
                    new: true
            }).exec();
        })
        .then((dish) => {
            dish.comments.push({
                rating: 5,
                comment: "good",
                author: "asibul"
            });
            return dish.save();
        })
        .then((dish)=>{
            console.log(dish);
            return Dishes.remove({});
        })
        .then(()=>{
            return mongoose.connection.close();
        })
        .catch((err) =>{
            console.log(err);
        });
});