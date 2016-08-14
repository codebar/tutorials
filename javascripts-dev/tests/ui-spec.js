describe("UI", function() {

  var link, section, rightAnchor = "#download-foldername";

  beforeEach(function() {
    setFixtures();
    document.body.appendChild(link);
    document.body.appendChild(section);
  });

  afterEach(function() {
    document.body.removeChild(link);
    document.body.removeChild(section);
  });

  it("triggers the download if the link points to the right anchor", function() {
    pointLinkTo(rightAnchor);
    spyOn(Zipper, "createZip");
    UserInterface.setup(Zipper, undefined);
    link.click();
    expect(Zipper.createZip).toHaveBeenCalled();
  });

  it("prevents default of download link (does not follow link)", function() {
    pointLinkTo(rightAnchor);
    UserInterface.setup(undefined, undefined);
    var canceled = !link.dispatchEvent(createClickEvent());
    expect(canceled).toBe(true);
  });

  it("does not trigger the download if the link doesn't point to the right anchor", function() {
    pointLinkTo("http://example.com");
    spyOn(Zipper, "createZip");
    UserInterface.setup(Zipper, undefined);
    dontFollowLink();
    link.click();
    expect(Zipper.createZip).not.toHaveBeenCalled();
  });

  it("calls the zipper with the right downloader", function() {
    pointLinkTo(rightAnchor);
    spyOn(Zipper, "createZip");
    UserInterface.setup(Zipper, Downloader);
    link.click();
    expect(Zipper.createZip).toHaveBeenCalledWith(Downloader, testPaths());
  });

  it("gets the paths of the links", function() {
    listId = rightAnchor.substring(1);
    expect(UserInterface.getPathsInList(listId)).toEqual(testPaths())
  });

  function pointLinkTo(href) {
    link.setAttribute("href", href);
  }

  function dontFollowLink() {
    link.onclick = function() { return false; };
  }

  function createClickEvent() {
    return new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": true
    });
  }

  function setFixtures() {
    link    = document.createElement("a");
    section = document.createElement("section");
    section.innerHTML = '<ul id="download-foldername"><li><a href="/js/lesson3/foldername/index.html">index.html</a></li><li><a href="/js/lesson3/foldername/jquery.js">jquery.js</a></li></ul>';
  }

  function testPaths() {
    localhost = "http://localhost:4000";
    return [
      localhost + "/js/lesson3/foldername/index.html",
      localhost + "/js/lesson3/foldername/jquery.js"
    ];
  }
});
