const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        age: 29,
        birthName: 'Sheyaa Bin Abraham-Joseph',
        birthLocation: 'London, England'
    },
    'chance the rapper': {
        age: 29,
        birthName: 'Chancellor Bernett',
        birthLocation: 'Chicago, illinois'
    },
    'dylan': {
        age: 29,
        birthName: 'Dylan',
        birthLocation: 'Dylan'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rapperName = request.params.rapperName.toLowerCase()
    console.log(rapperName)
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers.dylan)
    }
    
})

app.listen(PORT, () => {
    console.log('The Server is running on port ' + PORT)
})