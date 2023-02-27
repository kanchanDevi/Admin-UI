import React, { useState, useEffect } from "react";
import Header from "./Header";
import { userData } from "../utils/constant";

const Body = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const handlerChange = (e) => {
    setSearch(e.target.value);
  };


  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
      console.log(tempUser)
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
      console.log(tempUser)
    }
  };

  return (
    <>
      <Header />
      <div>
        <input
          type="text"
          className="border border-gray-400 w-[95%]"
          value={search}
          onChange={handlerChange}
        />
        <table className="min-w-full text-left text-lg divide-y divide-gray-200">
          <thead className="bg-gray-50">
          <tr>
            <th>
              <input
                type="checkbox"
                name="allSelect"
                // checked={
                //   users.filter((user) => user?.isChecked !== true).length < 1
                // }
                checked={!users.some((user) => user?.isChecked !== true)}
                onChange={handleChange}
              />{" "}
            </th>
           
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
          </thead>
     
        {userData
          .filter((user, index) => {
            return search.toLocaleLowerCase() === ""
              ? user
              : user.name.toLocaleLowerCase().includes(search);
          })
          .map((user, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>  
                    <input
                    type="checkbox"
                      name={user.name}
                     
                      checked={user?.isChecked || false}
                      onChange={handleChange}
                    />{" "}
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              </tbody>
            );
          })}
          </table>
      </div>
    </>
  );
}


export default Body;
