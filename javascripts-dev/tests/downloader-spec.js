describe("Downloader", function() {

  var url = Files.all[0];

  it("creates a promise of the right type", function() {
    var promise = Downloader.getFile(url);
    expect(promise instanceof window.Promise).toBe(true);
  });

  it("tells the utils callback to download the files", function() {
    spyOn(JSZipUtils, "getBinaryContent");
    Downloader.getFile(url);
    expect(JSZipUtils.getBinaryContent).toHaveBeenCalled();
  });

  it("calls the utils callback with the right url", function() {
    spyOn(JSZipUtils, "getBinaryContent");
    Downloader.getFile(url);
    expect(JSZipUtils.getBinaryContent.calls.mostRecent().args).toContain(url);
    expect(JSZipUtils.getBinaryContent.calls.mostRecent().args).toContain(url);
  });

});
