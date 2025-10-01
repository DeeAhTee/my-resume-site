import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Contact Bruce Truong - Let\'s Connect'
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
          background: 'linear-gradient(135deg, #059669 0%, #0891b2 100%)',
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
            Let&apos;s Connect
          </div>
          <div
            style={{
              fontSize: 38,
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Get in touch for collaboration opportunities and project inquiries
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
