var UserInterface = {
  selector: "a[href=download]"
};

UserInterface.setup = function(zipper, downloader) {
  var createZip = function() {
    zipper.createZip(downloader);
  };

  var registerListener = function(downloadLink) {
    downloadLink.addEventListener("click", function(event) {
      event.preventDefault();
      createZip();
    }, false);
  };

  var checkIfDownloadLinkExist = function() {
    var downloadLink = document.body.querySelector(UserInterface.selector);
    if (downloadLink) {
      registerListener(downloadLink);
    }
  };

  checkIfDownloadLinkExist();
}
