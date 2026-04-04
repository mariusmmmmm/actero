export const TEST_MODE =
  (process.env.NEXT_PUBLIC_TEST_MODE ?? process.env.TEST_MODE ?? 'off').toLowerCase() === 'on'
