import React, { useMemo, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
//import { useQuery } from "react-query";
import axios from "axios";

export const Agents = () => {
  const { user, setUser } = useState([]);

  useEffect(() => {
    const getUser = async () => {
      return axios
        .get("http://127.0.0.1:8000/api/user")
        .then((response) => JSON.stringify(response));
    };

    getUser();
  });

  //const columns = useMemo(() => Columns, []);
  //   const data = useMemo(() => agentsData, []);

  return (
    <div className="ml-[60px]">
      {/* <Header /> */}
      <div className="bg-white pl-2 pr-9 pt-1 pb-1 mt-5 mb-6 shadow-lg shadow-slate-500 rounded-lg">
        <h2 className="text-3xl m-5">Agents</h2>
        <div className="text-xl mt-16 ml-10">
          Showing :{" "}
          <select className="p-1 rounded-md text-xm">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
          </select>
          {/* <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            className="w-24 h-8 ml-2 shadow-md shadow-slate-400 p-1 rounded-md"
          /> */}
        </div>

        <div className="mt-[-40px]">
          <CiSearch className="ml-[840px] relative top-6 text-2xl" />
          <input
            type="text"
            placeholder="Search"
            className="w-44 h-8 ml-[700px] mt-[-120px] shadow-sm shadow-slate-400 p-1 rounded-md bg-zinc-100"
          />
        </div>

        <table className="w-[840px] ml-10 mt-10 mb-2 ">
          <thead className="h-[10px]">
            <tr className="bg-white hover:bg-zinc-700 hover:text-white">
              <th className="border border-zinc-200 p-5 text-slate-400">Id</th>
              <th className="border border-zinc-200 p-5 text-slate-400">
                Name
              </th>
              <th className="border border-zinc-200 p-5 text-slate-400">
                Email
              </th>
              <th className="border border-zinc-200 p-5 text-slate-400">
                Password
              </th>
            </tr>
          </thead>
          <tbody>
            {user?.map((agent, key) => (
              <tr
                key={key}
                className="bg-white hover:bg-zinc-700 hover:text-white"
              >
                <td className="border border-zinc-200 p-4">{agent.id}</td>
                <td className="border border-zinc-200 p-4">{agent.name}</td>
                <td className="border border-zinc-200 p-4">{agent.email}</td>
                <td className="border border-zinc-200 p-4">{agent.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

//http://192.168.100.41:54360
