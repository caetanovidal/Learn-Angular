export class CounterService {
    activeCounter = 0;
    inactiveCounter = 0;

    incrementActive() {
        this.activeCounter++;
        console.log("active count: "+this.activeCounter);
    }

    incrementInactive() {
        this.inactiveCounter++;
        console.log("inactive count: "+this.inactiveCounter);
    }

}