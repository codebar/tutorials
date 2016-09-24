var Zipper = {
  zip: new JSZip()
};

Zipper.createZip = function(downloader, fileList) {

  var addFiles = function() {
    fileList.map(function(url) {
      var fileurl  = url;
      var filename = fileurl.replace(/.*\//g, "");
      Zipper.zip.file(filename, downloader.getFile(fileurl), {binary:true});
    });
  };

  var generateAsync = function() {
    Zipper.zip.generateAsync({type:"blob"}).then(function callback(blob) {
      saveAs(blob, "files.zip");
    }, function (e) {
      console.log(e);
    });
  };

  var generateZip = function() {
    if (JSZip.support.blob) {
      addFiles();
      generateAsync();
    } else {
      console.log("Blob is not supported")
    }
  }

  generateZip();
}
