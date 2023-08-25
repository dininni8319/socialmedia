import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const register = async (req, res) => {
    try {
        // generate new password
        const {
            firstName,
            lastName,
            email,
            picturePath,
            password,
            location,
            occupation,
            viewedProfile,
            imporessions
        } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        // create new user
        const newUser = new User(
            {
              firstName,
              lastName,
              email,
              picturePath,
              password: hashedPassword,
              location,
              occupation,
              viewedProfile: Math.floor(Math.random() * 10000),
              imporessions: Math.floor(Math.random() * 10000)
            }
        )
        // save user and respond
        const savedUser = await newUser.save()
      res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password} = req.body

        const user = await User.findOne({ email: email})
        if (!user) return res.status(400).json({ msg: "User does not exist." })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ msg: "Incorrect password." })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.status(200).json({ token, user})
    } catch (error) {
        res.status(500).json({ error: err.message }) 
    }
}