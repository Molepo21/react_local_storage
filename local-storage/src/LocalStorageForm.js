// LocalStorageForm.js
import React, { useState, useEffect } from 'react';

const LocalStorageForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        idNumber: '',
        email: '',
        homeAddress: '',
        description: '',
    });

    useEffect(() => {
        // Load form data from local storage on component mount
        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data (you can add your logic here)
        console.log('Form submitted:', formData);

        // Save form data to local storage
        localStorage.setItem('formData', JSON.stringify(formData));
    };

    return (
        <div className="App">
            <div className='container'>
                <form className="app-Form" onSubmit={handleSubmit}>
                    <h1>Form with Local Storage</h1>
                    <label style={{
                        alignItems: 'left'
                    }}>
                        Name:
                        <input

                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Surname:
                        <input

                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        ID Number:
                        <input

                            type="text"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input

                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Home Address:
                        <input
                            type="text"
                            name="homeAddress"
                            value={formData.homeAddress}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea

                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>

    );
};

export default LocalStorageForm;
