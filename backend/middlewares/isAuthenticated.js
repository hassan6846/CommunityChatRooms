

const isAuthenticated = async (req, res) => {
    const token = req.cookies.token
    if (!token) {
        res.status(400).json({
            success: false,
            msg: "Token is not provided"
        })
    }

}
module.exports = isAuthenticated