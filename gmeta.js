'use strict';

const request = require("request");
const _pattern = require("./patterns");

var gmeta = function (url, callback, isHTML) {
    return new Promise((resolve, reject) => {
        if (!url || url == undefined || url == 'undefined')
            url = '';
        if (callback === true) isHTML = true
        let meta = {};
        if (!isHTML || isHTML === false) {
            request.get({
                url: url,
                followAllRedirects: true,
                headers: { 'User-Agent': 'GMeta/Generic (GMeta; https://www.npmjs.com/package/gmeta)' }
            }, (err, res, response) => {
                if (err) {
                    if (typeof callback === 'function')
                        callback(err, false);
                    return reject(err)
                } else {
                    _pattern.forEach(el => {
                        el.KEYS.forEach(key => {
                            let m = _prepare(response.match(new RegExp(el.pattern.split("{{KEY}}").join(key), 'i')))
                            if (m) meta[key] = m;
                        })
                    })
                    if (typeof callback === 'function')
                        callback(false, meta);
                    return resolve(meta)
                }
            });
        } else {
            _pattern.forEach(el => {
                el.KEYS.forEach(key => {
                    let m = _prepare(url.match(new RegExp(el.pattern.split("{{KEY}}").join(key), 'i')))
                    if (m) meta[key] = m;
                })
            })
            if (typeof callback === 'function')
                callback(false, meta);
            return resolve(meta)
        }
    });
}



var _prepare = function (data) {
    return data ? data[1] : false;
}

module.exports = gmeta;