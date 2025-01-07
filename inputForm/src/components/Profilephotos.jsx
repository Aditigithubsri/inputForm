import React, { useState } from "react";
import '../index.css';

const ProfilePhoto = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="profile-photo-container">
      <div className="upload-box">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="fileInput"
          style={{ display: "none" }}
        />
        <label htmlFor="fileInput">
          <div className="upload-overlay">
            {image ? (
              <img src={image} alt="Profile" className="profile-photo" />
            ) : (
              <span>Click to upload</span>
            )}
          </div>
        </label>
      </div>
      
      {/* Browse button below the upload box */}
      <div className="browse-btn-container">
        <button onClick={() => document.getElementById("fileInput").click()} className="browse-btn">
          Browse
        </button>
      </div>
    </div>
  );
};

export default ProfilePhoto;
