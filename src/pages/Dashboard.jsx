import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    } else {
      axios
        .get('https://password-reset-guvi.onrender.com/api/protected-route', {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUserData(response.data);
          console.log(response);
        })
        .catch((error) => {
          toast.error('Failed to fetch user data');
          navigate('/login'); 
        });
    }
  }, [navigate]);

  return (
    <div className="container form-container text-center m-5">
      <h1 className="mb-4 text-white">Dashboard</h1>
      <div className="card">
        <div className="card-body fw-bold">
          {userData ? (
            <div>
                <h4 className='mb-3'>Welcome {userName}😍</h4>
                <p className="card-text">User ID: {userData.user.userId}</p>
                <p className="card-text">User Email: {userData.user.email}</p>
                
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;