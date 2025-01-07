import React from 'react';

const BasicSection = ({ formData, handleChange, formErrors }) => {
    return (
        <div className="section">
            <h2 style={{ color: 'blue' }}>Basic</h2>
            <div className="form-group">
                <label>
                    GST No
                </label>
                <input
                    type="text"
                    name="gstNo"
                    value={formData.gstNo}
                    onChange={handleChange}
                />
                <button type="button" className="fetch-button">
                    Fetch Info
                </button>
                {formErrors.gstNo && <div className="error">{formErrors.gstNo}</div>}
            </div>
            <div className="form-group">
                <label>
                    Name <span className="required">*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {formErrors.name && <div className="error">{formErrors.name}</div>}
            </div>
            <div className="form-group">
                <label>
                    Print Name <span className="required">*</span>
                </label>
                <input
                    type="text"
                    name="printName"
                    value={formData.printName}
                    onChange={handleChange}
                />
                {formErrors.printName && <div className="error">{formErrors.printName}</div>}
            </div>
            <div className="form-group">
                <label>Identification</label>
                <input
                    type="text"
                    name="identification"
                    value={formData.identification}
                    onChange={handleChange}
                />
                {formErrors.identification && (
                    <div className="error">{formErrors.identification}</div>
                )}
            </div>
            <div className="form-group">
                <label>
                    Code <span className="required">*</span>
                </label>
                <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                />
                {formErrors.code && <div className="error">{formErrors.code}</div>}
            </div>
            <div className="form-group">
                <label>
                    Under Ledger <span className="required">*</span>
                </label>
                <select
                    name="underLedger"
                    value={formData.underLedger}
                    onChange={handleChange}
                >
                    <option value="">Select...</option>
                </select>
                {formErrors.underLedger && (
                    <div className="error">{formErrors.underLedger}</div>
                )}
            </div>
            <div className="form-group">
                <label>Vendor Common for Sales Purchase</label>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="VendorCommon"
                            value="yes"
                            checked={formData.VendorCommon === 'yes'}
                            onChange={handleChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="VendorCommon"
                            value="no"
                            checked={formData.VendorCommon === 'no'}
                            onChange={handleChange}
                        />
                        No
                    </label>
                </div>
                {formErrors.VendorCommon && (
                    <div className="error">{formErrors.VendorCommon}</div>
                )}
            </div>
            <div className="form-group">
                <label>Is Sub Vendor</label>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="isSubVendor"
                            value="yes"
                            checked={formData.isSubVendor === 'yes'}
                            onChange={handleChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="isSubVendor"
                            value="no"
                            checked={formData.isSubVendor === 'no'}
                            onChange={handleChange}
                        />
                        No
                    </label>
                </div>
                {formErrors.isSubVendor && (
                    <div className="error">{formErrors.isSubVendor}</div>
                )}
            </div>
            <div className="form-group">
                <label>Firm Status</label>
                <select
                    name="firmStatus"
                    value={formData.firmStatus}
                    onChange={handleChange}
                >
                    <option value="">None</option>
                </select>
                {formErrors.firmStatus && (
                    <div className="error">{formErrors.firmStatus}</div>
                )}
            </div>
            <div className="form-group">
                <label>Territory</label>
                <select
                    name="territory"
                    value={formData.territory}
                    onChange={handleChange}
                >
                    <option value="">Select...</option>
                </select>
                {formErrors.territory && (
                    <div className="error">{formErrors.territory}</div>
                )}
            </div>
            <div className="form-group">
                <label>Vendor Category</label>
                <select
                    name="vendorCategory"
                    value={formData.vendorCategory}
                    onChange={handleChange}
                >
                    <option value="">Select...</option>
                </select>
                {formErrors.vendorCategory && (
                    <div className="error">{formErrors.vendorCategory}</div>
                )}
            </div>
            <div className="form-group">
                <label>Contact Person</label>
                <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                />
                {formErrors.contactPerson && (
                    <div className="error">{formErrors.contactPerson}</div>
                )}
            </div>
        </div>
    );
};

export default BasicSection;
