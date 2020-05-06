import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { Field, Form, Formik } from "formik"
import { Email } from "./api/contact"
import fetch from "node-fetch"

const validate = (value: string) => {
  if (!value) {
    return "Required fields cannot be left blank."
  }
}

const wait = (time: number) => {
  console.log("waiting...")
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("done waiting")
      resolve()
    }, time)
  )
}

export default () => {
  // const [mailError, setMailError] = useState<Error | undefined>(undefined)
  return (
    <Layout isFor="contact">
      <Formik
        initialValues={
          {
            first_name: "",
            last_name: "",
            user_email: "",
            subject: "",
            message: "",
          } as Email
        }
        onSubmit={async (values, { setSubmitting }) => {
          console.log("values are", values)
          fetch(`${process.env.EMAIL_API}/contact`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })

          setSubmitting(false)
        }}
      >
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form className="flex flex-col w-11/12 sm:w-7/12 md:w-6/12 mx-auto">
              <div className="flex sm:flex-row flex-col">
                <div className="flex flex-col mb-8 flex-1 sm:pr-3">
                  <label
                    className="text-xl font-light mb-1"
                    htmlFor="first_name"
                  >
                    First Name
                    <div className="inline ml-2 text-xl text-red-500">*</div>
                  </label>
                  <Field
                    validate={validate}
                    id="first_name"
                    className={`border border-solid ${
                      errors.first_name && touched.first_name
                        ? "border-red-500 bg-red-100"
                        : "border-gray-400 bg-gray-100"
                    } rounded-sm leading-none text-sm p-3`}
                    name="first_name"
                  />
                </div>
                <div className="flex flex-col mb-8 flex-1 sm:pl-3">
                  <label
                    className="text-xl font-light mb-1"
                    htmlFor="last_name"
                  >
                    Last Name
                    <div className="inline ml-2 text-xl text-red-500">*</div>
                  </label>
                  <Field
                    validate={validate}
                    id="last_name"
                    className={`border border-solid ${
                      errors.last_name && touched.last_name
                        ? "border-red-500 bg-red-100"
                        : "border-gray-400 bg-gray-100"
                    } rounded-sm leading-none text-sm p-3`}
                    name="last_name"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-8">
                <label className="text-xl font-light mb-1" htmlFor="user_email">
                  Email Address
                  <div className="inline ml-2 text-xl text-red-500">*</div>
                </label>
                <Field
                  validate={validate}
                  id="user_email"
                  className={`border border-solid ${
                    errors.user_email && touched.user_email
                      ? "border-red-500 bg-red-100"
                      : "border-gray-400 bg-gray-100"
                  } rounded-sm leading-none text-sm p-3`}
                  name="user_email"
                />
              </div>
              <div className="flex flex-col mb-8">
                <label className="text-xl font-light mb-1" htmlFor="subject">
                  Subject
                  <div className="inline ml-2 text-xl text-red-500">*</div>
                </label>
                <Field
                  validate={validate}
                  id="subject"
                  className={`border border-solid ${
                    errors.subject && touched.subject
                      ? "border-red-500 bg-red-100"
                      : "border-gray-400 bg-gray-100"
                  } rounded-sm leading-none text-sm p-3`}
                  name="subject"
                />
              </div>
              <div className="flex flex-col mb-8">
                <label className="text-xl font-light mb-1" htmlFor="message">
                  Message
                  <div className="inline ml-2 text-xl text-red-500">*</div>
                </label>
                <Field
                  validate={validate}
                  component="textarea"
                  id="message"
                  className={`border border-solid ${
                    errors.message && touched.message
                      ? "border-red-500 bg-red-100"
                      : "border-gray-400 bg-gray-100"
                  } h-24 rounded-sm leading-none text-sm p-3`}
                  name="message"
                />
              </div>
              <div className="flex sm:justify-start justify-center">
                <button
                  className="border-2 border-solid border-gray-900 text-gray-800 py-3 px-6 tracking-widest leading-none cursor-pointer hover:bg-gray-900 hover:text-white mb-2"
                  style={{
                    transition:
                      "color 170ms ease-in-out, background-color 170ms ease-in-out",
                  }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </Layout>
  )
}
