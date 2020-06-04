const express = require('express');
const { userRegister, userLogin, generateToken, userLogout } = require('../models/User');
const router = express.Router();
const { auth } = require("../middleware/auth");


router.post("/register", (req, res) => {

    userRegister(req.body, (err) => {

        if (err) return res.json({ success: false, err });

        return res.status(200).json({ success: true });
    });
});

router.post("/login", (req, res) => {

    console.log('로그인 ㄱㄱ!!!!')

    userLogin(req.body, (err, isMatch) => {
        console.log(err, isMatch)
        if (err) return res.json({ 
            loginSuccess: false
        });
        if (!isMatch) {
            return res.json({ 
                loginSuccess: false
            });
        }

        
        generateToken(req.body,(err,token) => {

            if (err) return res.status(400).send(err);
            res.cookie("w_authExp", "1111");
            res
                .cookie("w_auth", token)
                .status(200)
                .json({
                    loginSuccess: true, userId: req.body.id
                });
        })
    });
});

router.get("/logout", auth, (req, res)=> {

    userLogout(req.user.id, (err) =>{
        
        if (err) return res.json({ success: false, err});

        return res.status(200).send({
            success: true
        })
    });
});


router.get("/auth", auth, (req, res) => {

    //console.log("여기여기여기여기   ", req);
    console.log("여기여기여기   ", req.user);
    console.log("여기여기   ", req.user.id);
    
    res.status(200).json({
        id: req.user.id,
        isAdmin: req.user.role === 1 ? true : false,
        isAuth: true,
        email: req.user.email,
        role: req.user.role
    });
});



module.exports = router;
