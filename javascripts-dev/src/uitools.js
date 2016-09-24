function foreach(list, callback) {
  for (var idx = 0; idx < list.length; idx++) {
    if (callback.apply(list[idx]) === false) {
      break;
    }
  }
}

function getNextSiblingInDom(element) {
  var allChildrenOfParent = element.parentNode.children,
      nextSibling = false,
      foundCurrent = false;

  foreach(allChildrenOfParent, function() {
    if (this === element) {
      foundCurrent = true;
    } else {
      if (foundCurrent === true) {
        nextSibling = this;
        return false;
      }
    }
  });
  return nextSibling;
}

function addClass(element, className) {
  var classes = element.className.split(' ');
  if (classes.indexOf(className) !== false) {
    element.className += " " + className;
  }
}