import * as configOptions from '../Config/config';

it('returns screen width', () => {
  expect(configOptions.gameConfig.width).toBe(1430);
})

it('returns screen height', () => {
  expect(configOptions.gameConfig.height).toBe(680);
})

it('returns platform speed', () => {
  expect(configOptions.gameOptions.platformSpeedRange).toStrictEqual([300, 300]);
  expect(configOptions.gameOptions.platformSpeedRange[0]).not.toBeLessThan(300);
});

it('returns mountain speed', () => {
  expect(configOptions.gameOptions.mountainSpeed).toStrictEqual(80);
  expect(configOptions.gameOptions.mountainSpeed).not.toBeLessThan(80);
});

it('gives player gravity', () => {
  expect(configOptions.gameOptions.playerGravity).toEqual(900);
  expect(configOptions.gameOptions.playerGravity).not.toBeLessThan(900);
});

it('gives player jumpforce', () => {
  expect(configOptions.gameOptions.jumpForce).toEqual(400);
  expect(configOptions.gameOptions.jumpForce).not.toBeLessThan(400);
});

it('limits player jump to 2 times', () => {
  expect(configOptions.gameOptions.jumps).toEqual(2);
  expect(configOptions.gameOptions.jumps).not.toBeLessThan(2);
});