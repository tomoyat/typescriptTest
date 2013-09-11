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

class Game {
    fps: number;
    width: number;
    height: number;
    scene: Scene;
    timer;

    screen: TGEngin.Screen;

    constructor(_width: number = 256, _height: number = 256,
                _fps: number = 30, _layerAmount: number = 3) {
        this.width = _width;
        this.height = _height;
        this.fps = _fps;

        this.screen = new TGEngin.Screen(_width, _height, _layerAmount);

        this.timer = new Timer();
    }

    setScene(_scene: Scene) {
        this.scene = _scene;
    }

    start() {
        this.loop();
    }

    loop() {
        this.timer.start(this.fps);

        this.scene.update(this);

        var interval = this.timer.getIntervalByMs();
        setTimeout( ()=> {this.loop()} , interval );
    }
}