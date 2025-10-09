import { NextResponse } from 'next/server';

export async function GET() {
  // Fetch the photo from the public directory and convert to base64
  const imageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://brucetruong.com'}/images/profile-vcard.jpg`;
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const photoBase64 = Buffer.from(buffer).toString('base64');

  // Fold base64 data at 75 characters for vCard 3.0 compatibility
  const foldedPhoto = photoBase64.match(/.{1,75}/g)?.join('\r\n ') || photoBase64;

  // vCard 3.0 format for maximum iOS/Android compatibility
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Truong;Bruce;;;',
    'FN:Bruce Truong',
    'TEL;TYPE=CELL:+15039149879',
    'EMAIL;TYPE=INTERNET:contact@brucetruong.com',
    'ADR;TYPE=HOME:;;Beaverton;OR;;;USA',
    'URL:https://www.brucetruong.com',
    'TITLE:Software Engineer',
    'BDAY:1990-10-10',
    `PHOTO;ENCODING=b;TYPE=JPEG:${foldedPhoto}`,
    'END:VCARD'
  ].join('\r\n');

  return new NextResponse(vcard, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Bruce-Truong-Business.vcf"',
      'X-Robots-Tag': 'noindex',
    },
  });
}
