const User = require("../../models/UserModel");



const RegisterFunction = async (req, res, next) => {
    const { firstname, lastname, username, email, password } = req.body;


    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const newUser = new User({
            firstname,
            lastname,
            username,
            email,
            password
        });


        await newUser.save();

     
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Server error :${error.message}` });
    }
}

module.exports = RegisterFunction