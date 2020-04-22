import Layout from "../components/Layout"
import { Field, Form, Formik } from "formik"

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
      <Form className="flex flex-col w-11/12 sm:w-7/12 mx-auto">
        <div className="flex flex-wrap">
          <div className="flex flex-col mb-8 flex-1 pr-3">
            <label className="text-xl font-light mb-1" htmlFor="firstName">
              First Name
            </label>
            <Field
              id="firstName"
              className="border border-solid border-gray-400 bg-gray-100 rounded-sm leading-none text-sm p-3"
              name="firstName"
            />
          </div>
          <div className="flex flex-col mb-8 flex-1 pl-3">
            <label className="text-xl font-light mb-1" htmlFor="lastName">
              Last Name
            </label>
            <Field
              id="lastName"
              className="border border-solid border-gray-400 bg-gray-100 rounded-sm leading-none text-sm p-3"
              name="lastName"
            />
          </div>
        </div>
        <div className="flex flex-col mb-8">
          <label className="text-xl font-light mb-1" htmlFor="emailAddress">
            Email Address
          </label>
          <Field
            id="emailAddress"
            className="border border-solid border-gray-400 bg-gray-100 rounded-sm leading-none text-sm p-3"
            name="emailAddress"
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="text-xl font-light mb-1" htmlFor="subjectLine">
            Subject{" "}
          </label>
          <Field
            id="subjectLine"
            className="border border-solid border-gray-400 bg-gray-100 rounded-sm leading-none text-sm p-3"
            name="subjectLine"
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="text-xl font-light mb-1" htmlFor="text">
            Message
          </label>
          <Field
            component="textarea"
            id="text"
            className="h-24 border border-solid border-gray-400 bg-gray-100 rounded-sm leading-none text-sm p-3"
            name="text"
          />
        </div>
        <div>
          <button
            className="border-2 border-solid border-gray-800 text-gray-800 py-3 px-6 tracking-widest leading-none cursor-pointer hover:bg-gray-800 hover:text-white"
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
    </Formik>
  </Layout>
)
