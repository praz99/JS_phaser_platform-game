import Scene from '../Scenes/GameOverScene';

jest.mock('../Scenes/GameOverScene');

beforeEach(() => {
  Scene.mockClear();
});

test('GameOver scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});