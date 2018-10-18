var Downloader = Downloader || {};

Downloader.getFile = function(url) {

  var getContent = function(url, resolve, reject) {
    JSZipUtils.getBinaryContent(url, function (err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  };

  var urlToPromise = function(url) {
    var Promise = window.Promise;
    if (!Promise) {
      Promise = JSZip.external.Promise;
    }

    return new Promise(function(resolve, reject) {
      getContent(url, resolve, reject);
    });
  };

  return urlToPromise(url);
};
