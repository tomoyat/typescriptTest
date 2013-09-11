/**
 * Created with JetBrains WebStorm.
 * User: tomoya
 * Date: 13/08/25
 * Time: 22:31
 * To change this template use File | Settings | File Templates.
 */
/// <reference path="Game.ts" />
interface Scene {
    update: (_game : Game)=>void;
}