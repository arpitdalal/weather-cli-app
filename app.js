const request = require('request')

const url = 'https://api.darksky.net/forecast/f59a17e3d1bec0ac5a10b57dec3bfbed/37.8267,-122.4233'

request({url: url, json: true}, (error, response) => {
    //console.log(response.body.currently)
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature
        + ' degrees out. There is ' + response.body.currently.precipProbability
        + '% chance of rain.')
})