import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetails = () => {
  const { id } = useParams(); // This should match the dynamic URL part

  return (
    <div>
      <h2>Doctor Details for: {id}</h2>
      {/* You can fetch more detailed info based on `id` or display static content */}
    </div>
  );
};

export default DoctorDetails;
