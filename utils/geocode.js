const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&&access_token=pk.eyJ1IjoiYXJwaXRkYWxhbG0iLCJhIjoiY2s2djFxc2E0MDE4ODN1bjhkMmQ3aXpvaSJ9.IyX3XPJE2bousUcCOquSVg'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Oops :O. Something went wrong!')
        } else if (response.body.message || response.body.features.length === 0) {
            callback('Location not found :(')
        } else {
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            const name = response.body.features[0].place_name
            callback(undefined, { latitude, longitude, name })
        }
    })
}

module.exports = geocode