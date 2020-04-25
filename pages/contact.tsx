import Layout from "../components/Layout"
import { Field, Form, Formik } from "formik"

const validate = (value: string) => {
  if (!value) {
    return "Required fields cannot be left blank."
  }
}

export default () => (
  <Layout isFor="contact">
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        emailAddress: "",
        subjectLine: "",
        text: "",
      }}
      onSubmit={() => console.log("Bang! Yur dead.")}
    >
      {({ errors, touched }) => {
        return (
          <Form className="flex flex-col w-11/12 sm:w-7/12 md:w-6/12 mx-auto">
            <div className="flex sm:flex-row flex-col">
              <div className="flex flex-col mb-8 flex-1 sm:pr-3">
                <label className="text-xl font-light mb-1" htmlFor="firstName">
                  First Name
                  <div className="inline ml-2 text-xl text-red-500">*</div>
                </label>
                <Field
                  validate={validate}
                  id="firstName"
                  className={`border border-solid ${
                    errors.firstName && touched.firstName
                      ? "border-red-500 bg-red-100"
                      : "border-gray-400 bg-gray-100"
                  } rounded-sm leading-none text-sm p-3`}
                  name="firstName"
                />
              </div>
              <div className="flex flex-col mb-8 flex-1 sm:pl-3">
                <label className="text-xl font-light mb-1" htmlFor="lastName">
                  Last Name
                  <div className="inline ml-2 text-xl text-red-500">*</div>
                </label>
                <Field
                  validate={validate}
                  id="lastName"
                  className={`border border-solid ${
                    errors.lastName && touched.lastName
                      ? "border-red-500 bg-red-100"
                      : "border-gray-400 bg-gray-100"
                  } rounded-sm leading-none text-sm p-3`}
                  name="lastName"
                />
              </div>
            </div>
            <div className="flex flex-col mb-8">
              <label className="text-xl font-light mb-1" htmlFor="emailAddress">
                Email Address
                <div className="inline ml-2 text-xl text-red-500">*</div>
              </label>
              <Field
                validate={validate}
                id="emailAddress"
                className={`border border-solid ${
                  errors.emailAddress && touched.emailAddress
                    ? "border-red-500 bg-red-100"
                    : "border-gray-400 bg-gray-100"
                } rounded-sm leading-none text-sm p-3`}
                name="emailAddress"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label className="text-xl font-light mb-1" htmlFor="subjectLine">
                Subject<div className="inline ml-2 text-xl text-red-500">*</div>
              </label>
              <Field
                validate={validate}
                id="subjectLine"
                className={`border border-solid ${
                  errors.subjectLine && touched.subjectLine
                    ? "border-red-500 bg-red-100"
                    : "border-gray-400 bg-gray-100"
                } rounded-sm leading-none text-sm p-3`}
                name="subjectLine"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label className="text-xl font-light mb-1" htmlFor="text">
                Message<div className="inline ml-2 text-xl text-red-500">*</div>
              </label>
              <Field
                validate={validate}
                component="textarea"
                id="text"
                className={`border border-solid ${
                  errors.text && touched.text
                    ? "border-red-500 bg-red-100"
                    : "border-gray-400 bg-gray-100"
                } h-24 rounded-sm leading-none text-sm p-3`}
                name="text"
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
              >
                SEND
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  </Layout>
)
