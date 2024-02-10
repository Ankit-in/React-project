import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('/getUserDetails/123'); // Replace 123 with actual user ID
        setUserDetails(response.data.userDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserDetails();
  }, []);

  const handleEditDetails = async () => {
    // Implement edit details functionality
  };

  return (
    <div>
      <h2>Profile</h2>
      {userDetails && (
        <div>
          <p>Username: {userDetails.username}</p>
          <p>Age: {userDetails.age}</p>
          <p>Date of Birth: {userDetails.dob}</p>
          <p>Contact: {userDetails.contact}</p>
          <button onClick={handleEditDetails}>Edit Details</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
