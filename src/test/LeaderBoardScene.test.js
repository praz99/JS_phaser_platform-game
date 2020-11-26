import Scene from '../Scenes/LeaderBoardScene';

jest.mock('../Scenes/LeaderBoardScene');

beforeEach(() => {
  Scene.mockClear();
});

test('LeaderBoard scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});