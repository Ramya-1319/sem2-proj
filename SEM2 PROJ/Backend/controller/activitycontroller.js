const Activity = require('../models/Activity');

const logActivity = async (req, res) => {
    const { user, type, duration } = req.body;
    try {
        const newActivity = await Activity.create({ user, type, duration });
        res.status(201).json(newActivity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getActivities = async (req, res) => {
    const { userId } = req.params;
    try {
        const activities = await Activity.find({ user: userId });
        res.json(activities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { logActivity, getActivities };
