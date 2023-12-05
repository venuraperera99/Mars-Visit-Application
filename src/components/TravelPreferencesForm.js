// TravelPreferencesForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TravelPreferencesForm = ({ formData, handleChange, prevStage, nextStage }) => {
  const formik = useFormik({
    initialValues: {
      departureDate: '',
      returnDate: '',
      accommodationPreference: '',
      specialRequests: '',
    },
    validationSchema: Yup.object({
      departureDate: Yup.date().required('Required'),
      returnDate: Yup.date()
        .required('Required')
        .min(Yup.ref('departureDate'), 'Return date must be after departure date'),
      accommodationPreference: Yup.string().required('Required'),
      specialRequests: Yup.string(),
    }),
    onSubmit: () => {
      // Handle form submission logic
      nextStage();
    },
  });

  const handlePrev = () => {
    prevStage();
  };


  return (
    <div className="stage">
      <h2>Stage 2: Travel Preferences</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          name="departureDate"
          value={formik.values.departureDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.departureDate && formik.errors.departureDate && (
          <div className="error">{formik.errors.departureDate}</div>
        )}

        <label htmlFor="returnDate">Return Date:</label>
        <input
          type="date"
          id="returnDate"
          name="returnDate"
          value={formik.values.returnDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.returnDate && formik.errors.returnDate && (
          <div className="error">{formik.errors.returnDate}</div>
        )}

        <label htmlFor="accommodationPreference">Accommodation Preference:</label>
        <select
          id="accommodationPreference"
          name="accommodationPreference"
          value={formik.values.accommodationPreference}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        >
          <option value="">Select an option</option>
          <option value="spaceHotel">Space Hotel</option>
          <option value="martianBase">Martian Base</option>
          <option value="nasaBase">NASA Base</option>
          <option value="etMotel">ET Motel</option>
        </select>
        {formik.touched.accommodationPreference && formik.errors.accommodationPreference && (
          <div className="error">{formik.errors.accommodationPreference}</div>
        )}

        <label htmlFor="specialRequests">Special Requests or Preferences:</label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formik.values.specialRequests}
          onChange={formik.handleChange}
        />

        <button type="button" onClick={handlePrev}>
          Previous
        </button>
        <button type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

export default TravelPreferencesForm;
