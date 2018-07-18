'use strict';

const request = require("request");
const _pattern = require("./patterns");

var gmeta = function(url,callback,isHTML){
    if (!url || url == undefined || url == 'undefined')
        url = '';
    let meta = {};
    if (!isHTML || isHTML === false){
        request.get({
            url: url,
            followAllRedirects: true,
            headers: { 'User-Agent': 'GMeta/Generic (GMeta; https://www.npmjs.com/package/gmeta)' }
        }, (err, res, response) => {
            if (err) {
                callback(err,false);
            } else {
                _pattern.forEach(el =>{
                    el.KEYS.forEach(key => {
                        let m = _prepare(response.match(new RegExp(el.pattern.split("{{KEY}}").join(key),'i')))
                        if (m) meta[key] = m;
                    })
                })
                callback(false, meta);
            }
        });
    }else{
        _pattern.forEach(el => {
            el.KEYS.forEach(key => {
                let m = _prepare(url.match(new RegExp(el.pattern.split("{{KEY}}").join(key), 'i')))
                if (m) meta[key] = m;
            })
        })
        callback(false, meta);
    }
}



var _prepare = function(data){
    return data ? data[1] : false;
}

module.exports = gmeta;