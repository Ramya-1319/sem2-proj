import React from 'react';

function ActivityList({ activities }) {
    return (
        <div className="activity-list">
            <h2>Your Activities</h2>
            <ul>
                {activities.map((activity) => (
                    <li key={activity._id}>
                        {activity.type} - {activity.duration} minutes on{' '}
                        {new Date(activity.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ActivityList;
