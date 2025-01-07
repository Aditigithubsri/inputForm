import React from 'react';

const StatutorySection = ({ formData, handleChange, formErrors }) => {
    return (
        <div className="section">
            <h2 style={{ color: 'blue' }}>Statutory</h2>

            <div className="section2">
                <div>
                    <div className="form-group">
                        <label>GST</label>
                        <input
                            type="text"
                            name="gst"
                            value={formData.gst}
                            onChange={handleChange}
                        />
                        {formErrors.gst && <div className="error">{formErrors.gst}</div>}
                    </div>

                    <div className="form-group">
                        <label>Registration Date</label>
                        <input
                            type="date"
                            name="registrationDate"
                            value={formData.registrationDate}
                            onChange={handleChange}
                        />
                        {formErrors.registrationDate && (
                            <div className="error">{formErrors.registrationDate}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label>CIN</label>
                        <input
                            type="text"
                            name="cin"
                            value={formData.cin}
                            onChange={handleChange}
                        />
                        {formErrors.cin && <div className="error">{formErrors.cin}</div>}
                    </div>
                </div>

                <div>
                    <div className="form-group">
                        <label>GST Category</label>
                        <select
                            name="gstCategory"
                            value={formData.gstCategory}
                            onChange={handleChange}
                        >
                            <option value="Registered">Registered</option>
                            <option value="Unregistered">Unregistered</option>
                        </select>
                        {formErrors.gstCategory && (
                            <div className="error">{formErrors.gstCategory}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label>GST Suspend</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="gstSuspend"
                                    value="yes"
                                    checked={formData.gstSuspend === 'yes'}
                                    onChange={handleChange}
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gstSuspend"
                                    value="no"
                                    checked={formData.gstSuspend === 'no'}
                                    onChange={handleChange}
                                />
                                No
                            </label>
                        </div>
                        {formErrors.gstSuspend && (
                            <div className="error">{formErrors.gstSuspend}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatutorySection;
