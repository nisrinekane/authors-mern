const { Author } = require('../models/author.model');
const authortRoutes = require('../routes/author.routes');
// module.exports.index = (request, response) => {
//     response.json({
//         message: "Hello"
//     });
// }
    // create an author
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

// list all author
module.exports.getAllAuthors = (request, response) => {
    Author.find().sort({'name': 1})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

// find/show one author
module.exports.getOneAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

// update one author
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}

// delete one author
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
