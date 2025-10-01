import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Bruce Truong - Site Reliability Engineer'
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
          background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
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
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Bruce Truong
          </div>
          <div
            style={{
              fontSize: 42,
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 40,
              textAlign: 'center',
            }}
          >
            Site Reliability Engineer
          </div>
          <div
            style={{
              fontSize: 32,
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              maxWidth: 900,
            }}
          >
            Building scalable systems and reliable infrastructure
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
