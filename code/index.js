const pianoKeys = document.querySelectorAll(".key");
var keyName;
const keyboardKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm', '1', '2', '3', '4', '5'];

pianoKeys.forEach(key => {
    key.addEventListener("click", () => {
        playAudio(key);
    });
})

document.addEventListener("keydown", playAudio)

function playAudio(key){
    if(key instanceof Element){
        keyName = key.dataset.note;
        const keyAudio = document.getElementById(keyName);
        keyAudio.play();
    }
    else{
        //console.log(key.key);
        if(keyboardKeys.includes(key.key)){
            switch(key.key){
                case 'z': keyName = 'C';
                break;
                case 'x': keyName = 'D';
                break;
                case 'c': keyName = 'E';
                break;
                case 'v': keyName = 'F';
                break;
                case 'b': keyName = 'G';
                break;
                case 'n': keyName = 'A';
                break;
                case 'm': keyName = 'B';
                break;
                case '1': keyName = 'Db';
                break;
                case '2': keyName = 'Eb';
                break;
                case '3': keyName = 'Gb';
                break;
                case '4': keyName = 'Ab';
                break;
                case '5': keyName = 'Bb';
                break;
            }
            const keyAudio = document.getElementById(keyName);
            keyAudio.play();
        }
    }
}