var UserInterface = {
  selector: "a[href|=#download]"
};

UserInterface.setup = function(zipper, downloader) {

  var downloadLinks = document.body.querySelector(UserInterface.selector);
console.log(downloadLinks);
  var createZip = function() {
    zipper.createZip(downloader);
  };

  var registerListener = function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
console.log('creating zip');
      createZip();
    }, false);
  };

  var checkIfDownloadLinkExist = function() {
    if (downloadLinks) {
      for (each downloadLinks as linkIdx)
      registerListener(downloadLinks[linkIdx]);
    }
  };

  checkIfDownloadLinkExist();
}
