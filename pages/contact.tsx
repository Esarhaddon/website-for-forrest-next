import { useState, useEffect } from "react"
import { Field, Form, Formik } from "formik"
import { UserEmail } from "./api/contact"
import fetch from "node-fetch"
import Head from "next/head"

const validate = (value: string) => {
  if (!value) {
    return "Required fields cannot be left blank."
  }
}

export default () => {
  const [mailError, setMailError] = useState<Error | undefined>(undefined)
  const [showSent, setShowSent] = useState(false)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined = undefined
    if (showSent) {
      timeoutId = setTimeout(() => setShowSent(false), 1500)
    }
    return () => clearTimeout(timeoutId)
  }, [showSent])

  return (
    <div>
      <Head>
        <title key="title">Contact</title>
      </Head>
      <Formik
        initialValues={
          {
            first_name: "",
            last_name: "",
            from: "",
            subject: "",
            text: "",
          } as UserEmail
        }
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setMailError(undefined)
          try {
            const res = await fetch(`${process.env.NEXT_API}/contact`, {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json",
              },
            })
            if (!res.ok) {
              throw new Error("Email failed to send")
            }
            resetForm()
            setShowSent(true)
          } catch (e) {
            setMailError(e)
          }
          setSubmitting(false)
        }}
      >
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form className="flex flex-col w-11/12 sm:w-7/12 md:w-6/12 mx-auto">
              <div className="flex flex-row flex-wrap mt-4">
                <div className="flex flex-col w-1/2 mb-8 sm:pr-4 pr-3">
                  <label
                    className="text-xl font-light mb-1"
                    htmlFor="first_name"
                  >
                    First Name
                    <div className="inline ml-1 text-xl text-red-500">*</div>
                  </label>
                  <Field
                    validate={validate}
                    id="first_name"
                    className={`appearance-none border border-solid ${
                      errors.first_name && touched.first_name
                        ? "border-red-500 bg-red-100"
                        : "border-gray-400 bg-gray-100"
                    } rounded-sm leading-none text-sm p-3`}
                    name="first_name"
                  />
                </div>
                <div className="flex flex-col w-1/2 mb-8 sm:pl-4 pl-3">
                  <label
                    className="text-xl font-light mb-1"
                    htmlFor="last_name"
                  >
                    Last Name
                    <div className="inline ml-1 text-xl text-red-500">*</div>
                  </label>
                  <Field
                    validate={validate}
                    id="last_name"
                    className={`appearance-none border border-solid ${
                      errors.last_name && touched.last_name
                        ? "border-red-500 bg-red-100"
                        : "border-gray-400 bg-gray-100"
                    } rounded-sm leading-none text-sm p-3`}
                    name="last_name"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-8">
                <label className="text-xl font-light mb-1" htmlFor="from">
                  Email Address
                  <div className="inline ml-1 text-xl text-red-500">*</div>
                </label>
                <Field
                  validate={validate}
                  id="from"
                  className={`appearance-none border border-solid ${
                    errors.from && touched.from
                      ? "border-red-500 bg-red-100"
                      : "border-gray-400 bg-gray-100"
                  } rounded-sm leading-none text-sm p-3`}
                  name="from"
                />
              </div>
              <div className="flex flex-col mb-8">
                <label className="text-xl font-light mb-1" htmlFor="subject">
                  Subject
                  <div className="inline ml-1 text-xl text-red-500">*</div>
                </label>
                <Field
                  validate={validate}
                  id="subject"
                  className={`appearance-none border border-solid ${
                    errors.subject && touched.subject
                      ? "border-red-500 bg-red-100"
                      : "border-gray-400 bg-gray-100"
                  } rounded-sm leading-none text-sm p-3`}
                  name="subject"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xl font-light mb-1" htmlFor="text">
                  Message
                  <div className="inline ml-1 text-xl text-red-500">*</div>
                </label>
                <Field
                  validate={validate}
                  component="textarea"
                  id="text"
                  className={`appearance-none border border-solid ${
                    errors.text && touched.text
                      ? "border-red-500 bg-red-100"
                      : "border-gray-400 bg-gray-100"
                  } h-24 rounded-sm leading-none text-sm p-3`}
                  name="text"
                />
              </div>
              {mailError ? (
                <div className="mt-8 text-lg text-red-500">
                  Your message failed to send. Please try again later.
                </div>
              ) : null}
              <div className="flex justify-start">
                <button
                  className="border-2 border-solid border-gray-900 text-gray-800 py-3 px-6 tracking-widest leading-none cursor-pointer hover:bg-gray-900 hover:text-white mt-8 mb-6"
                  style={{
                    transition:
                      "color 170ms ease-in-out, background-color 170ms ease-in-out",
                  }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "SENDING..."
                    : mailError
                    ? "TRY AGAIN"
                    : showSent
                    ? "MESSAGE SENT"
                    : "SEND"}
                </button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
