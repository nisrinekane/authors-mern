const mongoose = require('mongoose');


// our schema
const AuthorSchema = new mongoose.Schema({
    name:  { 
      type: String,
      unique: [true, 'name taken'],
      required: true,
      minlength: [3, 'author name must be at least 3 characters']
  },
}, { timestamps: true });

// export and set product  to a model which take the name of the schema and schema itself as args
module.exports.Author = mongoose.model('Author', AuthorSchema);
