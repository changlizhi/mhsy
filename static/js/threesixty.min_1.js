(function ($) {
    'use strict';
    $.UIMIX = function (el, options) {
        var fullview = this, data, frames = [];
        fullview.container = $(el);
        fullview.el = el;
        fullview.container.data('UIMIX', fullview);
        $.UIMIX.defaultOptions = {
            ready: false,
            dragging: false,
            isDrag: false,
            pointerStartPosX: 0,
            firstAnimate: false,
            auto: false,
            isMove: false,
            scale: 1,
            suff: "png",
            fix_width: -1,
            fix_height: -1,
            max_width: -1,
            max_height: -1,
            img: 0,
            monitorStartTime: 0,
            monitorInt: 10,
            ticker: 0,
            speedMultiplier: 5,
            spinner: false,
            container: false,
            pathPattern: false,
            totalFrames: 180,
            currentFrame: 0,
            frames: [],
            endFrame: -720,
            loadedImages: 0,
            icon: false,
            control: false,
            callback2: false,
            callback1: false,
            fullCallback: false,
            comCallback: false,
            istouchmove: false,
            countMove: 0,
            ratio: 1,
            startIndex: 0,
            isLoad: true,
            stopList: {0: 0},
            audioList: {0: function () {
                }},
            image_count: 180,
        };

        fullview.init = function () {
            data = $.extend({}, $.UIMIX.defaultOptions, options);
            var isTouchSupported = 'ontouchstart' in window;
            data.startEvent = isTouchSupported ? 'touchstart' : 'mousedown';
            data.stopEvent = isTouchSupported ? 'touchend' : 'mouseup';
            data.moveEvent = isTouchSupported ? 'touchmove' : 'mousemove';
            if (data.fullCallback && typeof data.fullCallback === "function") {
                data.fullCallback(fullview);
            }
            if (fullview.container.attr('image_count')) {

                data.image_count = parseInt(fullview.container.attr('image_count'))
            }
            if (fullview.container.attr('end_frame')) {
                data.totalFrames = parseInt(fullview.container.attr('end_frame'));
                data.endFrame = parseInt(fullview.container.attr('end_frame'))
            }
            if (fullview.container.attr('scale')) {
                data.scale = parseInt(fullview.container.attr('scale'))
            }

            if (!data.img) {
                data.img = "img/";
            }
            if (!data.firstAnimate) {
                data.currentFrame = data.endFrame;
            }
            if (data.auto) {

            }
            if (typeof data.control === "function") {
                data.control(fullview, data);
            }
            fullview.loadImage();
            if (data.isDrag) {
                fullview.container.on(data.startEvent,
                        function (event) {
                            event.preventDefault();
                            data.pointerStartPosX = fullview.getPointerEvent(event).pageX;
                            data.dragging = true
                        }).on(data.moveEvent,
                        function (event) {
                            event.preventDefault();
                            if (data.ticker === 0 && data.isMove) {
                                $(".drag-tip").hide();
                                fullview.trackPointer(event);
                            }
                        }).on(data.stopEvent,
                        function (event) {
                            event.preventDefault();

                            data.dragging = false

                        });
            }

        };
        fullview.imageLoaded = function (img) {
            var li = $('<li></li>');
            var image = $('<img>').attr('src', img.src).addClass("previous-image").appendTo(li);
            data.frames.push(image);
            fullview.container.children('ol').append(li);

            if (data.stopList[data.loadedImages] != undefined && data.stopList[data.loadedImages] != 0) {
                data.stopList[data.loadedImages]--;
            } else {
                data.loadedImages++;
            }
//            fullview.container.find('em.loading p').text(Math.floor(data.loadedImages / data.totalFrames * 100) + "%");
            if (data.loadedImages == data.image_count) {
//                图片加载完成
                if (data.comCallback && typeof data.comCallback === "function") {
                    data.comCallback();
                }
                fullview.start();
            } else {
                fullview.loadImage()
            }
        };
        fullview.loadImage = function (force) {
            var imageName = data.img + (data.loadedImages + 1 + data.startIndex) + "." + data.suff;
//            if (force)
//                imageName += "?" + new Date().getTime();
            var img = new Image();
            img.src = imageName;
            if (data.isLoad) {
                if (img.complete) {
                    fullview.imageLoaded(img);
                    return
                }
                $(img).load(function () {
                    fullview.imageLoaded(img)
                }).error(function () {
                    if (force) {
//                    fullview.container.html('<div style="text-align:center;margin-top:50%;font-size:30px;">加载失败，<a href="' + location.href + '">请重试</a></div>')
                    } else {
                        fullview.loadImage(true)
                    }
                })
            } else {
                fullview.imageLoaded(img);
            }

        };
        fullview.start = function () {
            data.frames[0].removeClass("previous-image").addClass("current-image");
//            fullview.container.children('ol').fadeIn("slow");
//            data.ready = true;
//            fullview.refresh()
            fullview.container.children("em.loading").fadeOut("slow",
                    function () {
                        fullview.container.children("em.loading").remove();
                        fullview.container.children('ol').fadeIn("slow");
                        data.ready = true;
                        fullview.refresh()
                    });
        };
        fullview.render = function () {
            if (data.currentFrame != data.endFrame) {
                var frameEasing = data.endFrame < data.currentFrame ? Math.floor((data.endFrame - data.currentFrame) * 0.1) : Math.ceil((data.endFrame - data.currentFrame) * 0.1);

                data.frames[fullview.getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image");
                data.currentFrame += frameEasing;

                data.frames[fullview.getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image");

            } else {

                window.clearInterval(data.ticker);
                data.ticker = 0;

            }
        };
        fullview.render2 = function () {
            if (data.currentFrame != data.endFrame) {

                var frameEasing = data.endFrame < data.currentFrame ? Math.floor((data.endFrame - data.currentFrame) * 0.1) : Math.ceil((data.endFrame - data.currentFrame) * 0.1);
                data.frames[fullview.getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image");
                data.currentFrame += frameEasing;
                data.frames[fullview.getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image");

            } else {
                window.clearInterval(data.ticker);
                data.ticker = 0;
            }
        };
        fullview.dismantle = function (id) {

        };
        fullview.refresh = function () {
            var speed = Math.round(1000 / 60);

            if (data.ticker === 0) {
                data.ticker = setInterval(fullview.render2, speed);
                data.countMove = 0;
            }
        };
        fullview.loop = function (s, speed) {
            data.frames[fullview.getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image");
            data.currentFrame = 0
            data.frames[data.currentFrame].removeClass("previous-image").addClass("current-image");

            fullview.animate1(s, speed);
        };
        fullview.animate1 = function (s, speed) {
            if (data.ticker === 0) {
                data.ticker = setInterval(function () {
                    if ((data.currentFrame % data.endFrame) !== (data.endFrame - 1)) {
//                        console.log(data.stopList[data.currentFrame-1])
//                        if (data.stopList[data.currentFrame] != undefined && data.stopList[data.currentFrame] != 0) {
//                            data.stopList[data.currentFrame]--;
//                            return;
//                        }
                        if (data.audioList[data.currentFrame] && typeof data.audioList[data.currentFrame] === "function") {
                            data.audioList[data.currentFrame]();
                        }
                        data.frames[fullview.getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image");
                        data.currentFrame += 1;
                        data.frames[fullview.getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image");
//                        console.log(data.currentFrame + "," + data.currentFrame)
                    } else {
                        window.clearInterval(data.ticker);
                        data.ticker = 0;
                        if (data.ticker === 0) {
                            $(s).show();
                            if (!data.firstAnimate) {
                                $(".drag-tip").show().removeClass("cur");
                                $(".drag-tip-right").addClass("cur").siblings().removeClass("cur");
                                $(".icon-dialogs").show().addClass("cur");
                                data.isMove = true;
//                                op_btn2(fullview.container);
                            }
                            if (data.callback1 && typeof data.callback1 === "function") {
                                data.callback1();
                            }

                        }

                    }
                }, speed || Math.round(1000 / 10));
            }
        };
        fullview.animate2 = function (speed) {
            data.isMove = false;
            if (data.ticker === 0) {
                data.ticker = setInterval(function () {
                    if (data.currentFrame !== 0) {
                        data.frames[fullview.getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image");
                        data.currentFrame -= 1;
                        data.frames[fullview.getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image");
                    } else {
                        window.clearInterval(data.ticker);
                        data.ticker = 0;
                        if (data.ticker === 0) {
                            if (data.callback2 && typeof data.callback2 === "function") {
                                data.callback2();
                            }
                            $(".btn").show();
                        }
                    }
                }, speed || Math.round(1000 / 10));
            }
        };

        fullview.getNormalizedCurrentFrame = function () {
//            console.log(data.currentFrame)
//            var c = -Math.ceil(data.currentFrame % data.totalFrames);
//            if (c < 0)
//                c += (data.totalFrames - 1);
            var c = Math.ceil(data.currentFrame % data.totalFrames);
            return c
        };
        fullview.getControlCurrentFrame = function () {

        };
        fullview.getPointerEvent = function (event) {
            return event.originalEvent.targetTouches ? event.originalEvent.targetTouches[0] : event
        };
        fullview.trackPointer = function (event) {
            if (!data.ready || !data.dragging)
                return;
            var x = fullview.getPointerEvent(event).pageX;

            if (data.monitorStartTime < new Date().getTime() - data.monitorInt) {

                var dis = x - data.pointerStartPosX;
                data.countMove++;
//                if (data.countMove < 2) {
//                console.log(data.countMove);
//                data.endFrame = data.currentFrame + Math.ceil((data.totalFrames - 1) * 2 * (dis / fullview.container.width()));
                if (dis < 0) {
//                    $(".drag-tip").addClass("hide");
                    data.endFrame = data.currentFrame - 1;
                } else if (dis > 0) {
                    data.endFrame = data.currentFrame + 1;
                }
//                } else {
                if (data.control) {
                    if (dis < 0 && data.endFrame > -1) {
                        fullview.refresh();
                    } else if (dis > 0 && data.endFrame < (data.totalFrames)) {
                        fullview.refresh();
                    }

//                        }
                } else {
                    fullview.refresh();
                }

//                }

                data.monitorStartTime = new Date().getTime();
                data.pointerStartPosX = x;

            }
        };
        fullview.auto = function () {
            data.endFrame = data.currentFrame + 1;
        };

        fullview.init();
    };
    $.fn.UIMIX = function (options) {
        return Object.create(new $.UIMIX(this, options));
    };
}(jQuery));
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        'use strict';
        function F() {
        }
        F.prototype = o;
        return new F();
    };
}