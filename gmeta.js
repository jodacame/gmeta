"use strict";

const got = require("got");

const _pattern = require("./patterns");

var gmeta = function (url, callback, isHTML) {
  return new Promise(async (resolve, reject) => {
    if (!url || url == undefined || url == "undefined") url = "";
    if (callback === true) isHTML = true;
    let meta = {};
    if (!isHTML || isHTML === false) {
      try {
        const response = await got(url, { timeout: 3000 });
        let head = response.body.match(/<head[^>]*>[\s\S]*<\/head>/gi);
        head = head[0] ? head[0] : response.body;

        head = head.replace(/(<style[\w\W]+style>)/gi, "");
        head = head.replace(/(<script[\w\W]+script>)/gi, "");

        _pattern.forEach((el) => {
          el.KEYS.forEach((key) => {
            let m = _prepare(
              head.match(new RegExp(el.pattern.split("{{KEY}}").join(key), "i"))
            );
            if (m) meta[key] = m;
          });
        });
        if (typeof callback === "function") callback(false, meta);
        return resolve(meta);
      } catch (error) {
        if (typeof callback === "function") callback(error, false);
        console.error(error);
        return reject(error);
      }
    } else {
      _pattern.forEach((el) => {
        el.KEYS.forEach((key) => {
          let m = _prepare(
            url.match(new RegExp(el.pattern.split("{{KEY}}").join(key), "i"))
          );
          if (m) meta[key] = m;
        });
      });
      if (typeof callback === "function") callback(false, meta);
      return resolve(meta);
    }
  });
};

var _prepare = function (data) {
  return data ? data[1] : false;
};

module.exports = gmeta;
