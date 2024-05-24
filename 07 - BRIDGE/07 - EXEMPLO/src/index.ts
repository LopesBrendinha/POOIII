import Facebook from "./plataforms/Facebook";
import IPlataform from "./plataforms/interface/IPlatsform";
import Twitch from "./plataforms/Twitch";
import Youtube from "./plataforms/Youtube";
import AdvancedLive from "./transmission/AdvancedLive";
import Live from "./transmission/Live";


function startLive(plataform : IPlataform){
    console.log("Aguarde...");
    const live = new Live(plataform);
    live.broadcasting();
    live.result();
}
function startAdvancedLive(plataform : IPlataform){
    console.log("Aguarde...");
    const live = new AdvancedLive(plataform);
    live.broadcasting();
    live.result();
    live.comments();
    live.subtitles();
}
startAdvancedLive(new Youtube());
startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());