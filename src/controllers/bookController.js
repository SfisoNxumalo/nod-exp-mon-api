const Book = require('../models/book');

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBook = async (req, res) => {
  try
  {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  }
  catch(error){
    res.status(500).json({ error: error.message });
  }
  
}

exports.deleteBook = async (req, res) => {
  try{
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteBook);
  }
  catch(error){
    res.status(500).json({error: error.message})
  }

};

exports.updateBook = async (req, res) => {

  try{
    // const id = { _id: req.params.id};

    // const book = new Book();

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json("Book updated");
  }
  catch(error){
    res.status(500).json({error: error.message})
  }
};


