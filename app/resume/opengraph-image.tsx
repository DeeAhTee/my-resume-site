import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Resume - Bruce Truong | Site Reliability Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #6366f1 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 30,
              textAlign: 'center',
            }}
          >
            Resume
          </div>
          <div
            style={{
              fontSize: 48,
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: 30,
              textAlign: 'center',
            }}
          >
            Bruce Truong
          </div>
          <div
            style={{
              fontSize: 36,
              color: 'rgba(255, 255, 255, 0.85)',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Site Reliability Engineer • Infrastructure Specialist
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
