// call =  Audio Api
const audioContext = new AudioContext();

//var ctxAudio = new (window.AudioContext || window.webkitAudioContext)();
let bpmModule = document.getElementById("bpmModule");
let displayNbrBpm = document.getElementById("displayBpm");
let userBpm = document.querySelector(".userBpm");
let playtBtn = document.getElementById("playButton");
//declare Samples
let kickSample = new Audio("Samples/kick909.mp3");
let snareSample = new Audio("Samples/snare909.mp3");
let openhihatSample = new Audio("Samples/ohihat909.mp3");
let closehihatSample = new Audio("Samples/chithat909.mp3");
//kickSample.play();

//Preview sound
let previewKick = document.querySelector(".grille-kick");
let previewSnare = document.querySelector(".grille-snare");
let previewOHH = document.querySelector(".grille-OpenHihat");
let previewCHH = document.querySelector(".grille-CloseHihat");

// Valors for the Bpm Generator
let currentBeat = 1;
let currentBpm = 128; // <= start Range Value her
let intervalId = 0;
//let bpmValue = userBpm.value

//import {}
//let displayBeat = currentBeat % 4; //rong

//find sounds function

const instruments = {
  kick: {
    selector: "grille-kick",
    sample: kickSample,
  },
  snare: {
    selector: "grille-snare",
    sample: snareSample,
  },
  openhihat: {
    selector: "grille-OpenHihat",
    sample: openhihatSample,
  },
  closehihat: {
    selector: "grille-CloseHihat",
    sample: closehihatSample,
  },
};

function findInstrument(row) {
  return Object.values(instruments).find((instrument) =>
    row.classList.contains(instrument.selector)
  );
}

function parseSequencerSteps() {
  document.querySelectorAll(".step").forEach((step) => {
    if (step.classList.contains("selected")) {
      const { sample } = findInstrument(step.parentElement);
      if (sample) {
        // sample.currenTime = 0; // ??
        sample.play();
      }
    }
  });
}

// Display blink beat
let beatCells = document.querySelectorAll("thead .grille-top");

//console.log(currentBeat);

function displayBeats() {
  beatCells.forEach((cell, i) => {
    i + 1 === currentBeat
      ? cell.classList.add("blinkBeat")
      : cell.classList.remove("blinkBeat");
  });
}

console.log(beatOne.classList);
//Click/bpm Generator-------------------------------

function launchBpmClock() {
  intervalId = setInterval(() => {
    parseSequencerSteps();
    displayBeats();
    console.log(currentBeat);
    currentBeat++;
    if (currentBeat === 17) {
      currentBeat = 1;
    }
  }, 15000 / currentBpm);
}
//reset bpm-----------------------------------
function stopBpmClock() {
  clearInterval(intervalId);
}

window.onbeforeunload = stopBpmClock;

//Display the Bpm-----------------------------------
function addBpm() {
  displayBpm.textContent = `${currentBpm}`;
}
addBpm();

//turn BpmClock to 1-------------------------------
function resetBpmClock() {
  currentBeat = 1;
}
// OnPlay Button------------------------------
function resetPlayBtn() {
  // playtBtn.textContent = "Play";
  playtBtn.className = "playButton";
  playtBtn.firstChild.className = "fas fa-stop";
}
//OffPlay Button------------------------------
function resetPauseBtn() {
  // playtBtn.textContent = "Pause";
  playtBtn.className = "stopButton";
  playtBtn.firstChild.className = "fas fa-play";
}
/*
function resetPlayBtn() {
  // playtBtn.textContent = "Play";
  playtBtn.firstChild.className = "playButton";
  playtBtn.firstChild.className = "fas fa-stop";
  $('playtBtn td:first').removeClass("fas fa-play");
}
//OffPlay Button------------------------------
function resetPauseBtn() {
  // playtBtn.textContent = "Pause";
  playtBtn.firstChild.className = "playButton";
  playtBtn.firstChild.className = "fas fa-play";
  $('playtBtn td:first').removeClass("fas fa-stop");
}
*/

//Play.pause Commende Button------------------------------
playtBtn.addEventListener("click", () => {
  if (playtBtn.className === "playButton") {
    resetPauseBtn();
    resetBpmClock();
    stopBpmClock();
    //addBpm();
  } else {
    resetPlayBtn();
    launchBpmClock();
    resetBpmClock();
    //addBpm();
  }
});
//catch value from the inputBpm user
function updateBPM() {
  currentBpm = Number(userBpm.value);
  displayNbrBpm.textContent = currentBpm;
}
userBpm.oninput = updateBPM;

//add selecte class top each pad
document.querySelectorAll(".step").forEach((step) => {
  step.onclick = () => step.classList.toggle("selected");
});

previewKick.onclick = () => previewKick.classList.toggle("Kpreview");
previewSnare.onclick = () => previewSnare.classList.toggle("Spreview");
previewOHH.onclick = () => previewOHH.classList.toggle("Opreview");
previewCHH.onclick = () => previewCHH.classList.toggle("Cpreview");

// ------------------Sounds from Api--------------------

//console.log(audioContext.sampleRate);

//teste WhiteNoise mono
const buffer = audioContext.createBuffer(
  1, //numbers of channel ( 1 = mono/ 2 stereo etc)
  audioContext.sampleRate * 1, //Longer 1 sec
  audioContext.sampleRate //frq d'echantion de l'audioContext
);

const channelData = buffer.getChannelData(0);
for (let i = 0; i < buffer.length; i++) {
  channelData[i] = Math.random() * 2 - 1;
}

const primaryGainControl = audioContext.createGain();
primaryGainControl.gain.setValueAtTime(0.05, 0);
primaryGainControl.connect(audioContext.destination);

const button = document.createElement("button");
button.innerHTML = "White Noise";

//whiteNoise Generator
button.addEventListener("click", () => {
  const whiteNoiseSource = audioContext.createBufferSource();
  whiteNoiseSource.buffer = buffer;
  whiteNoiseSource.connect(primaryGainControl);
  // primaryGainControl.connect(audioContext.destination);
  whiteNoiseSource.start();
});
// document.body.appendChild(button);

//Kick Sound
const kickButton = document.createElement("button");
kickButton.innerHTML = "Kick";
kickButton.addEventListener("click", () => {
  const kickOscillator = audioContext.createOscillator();
  //pitching-down process for kick
  kickOscillator.frequency.setValueAtTime(150, 0); //ocs Frequecy
  kickOscillator.frequency.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 1.5
  );
  kickOscillator.connect(primaryGainControl);
  kickOscillator.start();
  kickOscillator.stop((audioContext.currentTime = 0.5));
});
// document.body.appendChild(kickButton);

//fadeOut for Kick
const kickGain = audioContext.createGain();
kickGain.gain.setValueAtTime(1, 0);
kickGain.gain.exponentialRampToValueAtTime(
  0.001,
  audioContext.currentTime + 0.5
);
// kickOscillator.connet(kickGain);
// kickGain.connet(primaryGainControl);

//Snare Sound---------------------------------------------
const snareFilter = audioContext.createBiquadFilter();
snareFilter.type = "highpass";
snareFilter.frequency.value = 1500;
snareFilter.connect(primaryGainControl);
const snareButton = document.createElement("button");
snareButton.innerHTML = "Snare";
snareButton.addEventListener("click", () => {
  const whiteNoiseSource = audioContext.createBufferSource();
  whiteNoiseSource.buffer = buffer;
  whiteNoiseSource.connect(snareFilter);
  // primaryGainControl.connect(audioContext.destination);
  whiteNoiseSource.start();
});
// document.body.appendChild(snareButton);

//Open Hihat Sound

//Close Hihat Sound

/*  
List of Ideas
  
I need (Mandatory): 
    * display PAD                                             ========> maybe a html board & css grid 
    * tik/clock for tempo.                                    ========> look chronometer's lab
    * influence the tempo speed ( link to the clock)          ========> look the cour mealting JS & CSS (week 2/day 2 or3)
        -controled buy a node
        -display the bpm (need to translate the clock in bpm) ========> look chronometer's lab
        -flash light sinc buy the clok (bonus)                ========> look the cour mealting JS & CSS (week 2/day 2 or3)
    *  button 'on/off'on each semiquaver
    * travel bar  (how comeback when the grid is over ?)      ========> look chronometer's lab & js & css cours (gros PLS en prevision)
    * play/stop the clock (spacebar and/or Play button)       ========> look chronometer's lab
    * sound bank (909) link to their own pad.                 ========> sound will be load in html and js call it 
    * display 1bar (4 beats)                                  ========> i will need to play with the Pad with .toggle maybe
    * 
    
--Exemple--
------------------------------------------------------------------------------------------
                                                
                     1beat (One Click)             
    /BPM displer/   __________________          
                  1/2                        travel bar   
               ---------                        |
              1/4     1/4     1/4     1/4       |
             _____   _____   _____   _____      | => 
Kick  =>    |     | |     | |     | |     |     |
             _____   _____   _____   _____      |    
Snare =>    |     | |     | |     | |     |     | =>            etc.... 
             _____   _____   _____   _____      |  
C-Hat =>    |     | |     | |     | |     |     |
             _____   _____   _____   _____      |         
O-Hat =>    |     | |     | |     | |     |     | => 
                                                |
Etc.. =>                                        |
                                                |
------------------------------------------------------------------------------------------
-- I wish (Bonus): --
    * 
    * multi  samples bank by style (hxc, techno, house etc) load by buttons.... (obviously Array&object)
    * controle master volume (look like a fader)
    * possibility to to select 1bar/2bar/4bar (.toggle ????)
    * possibility to inlfuence volume on each drum kit element 
    * 
    
-- Monday's Goals --
    * Make the  clock ////DONE
    * trasnlate sec in bpm ////// DONE
    * select & make the rang bpm
    * Consistence Button 
    * deplay the bpm  ////// Done
    * make a flash button for each bpm clic
    ------during the night-------
    * make audio syntese for each elements of my drums machine
    * Deal with the audio api
    * 
questions of th day :
    * js files organisation
-- tuesday's Goals --
    * make the sequencer 
*/