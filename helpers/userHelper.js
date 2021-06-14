const user = require('../models/userModel');
const book = require('../models/bookModel');
const bcrypt = require ('bcrypt');
const jwt   = require("jsonwebtoken");
let privateKey="bookstore";


module.exports={

    doLogin:(usr)=>{

        return new Promise(async(resolve,reject)=>{

            let userData=await user.findOne({email:usr.email,password:usr.password});
           if(userData){
               if(data.password==usr.password){
                const token = jwt.sign({userData},"h45fggf", {
                    algorithm: "HS256",
                    expiresIn: "60d",
                })
                  resolve({token,userData})
               }
               else{
                    reject()
               }
           }
           else{
               reject()
           }

        })



    },
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{

            userData={
                username:userData.username,
                email:userData.email,
                phone:"",
                password:userData.password,
                date:Date.now(),
                sex:"",
            }

            console.log(userData)
            //  let password=await bcrypt.hash(userData.password,10);
            //  console.log(password)
            let data=await user.create(userData);
            if(data){
                const token = jwt.sign({data},"h45fggf", {
                    algorithm: "HS256",
                    expiresIn: "60d",
                })
                
                resolve({token,userData})
            }
            else{
                reject()
            }
            
        })



    },

    getUser:(userId)=>{

        return new Promise(async(resolve,reject)=>{
            
            let data=await user.findOne({_id:userId});
            console.log(data)
            if(data){

                resolve(data)
            }
            else{
                reject("Error has been occured");
            }
           


        })
        

    },

    addBook:(bookData,user_id)=>{

        let date=Date.now();
        let newBook={...bookData,date,user_id}
        return new Promise(async(resolve,reject)=>{

            let data =await book.create(newBook);
            if(data){
                resolve()
            }
            else{
                reject()
            }




        })
    },
    getBooks:(userId)=>{

        return new Promise(async(resolve,reject)=>{
            
            let data=await book.find({user_id:userId});
          
            if(data){

                resolve(data)
            }
            else{
                reject("Error has been occured");
            }
           


        })
        

    },

    deleteBook:(bookid)=>{

        return new Promise(async(resolve,reject)=>{

            let data= await book.deleteOne({_id:bookid});
            if(data){
                console.log(data)
                resolve()
            }
            else{
                reject()
            }

        })

    },
    updateBook:(newBook)=>{

        return new Promise (async(resolve,reject)=>{

              let data=  await book.updateOne({_id:newBook._id},{})
              resolve()
        })

    }


   
}