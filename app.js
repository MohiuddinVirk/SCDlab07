const express = require('express');
const app = express();
const port =  3000;
app.use(express.json());
app.get('/', (req, res) => {
res.send('Hello from the Microservices Tasks!');
});
let Users=[
    {id:"1",name:"Omer",email:"omer@gmail.com",password:"12345"},
    {id:"2",name:"Ali",email:"ali@gmail.com",password:"12345"},
    {id:"3",name:"Usman",email:"usman@gmail.com",password:"12345"},
    {id:"4",name:"Adnan",email:"adnan@gmail.com",password:"12345"},
    {id:"5",name:"Eeman",email:"eeman@gmail.com",password:"12345"},
    {id:"6",name:"Abdul Rehman",email:"abdulrehman@gmail.com",password:"12345"},
    ] ;
let Tasks=[
    {id:"1",userid:"1",title:"Task 1",priority:1,category:"Personal",description:"description",duedate:"01/01/2024"},
    {id:"2",userid:"2",title:"Task 2",priority:2,category:"Personal",description:"description",duedate:"01/01/2024"},
    {id:"3",userid:"2",title:"Task 3",priority:3,category:"Work",description:"description",duedate:"01/01/2024"},
    {id:"4",userid:"2",title:"Task 4",priority:4,category:"Work",description:"description",duedate:"01/01/2024"},
    {id:"5",userid:"1",title:"Task 5",priority:6,category:"Errands",description:"description",duedate:"01/01/2024"},
    {id:"6",userid:"1",title:"Task 6",priority:5,category:"Errands",description:"description",duedate:"01/01/2024"}
    ] ;
app.post('/addnewtask', (req, res) => {
const newobj=req.body;
Tasks.push(newobj)
    res.status(200).json(Tasks);
    });
app.get('/getalltasks', (req, res) => {
    let temptask=[...Tasks];
    temptask.sort((a,b)=>a.priority-b.priority)
     res.status(200).json(temptask);
});
app.get('/getalltasksbyid/:id', (req, res) => {
    let id =req.params.id;
    let temptask=Tasks.filter((obj)=>obj.userid===id);
    temptask.sort((a,b)=>a.priority-b.priority)
     res.status(200).json(temptask);
});
app.get('/gettaskdetail/:id', (req, res) => {
    let id =req.params.id;
    const obj=Tasks.find((element)=>element.id===id);
    if(obj){
        res.status(200).json(obj);
    }else{
        res.status(200).json("Not found");
    }
   
});
app.post('/addnewuser', (req, res) => {
    const newobj=req.body;
    Users.push(newobj)
        res.status(200).json(Users);
        });
    
    app.get('/getuserdetail/:id', (req, res) => {
        let id =req.params.id;
        const obj=Users.find((element)=>element.id===id);
        if(obj){
            res.status(200).json(obj);
        }else{
            res.status(200).json("Not found");
        }
       
    });
app.listen(port, () => {
console.log(`Microservice listening on port ${port}`);
});