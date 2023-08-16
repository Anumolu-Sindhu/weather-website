const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d2b5b65dec52cf47bee7df7cdb6a81b6&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. But it feels like ' + body.current.feelslike + ' out there.')
        }
    })
}

module.exports = forecast