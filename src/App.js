import React, { useState } from 'react';
import './App.css';

import PersonalInfoForm from './components/PersonalInfoForm';
import TravelPreferencesForm from './components/TravelPreferencesForm';
import HealthAndSafetyForm from './components/HealthAndSafetyForm';
import SuccessMessage from './components/SuccessMessage';


const App = () => {
  const [stage, setStage] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    accommodationPreference: '',
    specialRequests: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactPhoneNumber: '',
    medicalConditions: '',
    healthDeclaration: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStage = () => {
    setStage(stage + 1);
  };

  const prevStage = () => {
    setStage(stage - 1);
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="app">
      {stage === 1 && (
        <PersonalInfoForm
          formData={formData}
          handleChange={handleChange}
          nextStage={nextStage}
        />
      )}

      {stage === 2 && (
        <TravelPreferencesForm
          formData={formData}
          handleChange={handleChange}
          prevStage={prevStage}
          nextStage={nextStage}
        />
      )}

      {stage === 3 && (
        <HealthAndSafetyForm
          formData={formData}
          handleChange={handleChange}
          prevStage={prevStage}
          submitForm={handleFormSubmit}
        />
      )}

      {formSubmitted && stage === 3 && <SuccessMessage />}
    </div>
  );
};

export default App;
