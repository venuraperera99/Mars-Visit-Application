// PersonalInformationForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PersonalInformationForm = ({ nextStage }) => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      dateOfBirth: '',
      nationality: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Required'),
      dateOfBirth: Yup.date().required('Required'),
      nationality: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Invalid phone number') // Adjust the regex as needed
        .required('Required'),
    }),
    onSubmit: () => {
      nextStage();
    },
  });

  return (
    <div className="stage">
      <h2>Stage 1: Personal Information</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div className="error">{formik.errors.fullName}</div>
        )}

        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formik.values.dateOfBirth}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.dateOfBirth && formik.errors.dateOfBirth && formik.dirty && (
          <div className="error">{formik.errors.dateOfBirth}</div>
        )}

        <label htmlFor="nationality">Nationality:</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={formik.values.nationality}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.nationality && formik.errors.nationality && (
          <div className="error">{formik.errors.nationality}</div>
        )}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="example@example.com"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="123-456-7890"
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="error">{formik.errors.phone}</div>
        )}

        <button type="submit" disabled={!formik.isValid && formik.dirty}>
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInformationForm;
