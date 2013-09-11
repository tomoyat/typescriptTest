/**
 * Created with JetBrains WebStorm.
 * User: tomoya
 * Date: 13/09/01
 * Time: 23:34
 * To change this template use File | Settings | File Templates.
 */
module TGEngin {
    export class Screen {
        private  width : number;
        private  height : number;
        private screen;
        private layers : any[];
        private layers_ctx : any[];

        constructor (_width: number, _height: number, _layerAmount: number) {
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
        show() {
            this.screen.clearRect(0, 0, this.width, this.height);

            for (var i = 0; i < this.layers.length; i++) {
                this.screen.drawImage(this.layers[i], 0, 0);
            }
            for (var i = 0; i < this.layers_ctx.length; i++) {
                this.layers_ctx[i].clearRect(0, 0, this.width, this.height);
            }
        }
        getLayers(_idx:number) {
            return this.layers_ctx[_idx];
        }
    }
}
