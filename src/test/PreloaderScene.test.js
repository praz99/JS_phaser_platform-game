import Scene from '../Scenes/PreloaderScene';

jest.mock('../Scenes/PreloaderScene');

beforeEach(() => {
  Scene.mockClear();
});

test('Preload scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});