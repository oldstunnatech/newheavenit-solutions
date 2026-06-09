import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
  const body = await readBody(event)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: body.billing === 'monthly' ? 'subscription' : 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `NewHeaven IT Solutions — ${body.planName} Plan`,
            description: `${body.billing === 'monthly' ? 'Monthly subscription' : 'One-time payment'} for the ${body.planName} plan`,
          },
          unit_amount: Math.round(parseFloat(body.price) * 100),
          ...(body.billing === 'monthly' && { recurring: { interval: 'month' } }),
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/pricing?success=true`,
    cancel_url: `${process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/pricing?canceled=true`,
  })

  return { data: { url: session.url } }
})
