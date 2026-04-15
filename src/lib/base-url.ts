export function getBaseUrl() {
  const envUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim()

  if (envUrl) {
    return envUrl.replace(/\/$/, '')
  }

  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.actero.ro'
}
