import asyncHandler from "express-async-handler"



export const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"register user"})
});

export const authUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Auth user"})
});

export const logoutUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"logout user"})
});

export const getUserProfile = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"get user"})
});
export const updateUserProfile = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Update user"})
});