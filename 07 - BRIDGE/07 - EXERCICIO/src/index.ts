import IConsole from "./consoles/interfaces/IConsole";
import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import AdvancedPlay from "./game/AdvancedPlay";
import Play from "./game/play";

function playGame(videoGame : IConsole){
    console.log("Aguarde...");
    const play = new Play(videoGame);
    play.playing();
    play.result();
}
function playAdvancedGame(videoGame : IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(videoGame);
    play.playing();
    play.challenge();
    play.result();
}

playAdvancedGame(new Xbox);
playAdvancedGame(new PlayStation);
