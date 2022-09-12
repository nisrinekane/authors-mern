// get the 'class methods' which we'll apply accroding to each end point
const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    app.post('/api/new', AuthorController.createAuthor);
    app.get('/api/', AuthorController.getAllAuthors);
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    app.put('/api/edit/:id', AuthorController.updateAuthor); 
    app.delete('/api/:id', AuthorController.deleteAuthor);
}