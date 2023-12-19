import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const HealthAndSafetyForm = ({ formData, handleChange, prevStage, submitForm }) => {
  const formik = useFormik({
    initialValues: {
      healthDeclaration: formData.healthDeclaration,
      emergencyContactName: formData.emergencyContactName,
      emergencyContactRelationship: formData.emergencyContactRelationship,
      emergencyContactPhoneNumber: formData.emergencyContactPhoneNumber,
      medicalConditions: formData.medicalConditions,
    },
    validationSchema: Yup.object({
      healthDeclaration: Yup.string().required('Required'),
      emergencyContactName: Yup.string().required('Required'),
      emergencyContactRelationship: Yup.string().required('Required'),
      emergencyContactPhoneNumber: Yup.string()
        .matches(/^[0-9]{10}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, 'Invalid phone number')
        .required('Required'),
      medicalConditions: Yup.string(),
    }),
    onSubmit: () => {
      submitForm();
    },
  });

  return (
    <div className="stage">
      <h2>Stage 3: Health and Safety</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="healthDeclaration">Health Declaration:</label>
        <select
          id="healthDeclaration"
          name="healthDeclaration"
          value={formik.values.healthDeclaration}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {formik.touched.healthDeclaration && formik.errors.healthDeclaration && (
          <div className="error">{formik.errors.healthDeclaration}</div>
        )}

        <div>
          <div className="form-tag">Emergency Contact Information:</div>

          <label htmlFor="emergencyContactName">Emergency Contact Name:</label>
          <input
            type="text"
            id="emergencyContactName"
            name="emergencyContactName"
            value={formik.values.emergencyContactName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.emergencyContactName && formik.errors.emergencyContactName && (
            <div className="error">{formik.errors.emergencyContactName}</div>
          )}
        </div>

        <div>
          <label htmlFor="emergencyContactRelationship">Relationship:</label>
          <input
            type="text"
            id="emergencyContactRelationship"
            name="emergencyContactRelationship"
            value={formik.values.emergencyContactRelationship}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.emergencyContactRelationship &&
            formik.errors.emergencyContactRelationship && (
              <div className="error">{formik.errors.emergencyContactRelationship}</div>
            )}
        </div>

        <div>
          <label htmlFor="emergencyContactPhoneNumber">Emergency Contact Phone Number:</label>
          <input
            type="tel"
            id="emergencyContactPhoneNumber"
            name="emergencyContactPhoneNumber"
            value={formik.values.emergencyContactPhoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.emergencyContactPhoneNumber &&
            formik.errors.emergencyContactPhoneNumber && (
              <div className="error">{formik.errors.emergencyContactPhoneNumber}</div>
            )}
        </div>

        <label htmlFor="medicalConditions">Any Medical Conditions (if applicable):</label>
        <textarea
          id="medicalConditions"
          name="medicalConditions"
          value={formik.values.medicalConditions}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.medicalConditions && formik.errors.medicalConditions && (
          <div className="error">{formik.errors.medicalConditions}</div>
        )}

        <button type="button" onClick={prevStage}>
          Previous
        </button>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HealthAndSafetyForm;
