import Log from "../../utils/log";
import EventHandler from "./event-handler";
import Deps from "../../utils/deps";
import Music from "../../modules/music/music";

export default class ReadyHandler implements EventHandler {
    on = 'ready';
    
    constructor(private music = Deps.get<Music>(Music)) {}

    async invoke(...args: any) {        
        Log.info(`It's live!`, `events`);
        
        this.music.initialize();
    }
}
