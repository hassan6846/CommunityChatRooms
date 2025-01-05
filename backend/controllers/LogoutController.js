const Logout = async (req, res) => {
    try {
        res.cookie(null).status(200).json({
            success: true,
            msg: "Logged Out Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Error While logging out "
        });
    }
} 
module.exports=Logout