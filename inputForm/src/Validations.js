const validateForm = () => {
    const errors = {};
    
    // GST No Validation (should not be empty, and should match GST format)
    if (!formData.gstNo) {
      errors.gstNo = "GST No is required.";
    } else if (!/^\d{15}$/.test(formData.gstNo)) {
      errors.gstNo = "Invalid GST No format.";
    }
  
    // Name Validation (should not be empty)
    if (!formData.name) {
      errors.name = "Name is required.";
    }
  
    // Print Name Validation (optional, but you can add logic if needed)
    if (!formData.printName) {
      errors.printName = "Print Name is required.";
    }
  
    // Identification Validation (should not be empty)
    if (!formData.identification) {
      errors.identification = "Identification is required.";
    }
  
    // Code Validation (should not be empty)
    if (!formData.code) {
      errors.code = "Code is required.";
    }
  
    // UnderLedger Validation (should not be empty)
    if (!formData.underLedger) {
      errors.underLedger = "UnderLedger is required.";
    }
  
    // Firm Status Validation (should not be empty)
    if (!formData.firmStatus) {
      errors.firmStatus = "Firm Status is required.";
    }
  
    // Territory Validation (should not be empty)
    if (!formData.territory) {
      errors.territory = "Territory is required.";
    }
  
    // Vendor Category Validation (should not be empty)
    if (!formData.vendorCategory) {
      errors.vendorCategory = "Vendor Category is required.";
    }
  
    // Contact Person Validation (should not be empty)
    if (!formData.contactPerson) {
      errors.contactPerson = "Contact Person is required.";
    }
  
    // Registration Date Validation (check if it's a valid date)
    if (!formData.registrationDate || isNaN(Date.parse(formData.registrationDate))) {
      errors.registrationDate = "Invalid Registration Date.";
    }
  
    // GST Category Validation (should not be empty)
    if (!formData.gstCategory) {
      errors.gstCategory = "GST Category is required.";
    }
  
    // CIN Validation (optional, but if required, add logic here)
    if (!formData.cin) {
      errors.cin = "CIN is required.";
    }
  
    // Return the errors object
    return errors;
  };
  