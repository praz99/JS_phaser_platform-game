export default class Model {
  constructor() {
    this.soundPlaying = true;
    this.musicPlaying = true;
    this.bgMusicPlaying = false;
  }

  set musicOn(value) {
    this.musicPlaying = value;
  }

  get musicOn() {
    return this.musicPlaying;
  }

  set soundOn(value) {
    this.soundPlaying = value;
  }

  get soundOn() {
    return this.soundPlaying;
  }

  set bgMusicPlaying(value) {
    this.bgMusicPlaying1 = value;
  }

  get bgMusicPlaying() {
    return this.bgMusicPlaying1;
  }
}
