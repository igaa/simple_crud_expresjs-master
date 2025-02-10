import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import ChartPenduduk  from './components/ChartPenduduk'
import { CButton } from '@coreui/react';

const App = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [refreshList, setRefreshList] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);

    const handleFormSubmit = () => {
        setSelectedUser(null);

        console.log("already. resset"); 
        setRefreshList(prev => !prev); // Trigger re-render of UserList
    };

    const handleUserSelect = (user) => {
        console.log("user : ", user); 
        setSelectedUser(user);
    };

    const handleReset = () => {
        console.log("already. resset"); 
        setSelectedUser(null);
        setRefreshList(prev => !prev); // Trigger re-render of UserList
    };

    const chartDataPendudukHandles= () => {

        console.log("Chart"); 
        return (
           <h1> chart data</h1>
        ); 

    }

    return (
        <div className="App">
        <br/>
        <button class="btn btn-info" style={{marginTop:"30px"}} onClick={() => setActiveComponent("chart")}>
          Tampilkan Chart Penduduk 2024
        </button>

        {activeComponent === "chart" && <ChartPenduduk />}
        
        <UserForm
                selectedUser={selectedUser}
                onFormSubmit={handleFormSubmit}
                onReset={handleReset}
                onSuccess={() => setRefreshList(prev => !prev)} // Pass the callback for list refresh
        />
        <UserList refresh={refreshList} onEdit={handleUserSelect} />
        </div>
    );

};

export default App;