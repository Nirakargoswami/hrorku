//const express = require("express");
//const Joi = require("joi");





// const app = express();
// app.use(express.json());
// const courses = [
//     { id : '1', name : "course1"},
//     { id : '2', name : "course2"},
//     { id : '3', name : "course3"}
// ]

// app.get("/", (req,res) => {
//     res.send("helloo world");
// });
// app.get("/api/courses", (req,res) => {
//     res.send(courses);
// });


// app.post("/api/courses" , (req,res) => {



// const result =   validation(req.body); 
// console.log(result);
// if(result.error){
//     res.status(400).send(result.error);
//     return;
// }
  
//     console.log("post  is wokring ")
//     const course = {
//         id : courses.length + 1,
//         name : req.body.name 
//     }
//  courses.push(course);
//  console.log(courses)
//  res.send(course);
// } )


// app.put("/api/courses/:id", (req,res) => {
//     const id = req.params.id;
//     const course = courses.find( x => {
//         return  x.id == id;
//      });
     
     
//      if(!course)res.status(404).send("course is not found");


     
    
//     const result =   validation(req.body); 
//     console.log(result);
//     if(result.error){
//         res.status(400).send(result.error);
//         return;
//     }
    
// course.name = req.body.name;
// res.send(course)

// })

// const validation = (courseobj) => {
//     const schema = Joi.object(  {
//         name : Joi.string().min(3).required()
//     });
    
//     return  schema.validate(courseobj)

// }





// app.get("/api/courses/:id", (req,res) => {
// const id = req.params.id;

// const course = courses.find( x => {
//    return  x.id == id;
// });
// console.log(course);

// course ?   res.send(course) : res.status(404).send("course is not found"); 

// //convertd whole mathod into the function 
// findcourse(req,res );
//  })

// app.delete('/api/courses/:id', (req, res) => {
//     const id = req.params.id;

// const course = courses.find( x => {
//    return  x.id == id;
// });
// if(!course)res.status(404).send("course is not found");

// const index = courses.indexOf(course) ;

// courses.splice(index,1);
// res.send(course);

 
// })

// function findcourse(req,res){
//     const id = req.params.id;

//     const course = courses.find( x => {
//        return  x.id == id;
//     });
//     console.log(course);
    
//     course ? res.send(course) : res.status(404).send("course is not found");  
    
     
        
// }




// const port = process.env.PORT || 5000;

// app.listen( port , () => {
//     console.log(`working on port ${port}....`);
// });






const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req,res) => {
    res.send("helloo world");
});




app.listen( port , () => {
    console.log(`working on port ${port}....`);
});

