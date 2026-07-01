export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('New contact form submission:', body)
  return { success: true }
})
