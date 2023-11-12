

class EventEmitter{
    private events:{[key:string]:Array<() => void>} = {}


    public emit(eventName:string){
        if(this.events[eventName]){
            for(let action of this.events[eventName]){
                action();
            }
        }
    }

    public on(eventName: string, callback: () => void){
        if(this.events[eventName]){
            this.events[eventName].push(callback);
            return;
        }
        this.events[eventName] = [callback];
    }
}

export default EventEmitter;
