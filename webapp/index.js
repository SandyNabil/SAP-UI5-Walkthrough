sap.ui.define([
    "sap/m/Text",
    "sap/m/Button"

], function(Text, Button) {
    "use strict";

    new Text({
        text: "Hello UI5 and Hiiiii"
    }).placeAt("content");

    new Button({
        text: "Click me!"
    }).placeAt("content");
});