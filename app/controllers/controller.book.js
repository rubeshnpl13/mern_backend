const Book = require('../models/model.book');
const upload = require('../helpers/fileUploadHelper');


require('dotenv').config();

// @desc    Get all users
// @route   GET /api/v1/user
exports.list = async (req, res) => {
    try{
        const books = await Book.find();
        res.status(200).json({
            success: true,
            count: books.length,
            message: "",
            data: books,
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

// @desc    Add admin user
// @route   POST /api/v1/user
exports.store = async(req, res) => {
    try{
        const { title, author } = req.body;
        const image = await upload(req.files.image, "books");

        const book = await Book.create({
            title,
            author,
            image,
        });
        res.status(200).json({
            success: true,
            message: "Book created successfully",
            data: book
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


// @desc    Delete specific user
// @route   DELETE /api/v1/user
exports.destroy = async(req, res) => {
    const { id } = req.params;
    try{
        await Book.deleteOne({id});
        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
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