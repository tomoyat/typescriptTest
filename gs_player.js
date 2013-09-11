/**
* Created with JetBrains WebStorm.
* User: tomoya
* Date: 13/09/10
* Time: 23:24
* To change this template use File | Settings | File Templates.
*/
/// <reference path="Screen.ts" />
var TestGame;
(function (TestGame) {
    var gs_player = (function () {
        function gs_player() {
            this.input = new TestGame.Input();
            this.posx = 10;
            this.posy = 10;
        }
        gs_player.prototype.update = function (layer) {
            this.move();
            this.show(layer);
        };
        gs_player.prototype.move = function () {
            switch (this.input.state) {
                case 'up':
                    this.posy += 3;
                    break;
                case 'right':
                    this.posx += 3;
                    break;
                case 'down':
                    this.posy -= 3;
                    break;
                case 'left':
                    this.posx -= 3;
                    break;
            }
            this.input.state = null;
        };
        gs_player.prototype.show = function (layer) {
            layer.fillStyle = "rgb(200, 10, 10)";
            layer.fillRect(this.posx, this.posy, 20, 20);
        };
        return gs_player;
    })();
    TestGame.gs_player = gs_player;
    var Keyboard = {
        'LEFT': 37,
        'UP': 38,
        'RIGHT': 39,
        'DOWN': 40
    };
    var Input = (function () {
        function Input() {
            var _this = this;
            window.addEventListener("keydown", function (event) {
                return _this.keydown(event);
            }, false);
            window.addEventListener("keyup", function (event) {
                return _this.keyup(event);
            }, false);
        }
        Input.prototype.keydown = function (event) {
            this.clear();
            event.stopPropagation();
            event.preventDefault();
        };

        Input.prototype.keyup = function (event) {
            var keyCode = event["keyCode"];

            switch (keyCode) {
                case Keyboard.UP:
                    this.state = "up";
                    break;
                case Keyboard.RIGHT:
                    this.state = "right";
                    break;
                case Keyboard.DOWN:
                    this.state = "down";
                    break;
                case Keyboard.LEFT:
                    this.state = "left";
                    break;
            }

            event.stopPropagation();
            event.preventDefault();
        };
        Input.prototype.clear = function () {
            this.state = null;
        };
        return Input;
    })();
    TestGame.Input = Input;
})(TestGame || (TestGame = {}));
//# sourceMappingURL=gs_player.js.map
