import nodemailer from "nodemailer"
import { ServerResponse, IncomingMessage } from "http"

export interface UserEmail {
  from: string
  subject: string
  text: string
}

interface NextMessage {
  cookies: any
  body: any
  query: any
}

type Request = IncomingMessage & NextMessage

const transporter = nodemailer.createTransport({
  service: "Outlook365",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export default async (req: Request, res: ServerResponse) => {
  console.log("process.env.SMTP_HOST is", process.env.SMTP_HOST)
  if (req.method === "POST") {
    const { from, text, subject } = req.body
    if (!from || !text || !subject) {
      res.statusCode = 400
      res.setHeader("Content-Type", "application/json")
      return res.end(
        JSON.stringify({
          message:
            'req.body must be a json object of the form {"from": string, "subject": string, "text": string}. Fields cannot be blank',
        })
      )
    }

    try {
      // apparently "from" can't be an address other than the SMTP user
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        subject,
        // is there a better way to do this?
        text: text + "\n-- " + from,
        to: process.env.MAIL_TO,
      })

      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      return res.end(
        JSON.stringify({
          message: "Congrats, you made a POST request",
          reqBody: req.body,
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
