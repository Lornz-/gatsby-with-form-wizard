import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wizard from "../components/Wizard";
import Contact from "../views/FormWizardView/Steps/Contact";
import Message from "../views/FormWizardView/Steps/Message";

const FormWizard = () => (
  <Layout>
    <SEO title="Form Wizard" />
    <h1>Form Wizard demo</h1>
    <Wizard>
      <Contact initialValues={{'firstName': '', 'lastName': '', 'email': ''}} />

      <Message initialValues={{'message': ''}} />
    </Wizard>
  </Layout>
)

export default FormWizard
