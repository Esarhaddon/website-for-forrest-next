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
          <div className="flex flex-col flex-1">
            <label htmlFor="firstName">First Name</label>
            <Field
              id="firstName"
              className="border border-solid border-gray-500 bg-gray-100 rounded-sm p-2"
              name="firstName"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="lastName">Last Name</label>
            <Field
              id="lastName"
              className="border border-solid border-gray-500 bg-gray-100 rounded-sm p-2"
              name="lastName"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="emailAddress">Email Address</label>
          <Field
            id="emailAddress"
            className="border border-solid border-gray-500 bg-gray-100 rounded-sm flex-1 p-2"
            name="emailAddress"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subjectLine">Subject </label>
          <Field
            id="subjectLine"
            className="border border-solid border-gray-500 bg-gray-100 rounded-sm flex-1 p-2"
            name="subjectLine"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="text"></label>
          <Field
            as="textarea"
            id="text"
            className="border border-solid border-gray-500 bg-gray-100 rounded-sm flex-1 p-2 off-overflow-y-scroll"
            name="text"
          />
        </div>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  </Layout>
)
