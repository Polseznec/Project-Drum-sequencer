const sampleCatC = new Audio("Samples/catC.mp3");
const sampleCatCsharp = new Audio("Samples/catCc.mp3");
const sampleCatD = new Audio("Samples/catD.mp3");
const sampleCatDsharp = new Audio("Samples/catDd.mp3");
const sampleCatE = new Audio("Samples/catE.mp3");
const sampleCatF = new Audio("Samples/catF.mp3");
const sampleCatFsharp = new Audio("Samples/catFf.mp3");
const sampleCatG = new Audio("Samples/catG.mp3");
const sampleCatGsharp = new Audio("Samples/catGg.mp3");
const sampleCatA = new Audio("Samples/catA.mp3");
const sampleCatAsharp = new Audio("Samples/catAa.mp3");
const sampleCatB = new Audio("Samples/catB.mp3");
const sampleCatC2 = new Audio("Samples/catC2.mp3");


const toucheC = document.getElementById("toucheC");
const toucheCcharp = document.getElementById("toucheCcharp");
const toucheD = document.getElementById("toucheD");
const toucheDsharp = document.getElementById("toucheDsharp");
const toucheE = document.getElementById("toucheE");
const toucheF = document.getElementById("toucheF");
const toucheFsharp = document.getElementById("toucheFsharp");
const toucheG = document.getElementById("toucheG");
const toucheGsharp = document.getElementById("toucheGsharp");
const toucheA = document.getElementById("toucheA");
const toucheAsharp = document.getElementById("toucheAsharp");
const toucheB = document.getElementById("toucheB");
const toucheC2 = document.getElementById("toucheC2");


toucheC.addEventListener("click", () => {
  sampleCatC.play();
  sampleCatC.currentTime = 0;
});

toucheCcharp.addEventListener("click", () => {
  sampleCatCsharp.play();
  sampleCatCsharp.currentTime = 0;
});

toucheD.addEventListener("click", () => {
  sampleCatD.play();
  sampleCatD.currentTime = 0;
});
toucheDsharp.addEventListener("click", () => {
  sampleCatDsharp.play();
  sampleCatDsharp.currentTime = 0;
});

toucheE.addEventListener("click", () => {
  sampleCatE.play();
  sampleCatE.currentTime = 0;
});

toucheF.addEventListener("click", () => {
  sampleCatF.play();
  sampleCatF.currentTime = 0;
});

toucheFsharp.addEventListener("click", () => {
  sampleCatFsharp.play();
  sampleCatFsharp.currentTime = 0;
});
toucheG.addEventListener("click", () => {
  sampleCatG.play();
  sampleCatG.currentTime = 0;
});
toucheGsharp.addEventListener("click", () => {
  sampleCatGsharp.play();
  sampleCatGsharp.currentTime = 0;
});
toucheA.addEventListener("click", () => {
  sampleCatA.play();
  sampleCatA.currentTime = 0;
});
toucheAsharp.addEventListener("click", () => {
  sampleCatAsharp.play();
  sampleCatAsharp.currentTime = 0;
});
toucheB.addEventListener("click", () => {
  sampleCatB.play();
  sampleCatB.currentTime = 0;
});
toucheC2.addEventListener("click", () => {
  sampleCatC2.play();
  sampleCatC2.currentTime = 0;
  toucheC2.classList.contains(".blancPress")
  
  // pressingBlanc();
  // toucheC2.classList.contains(".blancPress")
  // // setTimeout(toucheC2, 500); 
});

// function pressingBlanc(touche){
//  touche.classList.contains(".blancPress")
//   // setTimeout(touche, 500); 
// }

// document.querySelectorAll(".touche blanche").forEach((press) => {
//   press.onclick = () => press.classList.contains(".blancPress");
// });






































// // call =  Audio Api
// const audioContext = new AudioContext();

// //var ctxAudio = new (window.AudioContext || window.webkitAudioContext)();
// const bpmModule = document.getElementById("bpmModule");
// const displayNbrBpm = document.getElementById("displayBpm");
// const userBpm = document.querySelector(".userBpm");
// const playtBtn = document.getElementById("playButton");
// const steps = document.querySelectorAll(".step");
// //declare Samples
// const kickSample = new Audio("Samples/kick909.mp3");
// const snareSample = new Audio("Samples/snare909.mp3");
// const openhihatSample = new Audio("Samples/ohihat909.mp3");
// const closehihatSample = new Audio("Samples/chithat909.mp3");
// //kickSample.play();

// //Preview sound
// const previewKick = document.querySelector(".grille-kick");
// const previewSnare = document.querySelector(".grille-snare");
// const previewOHH = document.querySelector(".grille-OpenHihat");
// const previewCHH = document.querySelector(".grille-CloseHihat");

// // Valors for the Bpm Generator
// let currentBeat = 1;
// let currentBpm = 128; // <= start Range Value her
// let intervalId = 0;
// //let bpmValue = userBpm.value

// //find sounds function

// const instruments = {
//   kick: {
//     selector: "grille-kick",
//     sample: kickSample,
//   },
//   snare: {
//     selector: "grille-snare",
//     sample: snareSample,
//   },
//   openhihat: {
//     selector: "grille-OpenHihat",
//     sample: openhihatSample,
//   },
//   closehihat: {
//     selector: "grille-CloseHihat",
//     sample: closehihatSample,
//   },
// };

// function findInstrument(row) {
//   return Object.values(instruments).find((instrument) =>
//     row.classList.contains(instrument.selector)
//   );
// }

// function parseSequencerSteps() {
//   for (let i = 0; i < steps.length; i++) {
//     if (steps[i].classList.contains("selected")) {
//       const { sample } = findInstrument(steps[i].parentElement);
//       if (sample) {
//         sample.play();
//       }
//     }
//   }
// }

// // Display blink beat
// let beatCells = document.querySelectorAll("thead .grille-top");

// //console.log(currentBeat);

// function displayBeats() {
//   beatCells.forEach((cell, i) => {
//     i + 1 === currentBeat
//       ? cell.classList.add("blinkBeat")
//       : cell.classList.remove("blinkBeat");
//   });
// }

// //Click/bpm Generator-------------------------------
// let _FRAMEID;
// let tick = 0;

// //the callback will be invoked approximately once a second
// //and will print the time exactly once a second apart.

// function clock(timestamp) {
//   // console.log(15000 / currentBpm);
//   if (tick % 17 === 0) {
//     currentBeat = 1;
//   }
//   if (tick % Math.floor(15000 / currentBpm) === 0) {
//     parseSequencerSteps();
//     displayBeats();
//     currentBeat++;
//   }
//   tick++;
//   _FRAMEID = requestAnimationFrame(clock);
// }

// window.onbeforeunload = () => cancelAnimationFrame(_FRAMEID);

// async function launchBpmClock() {
//   await Tone.start();
//   console.log("audio is ready");
//   Tone.Transport.bpm.value = Number(displayNbrBpm.textContent);

//   Tone.Transport.scheduleRepeat((time) => {
//     // use the callback time to schedule events
//     // console.log(time);
//     //parseSequencerSteps();
//     //displayBeats();
//     kickSample.play()
 
//     currentBeat++;
//     if (currentBeat === 17) {
//       currentBeat = 1;
//     }
//   }, "16n");

//   Tone.Transport.start();
//   /* var clock2 = new Tone.Clock(function (time) {
//     console.log(">>>", time);
//   }, 1);
//   console.log("here");*/

//   // _FRAMEID = requestAnimationFrame(clock);
//   // intervalId = setInterval(() => {
//   //   parseSequencerSteps();
//   //   displayBeats();
//   //   console.log(currentBeat);
//   //   currentBeat++;
//   //   if (currentBeat === 17) {
//   //     currentBeat = 1;
//   //   }
//   // }, 15000 / currentBpm);
// }
// //reset bpm-----------------------------------
// function stopBpmClock() {
//   clearInterval(intervalId);
// }

// window.onbeforeunload = stopBpmClock;

// //Display the Bpm-----------------------------------
// function addBpm() {
//   displayBpm.textContent = `${currentBpm}`;
// }
// addBpm();

// //turn BpmClock to 1-------------------------------
// function resetBpmClock() {
//   currentBeat = 1;
// }
// // OnPlay Button------------------------------
// function resetPlayBtn() {
//   // playtBtn.textContent = "Play";
//   playtBtn.className = "playButton";
//   playtBtn.firstChild.className = "fas fa-stop";
// }
// //OffPlay Button------------------------------
// function resetPauseBtn() {
//   // playtBtn.textContent = "Pause";
//   playtBtn.className = "stopButton";
//   playtBtn.firstChild.className = "fas fa-play";
// }

// //Play.pause Commende Button------------------------------
// playtBtn.addEventListener("click", () => {
//   if (playtBtn.className === "playButton") {
//     resetPauseBtn();
//     resetBpmClock();
//     stopBpmClock();
//     //addBpm();
//   } else {
//     resetPlayBtn();
//     launchBpmClock();
//     resetBpmClock();
//     //addBpm();
//   }
// });
// //catch value from the inputBpm user
// function updateBPM() {
//   currentBpm = Number(userBpm.value);
//   displayNbrBpm.textContent = currentBpm;
// }
// userBpm.oninput = updateBPM;

// //add selecte class top each pad
// document.querySelectorAll(".step").forEach((step) => {
//   step.onclick = () => step.classList.toggle("selected");
// });

// previewKick.onclick = () => previewKick.classList.toggle("Kpreview");
// previewSnare.onclick = () => previewSnare.classList.toggle("Spreview");
// previewOHH.onclick = () => previewOHH.classList.toggle("Opreview");
// previewCHH.onclick = () => previewCHH.classList.toggle("Cpreview");
// /*
// // ------------------Sounds from Api--------------------

// //console.log(audioContext.sampleRate);

// //teste WhiteNoise mono
// const buffer = audioContext.createBuffer(
//   1, //numbers of channel ( 1 = mono/ 2 stereo etc)
//   audioContext.sampleRate * 1, //Longer 1 sec
//   audioContext.sampleRate //frq d'echantion de l'audioContext
// );

// const channelData = buffer.getChannelData(0);

// for (let i = 0; i < buffer.length; i++) {
//   channelData[i] = Math.random() * 2 - 1;
// }

// const primaryGainControl = audioContext.createGain();
// primaryGainControl.gain.setValueAtTime(0.05, 0);
// primaryGainControl.connect(audioContext.destination);

// const button = document.createElement("button");
// button.innerHTML = "White Noise";

// //whiteNoise Generator
// button.addEventListener("click", () => {
//   const whiteNoiseSource = audioContext.createBufferSource();
//   whiteNoiseSource.buffer = buffer;
//   whiteNoiseSource.connect(primaryGainControl);
//   // primaryGainControl.connect(audioContext.destination);
//   whiteNoiseSource.start();
// });
// // document.body.appendChild(button);

// //Kick Sound
// const kickButton = document.createElement("button");
// kickButton.innerHTML = "Kick";
// kickButton.addEventListener("click", () => {
//   const kickOscillator = audioContext.createOscillator();
//   //pitching-down process for kick
//   kickOscillator.frequency.setValueAtTime(150, 0); //ocs Frequecy
//   kickOscillator.frequency.exponentialRampToValueAtTime(
//     0.001,
//     audioContext.currentTime + 1.5
//   );
//   kickOscillator.connect(primaryGainControl);
//   kickOscillator.start();
//   kickOscillator.stop((audioContext.currentTime = 0.5));
// });
// // document.body.appendChild(kickButton);

// //fadeOut for Kick
// const kickGain = audioContext.createGain();
// kickGain.gain.setValueAtTime(1, 0);
// kickGain.gain.exponentialRampToValueAtTime(
//   0.001,
//   audioContext.currentTime + 0.5
// );
// // kickOscillator.connet(kickGain);
// // kickGain.connet(primaryGainControl);

// //Snare Sound---------------------------------------------
// const snareFilter = audioContext.createBiquadFilter();
// snareFilter.type = "highpass";
// snareFilter.frequency.value = 1500;
// snareFilter.connect(primaryGainControl);
// const snareButton = document.createElement("button");
// snareButton.innerHTML = "Snare";
// snareButton.addEventListener("click", () => {
//   const whiteNoiseSource = audioContext.createBufferSource();
//   whiteNoiseSource.buffer = buffer;
//   whiteNoiseSource.connect(snareFilter);
//   // primaryGainControl.connect(audioContext.destination);
//   whiteNoiseSource.start();
// });
// // document.body.appendChild(snareButton);
// */
// //Open Hihat Sound

// //Close Hihat Sound

// /*  

// List of Ideas
  
// I need (Mandatory): 
//     * display PAD                                             ========> maybe a html board & css grid 
//     * tik/clock for tempo.                                    ========> look chronometer's lab
//     * influence the tempo speed ( link to the clock)          ========> look the cour mealting JS & CSS (week 2/day 2 or3)
//         -controled buy a node
//         -display the bpm (need to translate the clock in bpm) ========> look chronometer's lab
//         -flash light sinc buy the clok (bonus)                ========> look the cour mealting JS & CSS (week 2/day 2 or3)
//     *  button 'on/off'on each semiquaver
//     * travel bar  (how comeback when the grid is over ?)      ========> look chronometer's lab & js & css cours (gros PLS en prevision)
//     * play/stop the clock (spacebar and/or Play button)       ========> look chronometer's lab
//     * sound bank (909) link to their own pad.                 ========> sound will be load in html and js call it 
//     * display 1bar (4 beats)                                  ========> i will need to play with the Pad with .toggle maybe
//     * 
    
// --Exemple--

// ------------------------------------------------------------------------------------------
                                                
//                      1beat (One Click)             
//     /BPM displer/   __________________          
//                   1/2                        travel bar   
//                ---------                        |
//               1/4     1/4     1/4     1/4       |
//              _____   _____   _____   _____      | => 
// Kick  =>    |     | |     | |     | |     |     |
//              _____   _____   _____   _____      |    
// Snare =>    |     | |     | |     | |     |     | =>            etc.... 
//              _____   _____   _____   _____      |  
// C-Hat =>    |     | |     | |     | |     |     |
//              _____   _____   _____   _____      |         
// O-Hat =>    |     | |     | |     | |     |     | => 
//                                                 |
// Etc.. =>                                        |
//                                                 |
// ------------------------------------------------------------------------------------------

// -- I wish (Bonus): --
//     * 
//     * multi  samples bank by style (hxc, techno, house etc) load by buttons.... (obviously Array&object)
//     * controle master volume (look like a fader)
//     * possibility to to select 1bar/2bar/4bar (.toggle ????)
//     * possibility to inlfuence volume on each drum kit element 
//     * 
    
// -- Monday's Goals --
//     * Make the  clock ////DONE
//     * trasnlate sec in bpm ////// DONE
//     * select & make the rang bpm
//     * Consistence Button 
//     * deplay the bpm  ////// Done
//     * make a flash button for each bpm clic
//     ------during the night-------
//     * make audio syntese for each elements of my drums machine
//     * Deal with the audio api
//     * 
// questions of th day :
//     * js files organisation
// -- tuesday's Goals --
//     * make the sequencer 

// */
