const express = require('express')
const app = express()
const  cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

 const data=require( "./data/catagori.json")
 const allcourse = require("./data/allCourses.json")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res)=>{
    res.send(data)
})


app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    if(id == 6){
        res.send(allcourse);
    }
    const catagoryCourse = allcourse.filter(c=> c.catagori_id == id)
    res.send(catagoryCourse)
})

app.get('/course/:id',(req, res) => {
    const id = req.params.id;
        const singleData = allcourse.find((p) => p.id === id)  
        res.send(singleData)
    
  })

app.listen(port, () => {
  console.log(port)
})
module.exports = app;