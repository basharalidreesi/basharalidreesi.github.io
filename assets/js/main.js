"use strict";

const bashar = {

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
                        bashar.header.trackCursorPosition();
                },
                trackCursorPosition: function() {
                        window.addEventListener("mousemove", (event) => {
                                let cursorPositionPercentage = parseInt((event.clientY / bashar.lexicon.header.clientHeight * 100) - bashar.lexicon.header.getBoundingClientRect().top) + "%";
                                bashar.header.updateCentralStopOffset(cursorPositionPercentage);
                        });
                },
                updateCentralStopOffset: function(cursorPositionPercentage) {
                        bashar.lexicon.centralStop.setAttribute("offset", cursorPositionPercentage);
                },
        },

}

bashar.initialiseScripts();
