const Banner = require('../models/model.banner');
const upload = require('../helpers/fileUploadHelper');

// @desc    Get all banners
// @route   GET /api/v1/banner
exports.list = async (req, res) => {
    try{
        const banners = await Banner.find();
        res.status(200).json({
            success: true,
            count: banners.length,
            message: "",
            data: banners,
        });
    }catch(err)
    {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: err.message
        });
    }
}

// @desc    Add banner
// @route   POST /api/v1/banner
exports.store = async(req, res) => {
    try{
        const { title } = req.body;
        const image = await upload(req.files.image, "banners");

        const banner = await Banner.create({
            title,
            image
        });
        
        res.status(200).json({
            success: true,
            message: "Banner created successfully",
            data: banner
        });
    }catch(err)
    {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: err.message
        });
    }
}