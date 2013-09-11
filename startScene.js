/**
* Created with JetBrains WebStorm.
* User: tomoya
* Date: 13/09/01
* Time: 15:13
* To change this template use File | Settings | File Templates.
*/
/// <reference path="Scene.ts"/>
/// <reference path="gs_player.ts"/>
var startScene = (function () {
    function startScene() {
        this.frame = 0;
        this.player = new TestGame.gs_player();
    }
    startScene.prototype.update = function (_game) {
        this.frame += 1;

        //        console.log(this.frame);
        //        console.log(_game.fps);
        var layer = _game.screen.getLayers(0);

        this.player.update(layer);

        _game.screen.show();
    };
    return startScene;
})();
//# sourceMappingURL=startScene.js.map
