const express=require("express");
const router=express.Router();
const largeBoxModel=require("../models/largeBox");

router.get("/",async(req,res)=>{
    try {
        const allProduct=await largeBoxModel.find();
        res.json(allProduct);
    } catch (error) {
        res.send("DB:error");
    }
    });
    
    router.get("/:id",async(req,res)=>{
        const id=req.params.id;
    try {
        const product=await largeBoxModel.findById(id);
        res.json(product);
    
    } catch (error) {
        res.send("DB:error");
    }
    });
    
    router.post("/",async(req,res)=>{
     
        const productData=req.body;
        const newProduct=new largeBoxModel(productData);
        try {
            const saveData=await newProduct.save();
            res.json(saveData);
        } catch (error) {
            res.send("DB:error");
        }
    });
    
    router.put("/:id",async(req,res)=>{
        const id = req.params.id;
        
        const updatname = req.body.name;
        const updataweight=req.body.weight;
        try {
            const updateData = await largeBoxModel.findOneAndUpdate({ _id: id }, { $set: {  name: updatname,weight:updataweight } }, { new: true });
            res.json(updateData);
        } catch (error) {
            res.send("DB:error");
        }
    });
    
    router.delete("/:id",async(req,res)=>{
        const id=req.params.id;
        try {
            const deletData = await largeBoxModel.findOneAndDelete({ _id: id });
            res.json(deletData);
        } catch (error) {
            res.send("DB:error");
        }
    })
    
    
   module.exports=router; 
    
    