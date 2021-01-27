import Request from './classes/Request.js'

Request.mySkills()
    .then((response) => response.json())
    .then((data) => {
        console.log('Esta es la lista de skills', data)
    })