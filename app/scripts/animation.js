//** Components

var utilities = require('./utilities');

var fadeInUp = utilities.getClasses('fade-in-up');
var fadeInLeft = utilities.getClasses('fade-in-left');
var pin = utilities.getClasses('pinned');

var ANIMATION = {

    scrollMagic: {

        controller: new ScrollMagic.Controller(),

        init: function () {

            fadeInUp.forEach(function (item, index) {
                var fadeInUp = new ScrollMagic.Scene({
                    triggerElement: '.' + item,
                    triggerHook: 1
                });
                fadeInUp.setTween(TweenMax.from('.' + item, 0.6, {
                    opacity: 0,
                    offset: 40,
                    y: 40,
                    ease: Expo.ease
                }));
                ANIMATION.scrollMagic.controller.addScene([
                    fadeInUp
                ]);

            });

            fadeInLeft.forEach(function (item, index) {
                var fadeInLeft = new ScrollMagic.Scene({
                    triggerElement: '.' + item,
                    triggerHook: 1
                });
                fadeInLeft.setTween(TweenMax.from('.' + item, 0.6, {
                    opacity: 0,
                    offset: 40,
                    x: -40,
                    ease: Expo.ease
                }));
                ANIMATION.scrollMagic.controller.addScene([
                    fadeInLeft
                ]);
            });

            pin.forEach(function (item, index) {
                var pin = new ScrollMagic.Scene({
                    triggerElement: '.' + item,

                });
                pin.setPin();
                ANIMATION.scrollMagic.controller.addScene([
                    pin
                ]);
            });

        }
    },

    init: function () {
        ANIMATION.scrollMagic.init();
    },
};

module.exports = {
    init: ANIMATION.init
}
