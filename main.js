// ** globals ** //
/* jshint -W083 */

var scope = {};
var classNamesArray = ['name', 'age'];

// ** functions ** //

// iterate through classNamesArray
// get DOM elements in for loop that are assoicated with each class
// return an array of elements

function getElements() {
  var outputArray = [];
  for (var i=0; i<classNamesArray.length; i++) {
    outputArray.push(document.getElementsByClassName(classNamesArray[i]));
  }
  return outputArray;
}

// iterate through each dom element
// attach onkeyup event to each
// perform some sort of action to bind 2 inputs

function domBinding(elements) {
  for (var index in elements) {
    elements[index].onkeyup = function() {
      for (var index in elements) {
        elements[index].value = this.value;
      }
    };
  }
}

// iterate through the dom elements
// object.defineproperty(object, property, callback) (use a set function)
// scope.name = "something" => updates the dom

function modelBinding(elements, index) {
  Object.defineProperty(scope, classNamesArray[index], {
    set: function(newValue) {
      for (var index in elements) {
        elements[index].value = newValue;
      }
    }
  });
}

// ** function calls ** //

var domElements = getElements();

for (var i=0; i<domElements.length; i++) {
  domBinding(domElements[i]);
  modelBinding(domElements[i], i);
}
// domBinding(domElements[0]);
// modelBinding(domElements[0]);

// domBinding(domElements[1]);
// modelBinding(domElements[1]);