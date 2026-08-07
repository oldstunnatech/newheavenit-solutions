export default defineEventHandler(async () => {
  try {
    const apiKey = process.env.EXCHANGE_RATE_API_KEY
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
    )
    const data = await response.json()
    const ngnRate = data.conversion_rates.NGN

    return {
      rate: ngnRate,
      updated: data.time_last_update_utc,
    }
  } catch (err) {
    // Fallback to last known rate if API fails
    return { rate: 1364.40, updated: 'fallback' }
  }
})