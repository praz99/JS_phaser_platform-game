import Model from '../Model';

test('background music is not playing at starting', () => {
  const musicModelObj = new Model();
  expect(musicModelObj.bgMusicPlaying).toEqual(false);
});

test('turn on the background music', () => {
  const musicModelObj = new Model();
  expect(musicModelObj.bgMusicPlaying).toEqual(false);
});