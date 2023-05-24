import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from "nanoid";


const PhoneSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  number: Yup.string()
    .matches(/^[\d\s()+-]*$/, 'Invalid phone number')
    .required('Phone number is required'),
});

export const ContactForm = ({ onAdd, contacts }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}

      validationSchema={PhoneSchema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
      
    >
<Form>
        <label>
          Name
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" />
        </label>

        <label>
          Number
          <Field type="text" name="number" placeholder="Number" />
          <ErrorMessage name="number" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  </div>
);

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
