require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Contact = require('./models/connect')

app.use(express.static('build'))

app.use(bodyParser.json());
app.use(cors());

morgan.token('show', function(request, response) {

    return JSON.stringify(request.body);
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :show'));

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next();
} 

app.use(requestLogger);

/*let persons = [
    { 
        id: 1,
        name: 'Arto Hellas', 
        number: '040-123456'
        
    },
    { 
        id: 2,
        name: 'Ada Lovelace', 
        number: '39-44-5323523'
        
    },
    { 
        id: 3,
        name: 'Dan Abramov', 
        number: '12-43-234345'
        
    },
    { 
        id: 4,
        name: 'Mary Poppendieck', 
        number: '39-23-6423122'
        
    },
    {
        id: 5,
        name: 'Shiju Nambiar',
        number: '39-13-6423122'
        
    }
]*/

app.get('/api/persons', (request, response) => {
    Contact.find({})
    .then(contacts => {
        response.json(contacts.map(contact => contact.toJSON()));
    })
});

app.get('/info', (request, response) => {
    const thistime = new Date();
    Contact.find({}).then(contact => {
        response.status(200).send(`Phonebook has ${contact.length} entries <br><br> ${thistime}`);
    })
})

app.get('/api/persons/:id', (request, response, next) => {

    Contact.findById(request.params.id)
        .then(contact => {
            if(contact){
                response.json(contact.toJSON());
            } else {
                response.status(404).end(`Person with Id: ${ request.params.id } not found`);
            }
        })
        .catch(error => next(error))

})

app.post('/api/persons', (request, response, next) => {
    const body = request.body;
    
    if (body.name === undefined || body.number === undefined) {
        return response.status(400).json({
            error: "name or number missing"
        })
    }
    const contact = new Contact({
        name: body.name,
        number: body.number
    })
        contact.save()
        .then(newContact => {
            response.json(newContact.toJSON());
        })
        .catch(error => next(error));
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body;

    const contact = {
        name: body.name,
        number: body.number
    };

    Contact.findByIdAndUpdate(request.params.id, contact, {new: true})
    .then(updatedcontact => {
        response.json(updatedcontact.toJSON());
    })
    .catch(error => next(error));

})

app.delete('/api/persons/:id', (request, response) => {
        Contact.findByIdAndRemove(request.params.id)
        .then(contact => {
            response.json(contact.toJSON());
            response.status(204).end(`Person with id${id} is deleted from phonebook!`);
        })
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message);
    if(error.name === 'CastError' && error.kind === 'ObjectId'){
        return response.status(400).send({ error: 'Id is not in proper format'});
    } else if (error.name === 'ValidationError') {
        return response.status(400).send({ error: error.message })
    }
    next(error);
}
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})