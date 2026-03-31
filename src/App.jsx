import React, { useState } from "react";

const App = () => {
  let [user, setUser] = useState([
    {
      name: "Rahul",
      id: 1,
    },
    {
      name: "Soniya",
      id: 2,
    },
    {
      name: "Kiran",
      id: 3,
    },
  ]);

  return (
    <div className="flex gap-20 bg-purple-300 h-screen">
      {user.map((elem) => {
        return (
          <div className="flex gap-5 m-10 " key={elem.id}>
            <h2 className="text-2xl">{elem.name}</h2>
            <button className="bg-red-600 px-3 py-1.5 rounded-2xl text-white active:scale-95 cursor-pointer h-fit"
              onClick={() => {
                let filterData = user.filter((val) => {
                  return val.id != elem.id;
                });

                setUser(filterData);
                console.log(filterData);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
