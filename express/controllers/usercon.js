const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    try {
        const {username, email, password} = req.body
        const verif1 = await User.findOne({ username });
        const verif2 = await User.findOne({ email });
        if (!verif1 && !verif2) {
            const salt = await  bcrypt.genSalt()
            const hashed = await bcrypt.hash(password,salt)
            const user = await User.create({
                username, 
                email, 
                password : hashed
            })
            res.status(200).json({redirect:'/login'})
        }else {
            res.status(401).json({ error: 'User exists' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const login = async (req, res) => {
    try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
    res.status(401).json({ error: 'Authentication failed' })
    }else {
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
        res.status(401).json({ error: 'Authentication failed' });
        }else {
            const token = jwt.sign({ userId: user._id }, 'secret_key');
            res.cookie('jwt',token , {
                httpOnly : true 
            })
            res.status(200).json({ token, redirect: '/main' })
        }
    }
    } catch (error) {
    res.status(500).json(error)
    }
}

module.exports = {
    signup,
    login,
}