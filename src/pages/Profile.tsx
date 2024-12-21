import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Profile() {
    const navigate = useNavigate();
    const { userInfo } = useUser();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 border rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Username</label>
                    <input
                        type="text"
                        value={userInfo.username}
                        disabled
                        className="w-full px-4 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Password</label>
                    <input
                        type="text"
                        value={userInfo.password}
                        disabled
                        className="w-full px-4 py-2 border rounded"
                    />
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={() => navigate('/settings')}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Edit Profile
                    </button>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
