/**
 * Created with JetBrains WebStorm.
 * User: tomoya
 * Date: 13/08/25
 * Time: 23:10
 * To change this template use File | Settings | File Templates.
 */

class Timer {
    date = new Date();
    fps : number;
    mspf : number;
    frameStart : number;

    start(_fps : number) {
        this.frameStart = this.date.getTime();
        this.fps = _fps;
        this.mspf = 1000 / this.fps;
    }

    getIntervalByMs () : number {
        var processingTime :number = this.date.getTime() - this.frameStart;
        var interval : number = this.mspf > processingTime ? this.mspf - processingTime : 0;
        return interval;
    }
}