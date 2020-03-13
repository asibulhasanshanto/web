const rect = require('./rectangle')

function solveRect(l,b) {
    console.log("solving for rectangle with l = "+ l + " b = "+ b)
    rect(l,b,(err, rectangle) =>{
        if(err){
            console.log("ERROR: ",err.message)
        }
        else{
            console.log("The area is "+ rectangle.area())
            console.log("The perimeter is "+ rectangle.perimeter())
        }

    })//here the third perameter is calling the callback function with two parameter.
    console.log("This line is after the call of rect and will be executed first")
}

solveRect(2,4)
solveRect(3,5)
solveRect(0,5)
solveRect(-3,5)