import { NextResponse } from 'next/server';

export async function GET() {
  // Fetch the photo from the public directory and convert to base64
  const imageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://brucetruong.com'}/images/profile-vcard.jpg`;
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const photoBase64 = Buffer.from(buffer).toString('base64');

  // vCard 4.0 format
  const vcard = `BEGIN:VCARD
VERSION:4.0
FN:Bruce T
N:T;Bruce;;;
EMAIL:deeahtee@live.com
TEL;TYPE=cell:+15039149879
ADR:;;Beaverton;OR;;;USA
X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/deeahtee
TITLE:Software Engineer
BDAY:--1010
PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}
END:VCARD`;

  return new NextResponse(vcard, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Bruce-T-Personal.vcf"',
      'X-Robots-Tag': 'noindex',
    },
  });
}
