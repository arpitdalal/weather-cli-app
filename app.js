const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please insert address!')
} else {
    geocode(address, (error, {latitude, longitude, name}) => {
        if (error) {
            return console.log(error)
        } else {
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return console.log(error)
                } else {
                    return console.log(name + '\n' +forecastData)
                }
            })
        }
    })
}