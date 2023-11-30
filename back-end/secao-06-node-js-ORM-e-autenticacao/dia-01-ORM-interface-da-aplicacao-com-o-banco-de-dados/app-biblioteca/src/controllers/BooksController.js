const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const { author } = req.query;
  let books;
  if (author) {
    books = await BookService.getByAuthor(author);
  } else {
    books = await BookService.getAll();
  }
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const book = await BookService.getById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(book);
}

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const book = await BookService.create({ title, author, pageQuantity, publisher });
  res.status(201).json(book);
};

const update = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const { id } = req.params;
  const updatedUser = await BookService.update(id, { title, author, pageQuantity, publisher });
  if (!updatedUser) return res.status(404).json({ message: 'Not found' });
  res.status(200).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;
  const removed = await BookService.remove(id);
  if (!removed) return res.status(404).json({ message: 'Not found' });
  res.status(204).json({ message: 'Book deleted' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};