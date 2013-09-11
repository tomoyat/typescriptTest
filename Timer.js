/**
* Created with JetBrains WebStorm.
* User: tomoya
* Date: 13/08/25
* Time: 23:10
* To change this template use File | Settings | File Templates.
*/
var Timer = (function () {
    function Timer() {
        this.date = new Date();
    }
    Timer.prototype.start = function (_fps) {
        this.frameStart = this.date.getTime();
        this.fps = _fps;
        this.mspf = 1000 / this.fps;
    };

    Timer.prototype.getIntervalByMs = function () {
        var processingTime = this.date.getTime() - this.frameStart;
        var interval = this.mspf > processingTime ? this.mspf - processingTime : 0;
        return interval;
    };
    return Timer;
})();
//# sourceMappingURL=Timer.js.map
