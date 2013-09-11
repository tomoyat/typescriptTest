/**
* Created with JetBrains WebStorm.
* User: tomoya
* Date: 13/09/01
* Time: 23:34
* To change this template use File | Settings | File Templates.
*/
var TGEngin;
(function (TGEngin) {
    var Screen = (function () {
        function Screen(_width, _height, _layerAmount) {
            this.width = _width;
            this.height = _height;
            this.layers = [];
            this.layers_ctx = [];

            var canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;
            document.body.appendChild(canvas);
            this.screen = canvas.getContext("2d");

            for (var i = 0; i < _layerAmount; i++) {
                var canvas = document.createElement("canvas");
                canvas.width = this.width;
                canvas.height = this.height;
                this.layers_ctx.push(canvas.getContext("2d"));
                this.layers.push(canvas);
            }
        }
        Screen.prototype.show = function () {
            this.screen.clearRect(0, 0, this.width, this.height);

            for (var i = 0; i < this.layers.length; i++) {
                this.screen.drawImage(this.layers[i], 0, 0);
            }
            for (var i = 0; i < this.layers_ctx.length; i++) {
                this.layers_ctx[i].clearRect(0, 0, this.width, this.height);
            }
        };
        Screen.prototype.getLayers = function (_idx) {
            return this.layers_ctx[_idx];
        };
        return Screen;
    })();
    TGEngin.Screen = Screen;
})(TGEngin || (TGEngin = {}));
//# sourceMappingURL=Screen.js.map
