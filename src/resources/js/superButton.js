document.addEventListener('DOMContentLoaded', function() {
    /*
     1. Create a prototype
     */

    var superButtonPrototype = Object.create(HTMLButtonElement.prototype);

    /*
     2. Register the element, this returns us a constructor
     */

    // a) register it with the previously created prototype
    var SuperButtonCstr = document.registerElement('super-button', {prototype: superButtonPrototype});

    // b) register it with an inline prototype
    var SuperButtonWithInlinePrototypeCstr = document.registerElement('super-button-inline-prototype', {
        prototype: Object.create(HTMLButtonElement.prototype)
    });

    /*
     3. Instantiate the element
     */

    //a. Declare them:
    // <super-button>Super button text<super-button>
    //b. Using the new operand and the constructor obtained by registration, and append
    var superButtonElementFromCstr = new SuperButtonCstr();
    document.body.appendChild(superButtonElementFromCstr);
    //c. Create DOM in JS, and append
    var superButtonElementUsingCreateElement = document.createElement('super-button');
    document.body.appendChild(superButtonElementUsingCreateElement);

    /*
    4. Extending elements, you must pass to the registerElementFunction the extends property with the name of
    the html native (or custom) element you want to extend from
     */
    var MegaButtonCstr = document.registerElement('mega-button', {
        prototype: Object.create(HTMLButtonElement.prototype),
        extends: 'button'
    });

}, false);