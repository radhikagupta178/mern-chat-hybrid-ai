import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import generateTokenSetCookie from '../utils/generateTokens.js';

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username
        });
    } catch (error) {
        console.log(`Error in login controller: ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Successfully logged out!" });
    } catch (error) {
        console.log(`Error in login controller: ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const signup = async (req, res) => {
    try {

        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" })
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: `Username already exists` });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender
        });
        if (newUser) {
            generateTokenSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username
            })
        }
        else {
            res.status(400).json({ error: 'Invalid User Data' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send("Sign up");
}