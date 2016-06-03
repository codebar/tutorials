var UserInterface = {
  selector: 'a[href|="#download"]'
};

UserInterface.setup = function(zipper, downloader) {

  var downloadLinks = document.body.querySelectorAll(UserInterface.selector);

  var createZip = function() {
    zipper.createZip(downloader);
  };

  var registerListener = function(link) {
    console.log("adding listener to", link);
  
    link.addEventListener("click", function(event) {
      event.preventDefault();
console.log('creating zip');
      createZip();
    }, false);
  };

  var checkIfDownloadLinkExist = function() {
    if (downloadLinks) {
      foreachSelector(downloadLinks, function() {
        registerListener(this);

        hideAccessibleFileLinks(this);
      });
    }
  };

  var locateAnchorForDownloadLink = function(link) {
    var anchorName = link.href.replace(/^[^#]*#/, '');
console.log('looking for anchor', anchorName);
    return document.body.querySelector('a[name="' + anchorName + '"')
  }

  var hideAccessibleFileLinks = function(link) {
    var anchor = locateAnchorForDownloadLink(link);
console.log('found anchor', anchor);
    var next = getNextSiblingInDom(anchor);
    console.log('found sibling', next);
  };

  function foreachSelector(nodelist, callback) {
    for (var idx = 0; idx < nodelist.length; idx++) {
      callback.apply(nodelist[idx]);
    }
  }

  function getNextSiblingInDom(element) {
    var allChildrenOfParent = element.parentNode.children;
    var nextSibling = false;

    foreachSelector(allChildrenOfParent, function() {
      if (this === element) {
        nextSibling = true;
      } else {
        if (nextSibling === true) {
          nextSibling = this;
        }
      }
    });
    return nextSibling;
  }

  checkIfDownloadLinkExist();
}
