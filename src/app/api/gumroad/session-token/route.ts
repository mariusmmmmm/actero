import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  createGumroadSessionToken,
  getGumroadSessionFieldName,
} from '@/lib/gumroad-session-token'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      sessionId?: string
      guideId?: string | null
      offerType?: 'single' | 'family'
    }

    if (!body.sessionId || !body.offerType) {
      return NextResponse.json({ error: 'sessionId and offerType are required' }, { status: 400 })
    }

    const token = createGumroadSessionToken({
      sessionId: body.sessionId,
      guideId: body.guideId ?? null,
      offerType: body.offerType,
    })

    return NextResponse.json({
      token,
      fieldName: getGumroadSessionFieldName(),
    })
  } catch (error) {
    console.error('Gumroad session token error:', error)
    return NextResponse.json({ error: 'Failed to create session token' }, { status: 500 })
  }
}
