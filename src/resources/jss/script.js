var changeTemplateInnerElementContent = function (templateElement, templateInnerElementId, templateInnerElementNewContent) {
    // You must use the 'content' property when using js selectors to select elements inside the templates
    var titleElement = document.getElementById(templateInnerElementId);
    if (!titleElement) {
        alert("Cannot get element with id '" + templateInnerElementId + "'. You cannot use document.getElementBy to get elements inside the template...");
    }
    var titleElement2 = templateElement.content.getElementById(templateInnerElementId);
    if (titleElement2) {
        alert("...unless the selector is on the 'content' property of the template. Changing content of element with id '" + templateInnerElementId + "'");
        titleElement2.innerHTML = templateInnerElementNewContent;
    }
};

document.addEventListener('DOMContentLoaded', function() {
    var theTemplateElement = document.querySelector("#myTemplate");
    changeTemplateInnerElementContent(theTemplateElement, "title", "Web components title");
});

var activateTemplate = function() {
    var theTemplateElement = document.querySelector("#myTemplate");
    //var clone = document.importNode(theTemplateElement.content, true);
    // You can also use
    var clone = theTemplateElement.content.cloneNode(true);
    document.body.appendChild(clone);
};