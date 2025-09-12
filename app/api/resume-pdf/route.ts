import { NextResponse } from 'next/server'
import { renderToBuffer } from '@react-pdf/renderer'
import { createElement } from 'react'

// Import the component as a module instead of JSX
const ResumePDF = require('../../components/ResumePDF').default

export async function GET() {
  try {
    // Use createElement instead of JSX syntax
    const pdfElement = createElement(ResumePDF)
    const buffer = await renderToBuffer(pdfElement)
    
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Bruce_Truong_Resume.pdf"'
      }
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
  }
}