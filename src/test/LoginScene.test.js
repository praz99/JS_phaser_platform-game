import Scene from '../Scenes/LoginScene';

jest.mock('../Scenes/LoginScene');

beforeEach(() => {
  Scene.mockClear();
});

test('Login scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});