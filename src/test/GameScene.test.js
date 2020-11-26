import Scene from '../Scenes/GameScene';

jest.mock('../Scenes/GameScene');

beforeEach(() => {
  Scene.mockClear();
});

test('Game scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});