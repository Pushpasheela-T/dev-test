import React from 'react';

function DeltaDisplay({ deltas }) {
    return (
        <div>
            <h2>Temperature Delta (°C)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Delta</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(deltas).map(([day, delta]) => (
                        <tr key={day}>
                            <td>{day}</td>
                            <td>{delta.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DeltaDisplay;