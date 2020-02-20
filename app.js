const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/f59a17e3d1bec0ac5a10b57dec3bfbed/' + latitude + ',' + longitude + '?units=si'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Oops :O. Something went wrong!')
//     } else if (response.body.error) {
//         console.log(response.body.error)
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature
//             + ' degrees out. There is ' + response.body.currently.precipProbability
//             + '% chance of rain.')
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/charlottetown.json?limit=1&&access_token=pk.eyJ1IjoiYXJwaXRkYWxhbG0iLCJhIjoiY2s2djFxc2E0MDE4ODN1bjhkMmQ3aXpvaSJ9.IyX3XPJE2bousUcCOquSVg'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Oops :O. Something went wrong!')
//     } else if (response.body.message || response.body.features.length === 0) {
//         console.log('Location not found :(')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//     }
// })

geocode('Halifax', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Latitude: ' + data.latitude + '\nLongitude: ' + data.longitude + '\nName: ' + data.name)
    }
})