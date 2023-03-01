import React, { useState, useEffect } from "react";
import Header from "./Header";
import { USERDATA } from "../utils/constant";
import { BsFillTrashFill, BsPencilSquare, BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
// import { AiFillEdit } from "react-icons/ai";


const Body = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  // const [userEdit, setUserEdit] = useState(-1);


  const handlerChange = (e) => {
    setSearch(e.target.value);
  };

  
  useEffect(() => {
    response();
  }, []);

  const response = async () => {
    const data = await fetch(USERDATA);
    const jsonData = await data.json();
    setUsers(jsonData);
    setTotalPages(Math.ceil(jsonData.length / 12));
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
      console.log(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
      console.log(tempUser);
    }
  };

  const deleteIcon = (index) => {
    const newItems = users.filter((user) => {
      return index !== user.id;
    });
    setUsers(newItems);
    console.log(newItems);
  };

  const handleEditing=(index)=>{
    console.log(index)
    setIsEdit(true)
  }
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const preDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDiaplay = users.slice(startIndex, endIndex);

  return (
    <>
      <Header />
      <div className="p-5 overflow-x-hidden">
        <input
          type="text"
          className="border border-gray-400 w-[95%] h-10 m-5 p-2 "
          value={search}
          onChange={handlerChange}
          placeholder="search...🔍"
        />
        <table className="min-w-[95%] text-left text-lg divide-y p-5 divide-gray-200 m-5">
          <thead className="bg-gray-50 h-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  name="allSelect"
                  className="h-4 w-4"
                  checked={!users.some((user) => user?.isChecked !== true)}
                  onChange={handleChange}
                />{" "}
              </th>

              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          {itemsToDiaplay && itemsToDiaplay.length > 0
            ? itemsToDiaplay
            .filter((user) => {
              if (search === "") return user;
              else if (
                user.name.includes(search) ||
                user.email.includes(search) ||
                user.role.includes(search)
              ) {
                return user;
              }
            })
                .map((user, index) => (
                  <tbody key={index} className="h-11">
                    <tr>
                  
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          name={user.name}
                          className="h-5 w-5 "
                         
                          checked={user?.isChecked || false}
                          onChange={handleChange}
                        />
                      </td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      
                      <td className="flex">
                     

                        <span className="p-2 text-blue-500" onClick={()=>handleEditing(user.id)}>
                          <BsPencilSquare />
                        </span>
                        <span
                          className="p-2 text-red-600"
      
                          onClick={() => {
                            deleteIcon(user.id);
                          }}
                        >
                          {" "}
                          <BsFillTrashFill />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                ))
            : ""}
        </table>
        <div className=" flex flex-row justify-end m-5 p-5 group/item">
          <button
            className="p-2 text-black-200 font-bold "
            onClick={handlePrevClick}
            disabled={preDisabled}
          >
            {<BsChevronDoubleLeft/>}
          </button>
          {Array.from({ length: totalPages }, (_, i) => {
            return (
              <button
                className="bg-blue-500 rounded-full m-1 w-9 p-2 text-sm text-black-300 hover:bg-blue-600  group-hover/item:visible ..."
                onClick={() => handlePageChange(i + 1)}
                key={i}
                disabled={i + 1 === currentPage}
              >
                {i + 1}
              </button>
            );
          })}

          <button
            className="p-2 text-black-200 font-bold"
            onClick={handleNextClick}
            disabled={nextDisabled}
          >
          <BsChevronDoubleRight/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
