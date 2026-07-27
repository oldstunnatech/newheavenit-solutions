import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'noreply@newheavenitsolutions.com',
    to: 'newheavenitsolutions@outlook.com',
    subject: `New Lead: ${body.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
      <p><strong>Service:</strong> ${body.service || 'N/A'}</p>
      <p><strong>Address:</strong> ${body.address || 'N/A'}</p>
      <p><strong>Message:</strong> ${body.message}</p>
    `,
  })

  return { success: true }
})