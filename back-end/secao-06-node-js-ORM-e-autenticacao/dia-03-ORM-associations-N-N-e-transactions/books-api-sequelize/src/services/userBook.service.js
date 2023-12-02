const { User, Book } = require('../models');

const getUserBooksById = (id) => User.findOne({
  where: { id },
  include: [{ model: Book, as: 'books', through: { attributes: [] } }],
});

module.exports = {
  getUserBooksById,
};