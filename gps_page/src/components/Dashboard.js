import React, { useEffect, useState } from 'react';
 
const Dashboard = () => {
    const [gps, setGps] = useState([]);

    useEffect(() => {
        getGpsSummary();
    }, []);

const getGpsSummary = () => {
    fetch("http://localhost:5000/getGpsSummary")
    .then(Response =>{
        return Response.json()
    })
    .then( data => {
        setGps(data)
    })
}
    return (
        <div className="container mt-5">
            <p className='title'>GPS Summary</p>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>DeviceId</th>
                        <th>Device Type</th>
                        <th>Timestamp</th>
                        <th>location</th>
                    </tr>
                </thead>
                <tbody>
                    {gps.map((user) => (
                        <tr key={user.id}>
                            <td>{user.deviceId}</td>
                            <td>{user.deviceType}</td>
                            <td>{user.timestamp}</td>
                            <td>{user.location}</td>
                        </tr>
                    ))}
 
                </tbody>
            </table>
        </div>
    )
}
 
export default Dashboard;