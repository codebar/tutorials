var UserInterface = {
  selector: 'a[href|="#download"]'
};

UserInterface.setup = function(zipper, downloader) {

  var downloadLinks = document.body.querySelectorAll(UserInterface.selector);

  var createZip = function(files) {
    zipper.createZip(downloader, files);
  };

  var registerListener = function(link) {
    console.log("adding listener to", link);
  
    link.addEventListener("click", function(event) {
      event.preventDefault();

      //  Get the file list on the fly
      var files = getFileList(event.target);
console.log('files', files);

console.log('creating zip');
      createZip(files);
    }, false);
  };

  var checkIfDownloadLinkExist = function() {
    if (downloadLinks) {
      foreach(downloadLinks, function() {
        registerListener(this);

        hideAccessibleFileLinks(this);
      });
    }
  };

  var locateAnchorForDownloadLink = function(link) {
    var anchorName = link.href.replace(/^[^#]*#/, '');
    return document.body.querySelector('a[name="' + anchorName + '"')
  }

  var hideAccessibleFileLinks = function(link) {
    var anchor = locateAnchorForDownloadLink(link);
    var next = getNextSiblingInDom(anchor);

    addClass(anchor, 'hidden'); //  could be made an expander button
    addClass(next, 'hidden');
  };

  var getFileList = function(link) {
    var anchor = locateAnchorForDownloadLink(link);
    var next = getNextSiblingInDom(anchor);

    var fileLinks = next.querySelectorAll('a'),
        files = [];
    foreach(fileLinks, function() {
      files.push(this.href);
    });
    return files;
  }

  checkIfDownloadLinkExist();
}
