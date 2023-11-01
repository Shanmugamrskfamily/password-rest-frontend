
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const VerifyToken = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
   
    fetch(`http://localhost:7000/api/verify-token/${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        if (response.ok) {
          toast.success('Token verified. Redirecting to reset password page.');
          navigate(`/reset-password/${token}`);
          
        } else {
          toast.error('Token verification failed. Please try again.');
          navigate('/login');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Something went wrong');
        navigate('/login');
      });
  }, [ token]);

  return (
    <div>
      <h2>Verifying Token...</h2>
     
    </div>
  );
};

export default VerifyToken;
