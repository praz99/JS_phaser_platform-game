import Scene from '../Scenes/OptionsScene';

jest.mock('../Scenes/OptionsScene');

beforeEach(() => {
  Scene.mockClear();
});

test('Options scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});