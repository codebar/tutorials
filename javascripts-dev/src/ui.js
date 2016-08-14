var UserInterface = {
  selector: "a[href^='#download-']"
};

UserInterface.setup = function(zipper, downloader) {

  var createZip = function(downloadLinkUrl) {
    var listId = downloadLinkUrl.split("#").pop();
    zipper.createZip(downloader, UserInterface.getPathsInList(listId));
  };

  var registerListener = function(downloadLink) {
    downloadLink.addEventListener("click", function(event) {
      event.preventDefault();
      createZip(this.href);
    }, false);
  };

  var checkIfDownloadLinkExist = function() {
    var downloadLink = document.body.querySelector(UserInterface.selector);
    if (downloadLink) {
      registerListener(downloadLink);
    }
  };

  checkIfDownloadLinkExist();
};

UserInterface.getPathsInList = function(listId) {
  var links = document.querySelectorAll("#" + listId + " a");
  return Array.prototype.slice.call(links).map(function(link) {
    return link.href;
  });
};
