import Scene from '../Scenes/CreditsScene';

jest.mock('../Scenes/CreditsScene');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Scene.mockClear();
});

test('Credits scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});