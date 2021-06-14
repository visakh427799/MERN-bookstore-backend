const express = require('express');
const router  = express.Router();
const userHelper = require('../helpers/userHelper');
const tokenVerify =require('../middlewares/tokenVerify')


router.get('/',(req,res)=>{
    res.send("Hiii")
})

router.post('/login',(req,res)=>{

    userHelper.doLogin(req.body).then((usr)=>{
        res.json({status:true,usr:usr})
    }).catch((err)=>{
        res.json({status:false,message:"Invalid credentials"})
    })
})
router.post('/register',(req,res)=>{

    let user=req.body;
    if(user){

        userHelper.doSignup(user).then((usr)=>{
           res.json({status:true,usr:usr})

        }).catch(()=>{
            res.json({status:false})
        })
    }
})
router.post('/addbook',tokenVerify.tokenCheck,(req,res)=>{
    let bookData=req.body;
   
    let userId=res.user.data;
    userHelper.addBook(bookData,userId._id).then(()=>{
        res.json({status:true})
    }).catch(()=>{
        res.json({status:false})
    })

})

router.post('/delete',tokenVerify.tokenCheck,(req,res)=>{

   

    userHelper.deleteBook(req.body.bookid).then(()=>{
        res.json({status:true})
    }).catch(()=>{
        res.json({staus:false})
    })


})

router.post('updatebook',tokenVerify.tokenCheck,(req,res)=>{
    let newBook=req.body;
    userHelper.updateBook(newBokk).then(()=>{
        res.json({status:true})
    }).catch(()=>{
        res.json({status:false})
    })

})

router.get('/profile',tokenVerify.tokenCheck,(req,res)=>{

    let userId=res.user.data;
    userHelper.getUser(userId._id).then((usr)=>{
        res.json({usr})
    }).catch((err)=>{
        res.json({err})
    })
})

router.get('/books',tokenVerify.tokenCheck,(req,res)=>{

    let userId=res.user.data;
    userHelper.getBooks(userId._id).then((bks)=>{
        res.json({bks})
    }).catch((err)=>{
        res.json({err})
    })
})

module.exports=router;