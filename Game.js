/**
* Created with JetBrains WebStorm.
* User: tomoya
* Date: 13/08/25
* Time: 21:43
* To change this template use File | Settings | File Templates.
*/
/// <reference path="Scene.ts"/>
/// <reference path="Timer.ts"/>
/// <reference path="Screen.ts"/>
var Game = (function () {
    function Game(_width, _height, _fps, _layerAmount) {
        if (typeof _width === "undefined") { _width = 256; }
        if (typeof _height === "undefined") { _height = 256; }
        if (typeof _fps === "undefined") { _fps = 30; }
        if (typeof _layerAmount === "undefined") { _layerAmount = 3; }
        this.width = _width;
        this.height = _height;
        this.fps = _fps;

        this.screen = new TGEngin.Screen(_width, _height, _layerAmount);

        this.timer = new Timer();
    }
    Game.prototype.setScene = function (_scene) {
        this.scene = _scene;
    };

    Game.prototype.start = function () {
        this.loop();
    };

    Game.prototype.loop = function () {
        var _this = this;
        this.timer.start(this.fps);

        this.scene.update(this);

        var interval = this.timer.getIntervalByMs();
        setTimeout(function () {
            _this.loop();
        }, interval);
    };
    return Game;
})();
//# sourceMappingURL=Game.js.map
