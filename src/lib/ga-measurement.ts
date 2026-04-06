type MeasurementPrimitive = string | number | boolean
type MeasurementParams = Record<string, MeasurementPrimitive | null | undefined>

function cleanParams(params: MeasurementParams): Record<string, MeasurementPrimitive> {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== '')
  ) as Record<string, MeasurementPrimitive>
}

export async function sendGaMeasurementEvent({
  clientId,
  eventName,
  params = {},
}: {
  clientId: string
  eventName: string
  params?: MeasurementParams
}) {
  const measurementId = process.env.GA_MEASUREMENT_ID ?? process.env.NEXT_PUBLIC_GA_ID
  const apiSecret = process.env.GA_API_SECRET

  if (!measurementId || !apiSecret) {
    console.warn('GA Measurement Protocol skipped: missing GA_MEASUREMENT_ID/NEXT_PUBLIC_GA_ID or GA_API_SECRET')
    return false
  }

  try {
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(measurementId)}&api_secret=${encodeURIComponent(apiSecret)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          events: [
            {
              name: eventName,
              params: {
                engagement_time_msec: 1,
                ...cleanParams(params),
              },
            },
          ],
        }),
      }
    )

    if (!response.ok) {
      const body = await response.text()
      console.error('GA Measurement Protocol error:', response.status, body)
      return false
    }

    return true
  } catch (error) {
    console.error('GA Measurement Protocol request failed:', error)
    return false
  }
}
