import React, { useState } from 'react';
import BasicSection from './BasicSection';
import StatutorySection from './StatutorySection';
import '../index.css';
import ProfilePhoto from './Profilephotos';

const VendorForm = () => {
    const [formData, setFormData] = useState({
        gstNo: '',
        name: '',
        printName: '',
        identification: '',
        code: '',
        underLedger: '',
        isSubVendor: 'no',
        firmStatus: '',
        territory: '',
        vendorCategory: '',
        contactPerson: '',
        registrationDate: '2017-07-01',
        gstCategory: 'Registered',
        gstSuspend: 'no',
        cin: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = () => {
        const errors = {};
        // Basic Section validations
        if (!formData.gstNo) errors.gstNo = "GST No is required.";
        if (!formData.name) errors.name = "Name is required.";
        if (!formData.printName) errors.printName = "Print Name is required.";
        if (!formData.code) errors.code = "Code is required.";
        if (!formData.underLedger) errors.underLedger = "Under Ledger is required.";

        // Statutory Section validations
        if (!formData.registrationDate) errors.registrationDate = "Registration Date is required.";
        if (!formData.gstCategory) errors.gstCategory = "GST Category is required.";
        if (!formData.cin) errors.cin = "CIN is required.";
        if (formData.gstSuspend === '') errors.gstSuspend = "GST Suspend selection is required.";

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            console.log("Form submitted successfully:", formData);
            setFormErrors({});
        }
    };

    return (
        <div className="vendor-form-container">
            <form onSubmit={handleSubmit} className="vendor-form">
                <div className="section1">
                    <div>
                        <ProfilePhoto />
                    </div>
                    <div>
                        <BasicSection
                            formData={formData}
                            handleChange={handleChange}
                            formErrors={formErrors}
                        />

                        <StatutorySection
                            formData={formData}
                            handleChange={handleChange}
                            formErrors={formErrors}
                        />
                    </div>
                </div>
                <div className="submit-container">
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default VendorForm;
