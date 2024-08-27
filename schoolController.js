const db = require('./db');

// Helper function to calculate distance
const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
};

exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [name, address, latitude, longitude], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: results.insertId, message: 'School added successfully' });
    });
};

exports.listSchools = (req, res) => {
    const { lat, lon } = req.query;
    
    // Ensure lat and lon are numbers
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);
    
    if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ error: 'Latitude and longitude must be valid numbers' });
    }

    const query = 'SELECT * FROM schools';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        const schools = results.map(school => ({
            ...school,
            distance: getDistance(latitude, longitude, school.latitude, school.longitude)
        }));

        schools.sort((a, b) => a.distance - b.distance);

        res.json(schools);
    });
};

