import PostMessage from "../models/postMessage.js";

export const getPost = async (req,res)=>{
    try {
        const postMessages = await PostMessage.find({}) 
        // console.log(postMessages);
        res.status(200).json(postMessages);
    }
    catch(error) {
        res.status(404).json({message : error.message});
    }
    
}

export const createPost = async (req,res)=>{
    const post = req.body;
    try {
        const newPost = new PostMessage(post);
        const result = await newPost.save();
        res.status(201).json(result);
    }catch(error) {
        res.status(409).json({message : error.message});
    }
}