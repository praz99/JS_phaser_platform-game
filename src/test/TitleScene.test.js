import Scene from '../Scenes/TitleScene';

jest.mock('../Scenes/TitleScene');

beforeEach(() => {
  Scene.mockClear();
});

test('Title scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});