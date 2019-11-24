const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

morgan.token('show', function(request, response) {

    return JSON.stringify(request.body);
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :show'));

/* const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
} 

app.use(requestLogger)*/

let persons = [
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
]

app.get('/api/persons', (request, response) => {
    response.json(persons);
})

app.get('/info', (request, response) => {
    const countpersons = persons.length;
    const thistime = new Date();
    console.log(countpersons);
    response.status(200).send(`Phonebook has ${countpersons} entries <br><br> ${thistime}`);
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id);

    if (person) {
        response.json(person);
    }
    else {
        response.status(404).end(`Person with Id:${id} not found`);
    }
    console.log(person);
    response.json(person);
})

const genId = () => {
    const newId = persons.length > 0 ? Math.floor(Math.random() * Math.floor(5000)) : 0;
    return newId + 1;
}

app.post('/api/persons', (request, response) => {
    const body = request.body;
    
    const contact = {
        id: genId(),
        name: body.name,
        number: body.number
    }
    const person = persons.find(p => p.name.toLowerCase() === body.name.toLowerCase())
    
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: "name or number missing"
        })
    }
    if (person === undefined) {
        persons = persons.concat(contact);
        response.json(persons);
    }
    else {
        response.status(400).end(`${body.name} already exists`)
    }
        
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter(p => p.id !== id);

    response.status(204).end(`Person with id${id} is deleted from phonebook!`);
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001

app.listen(PORT), () => {
    console.log(`server is running on ${PORT}`);
}