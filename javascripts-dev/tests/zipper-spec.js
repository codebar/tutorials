// Using data.js
describe("Zipper", function() {

  var zip = Zipper.zip;

  beforeEach(function() {
    spyOn(zip, "generateAsync").and.returnValue(new Promise( function() {} ));
  });

  it("adds files to the zip", function() {
    spyOn(zip, "file");
    Zipper.createZip(Downloader);
    expect(zip.file).toHaveBeenCalled();
  });

  it("adds the right amount of files", function() {
    spyOn(zip, "file");
    Zipper.createZip(Downloader);
    expect(zip.file.calls.count()).toBe(4);
  });

  it("gets the files names right", function() {
    spyOn(zip, "file");
    spyOn(Downloader, "getFile").and.returnValue("irrelevant");
    Zipper.createZip(Downloader);
    expect(zip.file).toHaveBeenCalledWith("index.html", "irrelevant", {binary: true});
    expect(zip.file).toHaveBeenCalledWith("script.js",  "irrelevant", {binary: true});
  });

  it("tells the downloader to download the files", function() {
    spyOn(Downloader, "getFile");
    Zipper.createZip(Downloader);
    expect(Downloader.getFile).toHaveBeenCalled();
  });

  it("calls the downloader with the right urls", function() {
    spyOn(Downloader, "getFile");
    Zipper.createZip(Downloader);
    expect(Downloader.getFile).toHaveBeenCalledWith("/js/lesson3/files/index.html");
    expect(Downloader.getFile).toHaveBeenCalledWith("/js/lesson3/files/script.js");
  });

  it("generates a zip file", function() {
    Zipper.createZip(Downloader);
    expect(zip.generateAsync).toHaveBeenCalled();
  });
});
