import nodemailer from 'nodemailer'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid form data' })
  }

  const { name, email, message } = parsed.data
  const config = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.gmailUser,
      pass: config.gmailAppPassword,
    },
  })

  await transporter.sendMail({
    from: `"${name}" <${config.gmailUser}>`,
    replyTo: email,
    to: config.contactToEmail || config.gmailUser,
    subject: `New message from ${name} — zarva-life.com`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })

  return { success: true }
})
