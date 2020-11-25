import Scene from '../Scenes/BootScene';

jest.mock('../Scenes/BootScene');

beforeEach(() => {
  Scene.mockClear();
});

test('Boot scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});