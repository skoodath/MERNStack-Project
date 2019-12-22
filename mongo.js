const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://shijuNam:${password}@cluster0-wtean.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Contact = mongoose.model('Contact', phonebookSchema)

const contact = new Contact(
    {
        name: name,
        number: number
    }
)

contact.save().then(response => {
    console.log(`${contact.name} & ${contact.number} saved!`)
    mongoose.connection.close()
})
Contact.find({}).then(result => {
    result.forEach(contact => {
        console.log(contact)
    })
    mongoose.connection.close()
})