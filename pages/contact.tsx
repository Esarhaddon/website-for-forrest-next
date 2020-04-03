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
        text: ""
      }}
      onSubmit={() => console.log("Bang! Yur dead.")}
    >
      <Form className="flex flex-col w-11/12 sm:w-7/12 mx-auto">
        <div className="flex flex-wrap">
          <div className="flex flex-col flex-1 pr-1">
            <label className="text-xl font-light" htmlFor="firstName">
              First Name
            </label>
            <Field
              id="firstName"
              className="border border-solid border-gray-400 bg-gray-100 rounded-sm leading-none text-sm p-3"
              name="firstName"
            />
          </div>
          <div className="flex flex-col flex-1 pl-1">
            <label className="text-xl font-light" htmlFor="lastName">
              Last Name
            </label>
            <Field
              id="lastName"
              className="border border-solid border-gray-400 bg-gray-100 rounded-sm leading-none text-sm p-3"
              name="lastName"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-xl font-light" htmlFor="emailAddress">
            Email Address
          </label>
          <Field
            id="emailAddress"
            className="border border-solid border-gray-400 bg-gray-100 rounded-sm leading-none text-sm p-3"
            name="emailAddress"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl font-light" htmlFor="subjectLine">
            Subject{" "}
          </label>
          <Field
            id="subjectLine"
            className="border border-solid border-gray-400 bg-gray-100 rounded-sm leading-none text-sm p-3"
            name="subjectLine"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl font-light" htmlFor="text"></label>
          <Field
            component="textarea"
            id="text"
            className="border border-solid border-gray-400 bg-gray-100 rounded-sm leading-none text-sm p-3"
            name="text"
          />
        </div>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  </Layout>
)
