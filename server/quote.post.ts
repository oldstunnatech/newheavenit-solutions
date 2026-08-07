import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'NewHeaven IT Solutions <noreply@newheavenitsolutions.com>',
      to: ['newheavenitsolutions@outlook.com'],
      subject: `New Quote Request: ${body.name} — ${body.service}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Package:</strong> ${body.package}</p>
        <p><strong>Price (USD):</strong> ${body.priceUsd}</p>
        <p><strong>Price (NGN):</strong> ${body.priceNgn}</p>
        <p><strong>Timeline:</strong> ${body.timeline}</p>
      `,
    })
  } catch (err) {
    console.error('Quote email failed:', err)
  }

  return { success: true }
})
