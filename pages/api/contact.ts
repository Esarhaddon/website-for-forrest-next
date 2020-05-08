import nodemailer from "nodemailer"
import { ServerResponse, IncomingMessage } from "http"

export interface UserEmail {
  first_name: string
  last_name: string
  subject: string
  text: string
  from: string
}

interface NextMessage {
  cookies: any
  body: any
  query: any
}

type Request = IncomingMessage & NextMessage

const transporter = nodemailer.createTransport({
  service: "SendinBlue",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export default async (req: Request, res: ServerResponse) => {
  console.log("I was pinged...")
  if (req.method === "POST") {
    const email: Partial<UserEmail> = req.body
    const { first_name, last_name, text, subject, from } = email
    if (!from || !text || !subject || !first_name || !last_name) {
      res.statusCode = 400
      res.setHeader("Content-Type", "application/json")
      return res.end(
        JSON.stringify({
          message:
            "req.body must be a json object with user_email, first_name, last_name, subject, and message.",
        })
      )
    }

    try {
      const result = await transporter.sendMail({
        subject,
        from,
        text: `${text}\n\n-- ${first_name} ${last_name}\n${from}`,
        to: process.env.MAIL_TO,
      })

      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      return res.end(
        JSON.stringify({
          message: "Congrats, you made a POST request",
          reqBody: req.body,
          result,
        })
      )
    } catch (e) {
      res.statusCode = 500
      res.setHeader("Content-Type", "application/json")
      return res.end(
        JSON.stringify({
          message: e,
        })
      )
    }
  }

  res.statusCode = 400
  res.end(
    JSON.stringify({
      message: `Cannot ${req.method} on /api/contact`,
    })
  )
}
