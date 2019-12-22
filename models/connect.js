const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const url = process.env.MONGODB_URI || 3001;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const phonebookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
        },
    number: {
        type: String,
        required: true, 
        unique: true,
        minlength: 8}
})
phonebookSchema.plugin(uniqueValidator);

phonebookSchema.set('toJSON', {
    transform: (document, returnedObj) => {
        returnedObj.id = returnedObj._id.toString();
        delete returnedObj._id;
        delete returnedObj.__v;
    }
})

module.exports = mongoose.model('Contact', phonebookSchema)