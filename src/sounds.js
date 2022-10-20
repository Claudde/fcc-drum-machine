// import media from './audio';
import heater1 from './audio/Heater-1.mp3';
import heater2 from './audio/Heater-2.mp3';
import heater3 from './audio/Heater-3.mp3';
import heater4 from './audio/Heater-4.mp3';
import clap from './audio/Heater-6.mp3';
import kickNhat from './audio/Kick_n_Hat.mp3';
import kick from './audio/RP4_KICK_1.mp3';
import openHh from './audio/Dsc_Oh.mp3';
import closedHh from './audio/Cev_H2.mp3';
import sk1 from './audio/SynthDrums_SK1valve11.wav';
import sk2 from './audio/SynthDrums_SK1valve12.wav';
import sk3 from './audio/SynthDrums_SK1valve13.wav';
import sk4 from './audio/SynthDrums_SK1valve14.wav';
import sk5 from './audio/SynthDrums_SK1valve15.wav';
import sk6 from './audio/SynthDrums_SK1valve21.wav';
import sk7 from './audio/SynthDrums_SK1valve22.wav';
import sk8 from './audio/SynthDrums_SK1valve23.wav';
import sk9 from './audio/SynthDrums_SK1valve24.wav';
import badjao1 from './audio/Badjao 1.wav';
import badjao2 from './audio/Badjao 2.wav';
import badjao3 from './audio/Badjao 3.wav';
import badjao4 from './audio/Badjao 4.wav';
import badjao5 from './audio/Badjao 5.wav';
import badjao6 from './audio/Badjao 6.wav';
import badjao7 from './audio/Badjao 7.wav';
import badjao8 from './audio/Badjao 8.wav';
import badjao9 from './audio/Badjao 9.wav';
import chordE from './audio/K/Chord E.wav';
import chordG from './audio/K/Chord G.wav';
import closedHh2 from './audio/K/closed hihat.wav';
import kick2 from './audio/K/Kick (21).wav';
import kickNhat2 from './audio/K/kick-n-hhat.wav';
import kickNsnare from './audio/K/kick-n-snare.wav';
import snare from './audio/K/Snare (4).wav';
import snareNhat from './audio/K/Snare n hihat.wav';
import snare2 from './audio/K/Snare-open.wav';



const audio = {
    freeCodeCampKit : {
        heater1 : {
          url: heater1,
          name: 'Heater 1',
          id: 'heater1',
          key: 'Q'
        },
        heater2 : {
          url: heater2,
          name: 'Heater 2',
          id: 'heater2',
          key: 'W'
        },
        heater3 : {
          url: heater3,
          name: 'Heater 3',
          id: 'heater3',
          key: 'E'
        },
        heater4 : {
          url: heater4,
          name: 'Heater 4',
          id: 'heater4',
          key: 'A'
        },
        clap : {
          url: clap,
          name: 'Clap',
          id: 'clap',
          key: 'S'
        },
        openHh : {
          url: openHh,
          name: 'open hi-hat',
          id: 'openHh',
          key: 'D'
        },
        kickNhat : {
          url: kickNhat,
          name: 'Kick and Hat',
          id: 'kickNhat',
          key: 'Z'
        },
        kick : {
          url: kick,
          name: 'Kick',
          id: 'kick',
          key: 'X'
        },
        closedHh : {
          url: closedHh,
          name: 'closed hi-hat',
          id: 'closedHh',
          key: 'C'
        },
    },
    casioSynth: {
        sk1 : {
            url: sk1,
            name: 'Casio SK - Valve 11',
            id: 'sk1',
            key: 'Q'
        },
        sk2 : {
            url: sk2,
            name: 'Casio SK - Valve 12',
            id: 'sk2',
            key: 'W'
        },
        sk3 : {
            url: sk3,
            name: 'Casio SK - Valve 13',
            id: 'sk3',
            key: 'E'
        },
        sk4 : {
            url: sk4,
            name: 'Casio SK - Valve 14',
            id: 'sk4',
            key: 'A'
        },
        sk5 : {
            url: sk5,
            name: 'Casio SK - Valve 15',
            id: 'sk5',
            key: 'S'
        },
        sk6 : {
            url: sk6,
            name: 'Casio SK - Valve 21',
            id: 'sk6',
            key: 'D'
        },
        sk7 : {
            url: sk7,
            name: 'Casio SK - Valve 22',
            id: 'sk7',
            key: 'Z'
        },
        sk8 : {
            url: sk8,
            name: 'Casio SK - Valve 23',
            id: 'sk8',
            key: 'X'
        },
        sk9 : {
            url: sk9,
            name: 'Casio SK - Valve 24',
            id: 'sk9',
            key: 'C'
        }
    },
    badjao: {
      bd1 : {
          url: badjao1,
          name: 'Badjao Can Percusion 1',
          id: 'bd1',
          key: 'Q'
      },
      bd2 : {
        url: badjao2,
        name: 'Badjao Can Percusion 2',
        id: 'bd2',
        key: 'W'
      },
      bd3 : {
        url: badjao3,
        name: 'Badjao Can Percusion 3',
        id: 'bd3',
        key: 'E'
      },
      bd4 : {
        url: badjao4,
        name: 'Badjao Can Percusion 3',
        id: 'bd3',
        key: 'A'
      },
      bd5 : {
        url: badjao5,
        name: 'Badjao Can Percusion 5',
        id: 'bd5',
        key: 'S'
      },
      bd6 : {
        url: badjao6,
        name: 'Badjao Can Percusion 6',
        id: 'bd6',
        key: 'D'
      },
      bd7 : {
        url: badjao7,
        name: 'Badjao Can Percusion 7',
        id: 'bd7',
        key: 'Z'
      },
      bd8 : {
        url: badjao8,
        name: 'Badjao Can Percusion 8',
        id: 'bd8',
        key: 'X'
      },
      bd9 : {
        url: badjao9,
        name: 'Badjao Can Percusion 9',
        id: 'bd9',
        key: 'C'
      },
  },
  drDreEminem: {
    chordE : {
        url: chordE,
        name: 'Chord E',
        id: 'drChordE',
        key: 'Q'
    },
    chordG : {
        url: chordG,
        name: 'Chord G',
        id: 'drChordG',
        key: 'W'
    },
    closedHh : {
        url: closedHh2,
        name: 'Closed Hi-hat',
        id: 'drclosedHh',
        key: 'E'
    },
    kick : {
        url: kick2,
        name: 'Kick',
        id: 'drKick',
        key: 'A'
    },
    kickNhat : {
      url: kickNhat2,
      name: 'Kick N Hat',
      id: 'drKickNHat',
      key: 'S'
    },
    kickNsnare : {
      url: kickNsnare,
      name: 'Kick N Snare',
      id: 'drKickNSnare',
      key: 'D'
    },
    snare : {
      url: snare,
      name: 'Snare',
      id: 'drSnare',
      key: 'Z'
    },
    snareNHat : {
      url: snareNhat,
      name: 'Snare n Hi-hat',
      id: 'drSnareNHat',
      key: 'X'
    },
    snare2 : {
      url: snare2,
      name: 'Snare 2',
      id: 'drSnare2',
      key: 'C'
    }
  }
}


export default audio;