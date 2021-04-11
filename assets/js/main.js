"use strict";

var bashar = {

        lexicon: {
                body: document.body,
                        header: document.getElementById("header"),
                                centralStop: document.getElementById("headerGradientCentralStop"),
                        nav: document.getElementById("nav"),
                        main: document.getElementById("main"),
                        footer: document.getElementById("footer")
        },

        initialiseScripts: function() {
                bashar.header.initialiseHeaderScripts();
        },

        header: {
                initialiseHeaderScripts: function() {
                        trackCursorPosition();
                },
                trackCursorPosition: function() {
                        window.addEventListener("mousemove", (event) => {
                                let cursorPositionPercentage = parseInt(event.clientY / window.innerHeight * 100) + "%";
                                bashar.header.updateCentralStopOffset(cursorPositionPercentage);
                        });
                },
                updateCentralStopOffset: function(cursorPosition) {
                        bashar.lexicon.centralStop.setAttribute("offset", cursorPos);
                },
        },

}

bashar.initialiseScripts();
