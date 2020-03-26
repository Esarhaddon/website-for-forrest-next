import Layout from "../components/Layout"
import { Field, Form, Formik } from "formik"

export default () => (
  <Layout isFor="contact">
    {/* <div className="w-full h-full flex justify-center items-center text-6xl text-bold text-gray-500">
      CONTACT
    </div> */}
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
      <Form className="flex flex-col">
        <div className="flex flex-wrap">
          <Field
            className="border border-solid border-gray-500 rounded flex-1 mx-1"
            name="firstName"
          />
          <Field
            className="border border-solid border-gray-500 rounded flex-1 mx-1"
            name="lastName"
          />
        </div>
        <Field
          className="border border-solid border-gray-500 rounded flex-1 mx-1"
          name="emailAddress"
        />
        <Field
          className="border border-solid border-gray-500 rounded flex-1 mx-1"
          name="subjectLine"
        />
        <Field
          className="border border-solid border-gray-500 rounded flex-1 mx-1"
          name="text"
        />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  </Layout>
)
