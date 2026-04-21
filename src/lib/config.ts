const requestedTestMode =
  (process.env.TEST_MODE ?? process.env.NEXT_PUBLIC_TEST_MODE ?? 'off').toLowerCase() === 'on'

export const TEST_MODE =
  process.env.NODE_ENV !== 'production' && requestedTestMode
