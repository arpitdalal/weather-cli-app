const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f59a17e3d1bec0ac5a10b57dec3bfbed/' + latitude + ',' + longitude + '?units=si'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Oops :O. Something went wrong!')
        } else if (response.body.error) {
            callback(response.body.error)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature
                + ' degrees out. There is ' + response.body.currently.precipProbability
                + '% chance of rain.')
        }
    })
}

module.exports = forecast