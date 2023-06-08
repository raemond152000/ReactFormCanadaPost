import React, { Component, useState } from 'react';

export function Home() {
   
    const[formData, setFormData] = useState({
        companyName: '',
        // other form fields
    });

    const[formErrors, setFormErrors] = useState({
        companyName: ''
    // other form fields
  });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the form fields
        const { companyName } = formData;
        const newFormErrors = {};

        if (companyName.trim() === '') {
            newFormErrors.companyName = 'Company Name is required.';
        }

        // ... validate other form fields

        setFormErrors(newFormErrors);

        // Proceed with form submission only if there are no errors
        if (Object.keys(newFormErrors).length === 0) {
            console.log(formData);
            // Additional logic or API calls can be performed here
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required // Mark the field as required
            />
            {formErrors.companyName && <span>{formErrors.companyName}</span>}
            {/* ... other form fields */}
            <button type="submit">Submit</button>
        </form>
    );
};








