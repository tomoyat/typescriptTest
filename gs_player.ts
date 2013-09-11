/**
 * Created with JetBrains WebStorm.
 * User: tomoya
 * Date: 13/09/10
 * Time: 23:24
 * To change this template use File | Settings | File Templates.
 */
/// <reference path="Screen.ts" />

module TestGame {
    export class gs_player {
        private posx: number;
        private posy: number;
        private input: TestGame.Input;

        constructor () {
            this.input = new TestGame.Input();
            this.posx = 10;
            this.posy = 10;
        }
        update(layer) {
            this.move();
            this.show(layer);
        }
        move() {
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

        }
        show(layer) {
            layer.fillStyle = "rgb(200, 10, 10)";
            layer.fillRect(this.posx, this.posy, 20, 20);
        }
    }
    var Keyboard = {
        'LEFT': 37,
        'UP': 38,
        'RIGHT': 39,
        'DOWN': 40
    }
    export class Input {
        state: string;

        constructor () {
            window.addEventListener("keydown", event => this.keydown(event) , false);
            window.addEventListener("keyup", event => this.keyup(event) , false);
        }

        keydown( event: Event ) {
            this.clear();
            event.stopPropagation();  // eventを伝播させない
            event.preventDefault();  //
        }

        keyup( event ) {
            var keyCode = event["keyCode"];

            switch (keyCode)
            {
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

        }
        clear() {
            this.state = null;
        }

    }
}

