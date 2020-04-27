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
  host: "smtp.ethereal.email", // not this one
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export default async (req: Request, res: ServerResponse) => {
  if (req.method === "POST") {
    console.log("req.body is", req.body)
    const { from, text, subject } = req.body
    console.log("from is", from)
    console.log("text is", text)
    console.log("subject is", subject)
    console.log("req.body.from is", req.body.from)
    console.log("req.body.text is", req.body.text)
    console.log("req.body.subject is", req.body.subject)
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

    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    return res.end(
      JSON.stringify({
        message: "Congrats, you made a POST request",
        reqBody: req.body,
      })
    )
  }
  res.statusCode = 400
  res.end(
    JSON.stringify({
      message: `Cannot ${req.method} on /api/contact`,
    })
  )
}
