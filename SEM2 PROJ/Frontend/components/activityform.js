import React, { useState } from 'react';
import axios from 'axios';

function ActivityForm({ userId, onActivityAdded }) {
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/activities', {
                user: userId,
                type,
                duration,
            });
            onActivityAdded(response.data);
            setType('');
            setDuration('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form className="activity-form" onSubmit={handleSubmit}>
            <h2>Log Activity</h2>
            <div className="form-group">
                <label>Activity Type:</label>
                <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="E.g., Running"
                    required
                />
            </div>
            <div className="form-group">
                <label>Duration (minutes):</label>
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="E.g., 30"
                    required
                />
            </div>
            <button type="submit">Add Activity</button>
        </form>
    );
}

export default ActivityForm;
