import React, { useState } from 'react';

function LocationSearch({ onSearch }) {
    const [location, setLocation] = useState('');

    const handleAdd = () => {
        if (location) {
            onSearch(location);
            setLocation('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="Enter location" 
            />
            <button onClick={handleAdd}>Add Locations</button>
        </div>
    )
}

export default LocationSearch;