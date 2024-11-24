const User = require("../../models/UserModel");
const jwt=require('jsonwebtoken')
const loginFunction = async (req, res, next) => {
    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }


        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET_KEY, 
            { expiresIn: '1h' } 
        );

     
        res.status(200).json({
            message: 'Login successful',
            token: `Bearer ${token}`,
            user: { id: user._id, email: user.email, role: user.role }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({  message: `Server error :${error.message}` });
    }
}
module.exports=loginFunction