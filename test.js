/**
* Created with JetBrains WebStorm.
* User: tomoya
* Date: 13/08/25
* Time: 16:16
* To change this template use File | Settings | File Templates.
*/
///  <reference path="Game.ts"/>
///  <reference path="startScene.ts"/>
function exec() {
    var canv = document.createElement("canvas");
    canv.width = 256;
    canv.height = 256;
    document.body.appendChild(canv);
    var ctx = canv.getContext("2d");
    console.log("new game");
    var game = new Game();
    game.setScene(new startScene());
    game.start();
}

exec();
//# sourceMappingURL=test.js.map
