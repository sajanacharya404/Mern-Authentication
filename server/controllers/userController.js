import asyncHandler from "express-async-handler"


export const authUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Auth user"})
});