import React from "react";
import SideBar from "../components/SideBar";
import AddCampForm from "../components/AddCampForm";
import Camptable from "../components/CampTable";
const Home = () => {
    const initialData = [
        { id: 1, name: 'John', lastName: 'Doe' },
        { id: 2, name: 'Jane', lastName: 'Doe' },
        { id: 11, name: 'John', lastName: 'Doe' },
        { id: 21, name: 'Jane', lastName: 'Doe' },
        { id: 12, name: 'John', lastName: 'Doe' },
        { id: 23, name: 'Jane', lastName: 'Doe' },
        { id: 14, name: 'John', lastName: 'Doe' },
        { id: 25, name: 'Jane', lastName: 'Doe' },
        { id: 25, name: 'Jane', lastName: 'Doe' },
        { id: 25, name: 'Jane', lastName: 'Doe' },
        { id: 25, name: 'Jane', lastName: 'Doe' },
        // ... other rows
      ];
  return (
    <>
      <div className="flex justify-between items-start">
        <SideBar />
        <div style={{display:"flex",flexDirection:"column"}}>
        <div
          style={{
            display: "flex",
            flex: "2",
            height: "50vh",
            width: "100%",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <AddCampForm />
        </div>

        <div style={{height:"20vh"}}>
          <Camptable data={initialData} loading={false}/>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
