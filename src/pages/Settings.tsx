import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Settings() {
    const { userInfo, setUserInfo } = useUser();
    const [formData, setFormdata] = useState(userInfo);
    const navigate = useNavigate();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    }

    function handleSave(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setUserInfo(formData); // Update global state
        navigate('/profile'); // Navigate back to Profile
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 border rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Settings</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block font-bold mb-2">
                            Username
                        </label>
                        <input
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-bold mb-2">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => navigate('/profile')}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Settings;
