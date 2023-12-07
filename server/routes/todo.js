const express = require("express")
const router = express.Router()
const Todo = require("../models/Todomodel")

router.get("/",async(req,res)=>{
    try {
        const userlist = await Todo.find()
        return res.status(200).json(userlist)
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message)
    }
})
router.post("/",async(req,res)=>{
    try {
        const {todo} = req.body
        
      const todoitem = {
        todo:todo,
      };
          await Todo.create(todoitem)
      
        
          const alltodo = await Todo.find()
         return res.status(200).json(alltodo)
    } catch (error) {
        res.status(400).json(error.message)
        
    }
})
router.put("/",async(req,res)=>{
    try {
        const {_id} = req.body
        const updatetodo = await Todo.findByIdAndUpdate(
            _id,
            {...req.body},
            {new:true}
        )
        if (updatetodo) {
            const alltodo = await Todo.find()
           return res.status(200).json(alltodo)
            
        }
        res.status(404).json({
            message: `Item with id: ${id} does not exist`,
          });
    } catch (error) {
        res.status(400).json(error)
    }

})
router.delete("/",async(req,res)=>{
    try {
        const {_id} = req.body
        const updatetodo = await Todo.findByIdAndDelete(_id)
        if (updatetodo) {
            const alltodo = await Todo.find()
            return res.status(200).json(alltodo)
        }
        res.status(404).json({
            message: `Item with id: ${id} does not exist`,
          });
    } catch (error) {
        res.json(error.message)
    }

})

module.exports = router;