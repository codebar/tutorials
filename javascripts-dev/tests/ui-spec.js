describe("UI", function() {

  var link;

  beforeEach(function() {
    link = document.createElement("a");
    document.body.appendChild(link);
  });

  afterEach(function() {
    document.body.removeChild(link);
  });

  it("triggers the download if the link points to 'download'", function() {
    pointLinkTo("download");
    spyOn(Zipper, "createZip");
    UserInterface.setup(Zipper, undefined);
    link.click();
    expect(Zipper.createZip).toHaveBeenCalled();
  });

  it("prevents default of download link (does not follow link)", function() {
    pointLinkTo("download");
    UserInterface.setup(undefined, undefined);
    var canceled = !link.dispatchEvent(createClickEvent());
    expect(canceled).toBe(true);
  });

  it("does not trigger the download if the link doesn't point to 'download'", function() {
    pointLinkTo("http://example.com/");
    spyOn(Zipper, "createZip");
    UserInterface.setup(Zipper, undefined);
    dontFollowLink();
    link.click();
    expect(Zipper.createZip).not.toHaveBeenCalled();
  });

  it("calls the zipper with the right downloader", function() {
    pointLinkTo("download");
    spyOn(Zipper, "createZip");
    UserInterface.setup(Zipper, Downloader);
    link.click();
    expect(Zipper.createZip).toHaveBeenCalledWith(Downloader);
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
});
