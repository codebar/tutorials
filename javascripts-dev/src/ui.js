var UserInterface = {
  selector: "a[href=download]"
};

UserInterface.setup = function(zipper, downloader) {

  var downloadLink = document.body.querySelector(UserInterface.selector);

  var createZip = function() {
    zipper.createZip(downloader);
  };

  var registerListener = function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      createZip();
    }, false);
  };

  var checkIfDownloadLinkExist = function() {
    if (downloadLink) {
      registerListener(downloadLink);
    }
  };

  checkIfDownloadLinkExist();
}
