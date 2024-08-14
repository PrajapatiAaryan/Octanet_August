import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Todotask = () => {
  const [todos, settodos] = useState([]);
  const [task, settask] = useState("");
  useEffect(() => {
    let todolist = localStorage.getItem("todolist");
    // let newtodolist = JSON.parse(todolist);
    console.log(JSON.parse(todolist))
    let newtodolist = JSON.parse(todolist) ;
    console.log(newtodolist)
    
      settodos(newtodolist);
  }, []);
  //add function
  const handleadd = () => {
    let updatedtodo = [
      ...todos,
      { id: Date.now(), todo: task, iscompleted: false },
    ];
    settodos(updatedtodo);
    localStorage.setItem("todolist", JSON.stringify(updatedtodo));
    settask("");
  };
  //cheakbox function
  const handlecheak = (id) => {
    let updatedtodo = todos.map((item) =>
      item.id == id ? { ...item, iscompleted: !item.iscompleted } : item
    );
    settodos(updatedtodo);
    localStorage.setItem("todolist", JSON.stringify(updatedtodo));
  };

  //edit funcation
  const handleedit = (id, todo) => {
    settask(todo);
    let updatedtodo = todos.filter((item) => item.id != id);
    localStorage.setItem("todolist", JSON.stringify(updatedtodo));
    settodos(updatedtodo);
  };
  //delete function
  const handledelete = (id) => {
    let updatedtodo = todos.filter((item) => item.id != id);
    localStorage.setItem("todolist", JSON.stringify(updatedtodo));
    settodos(updatedtodo);
  };
  //show all function


  return (
    <>
      <div className="">
        <div className="flex justify-center items-center flex-col pt-12">
          <h1 className="text-black text-[2rem] px-9 pt-7 pb-5">
            Enter Your Task here
          </h1>
          <form
            className=" w-full lg:w-[50%] flex gap-2 justify-center items-center"
            onSubmit={handleadd}
          >
            <input
              className="w-[80%] lg:ml-8 mx-2 px-2 py-3 text-[1.2rem] bg-transparent text-black"
              type="text"
              value={task}
              placeholder="Enter your todo"
              onChange={(e) => settask(e.target.value)}
            />
            <button
              onClick={handleadd}
              disabled={task.length < 2}
              className="border border-black px-4 py-3  bg-gradient-to-tr from-purple-500 to-violet-500 rounded-xl shadow-md shadow-gray-800"
            >
              Add
            </button>
          </form>
          <div className="">
            <h1 className="text-xl px-3 py-2 flex justify-center items-center font-bold">
              Here Your All Task List
            </h1>
           
            {todos?.map((item) => (
              <div key={item.id} className=" w-[90vw] lg:w-[45vw] ">
                <div className="flex justify-between px-2 py-2 items-center border-b">
                  <div className="flex gap-4 text-xl font-semibold">
                    <input
                      className=""
                      type="checkbox"
                      checked={item.iscompleted}
                      onChange={() => handlecheak(item.id)}
                    />
                    <h1 className={item.iscompleted ? "line-through" : ""}>
                      {item.todo}
                    </h1>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <button
                      className=" bg-gradient-to-t from-gray-500 to-gray-300 px-4 py-2 flex justify-center items-center border border-gray-800 rounded-xl shadow-purple-500 shadow-sm"
                      onClick={() => handleedit(item.id, item.todo)}
                    >
                      Edit
                    </button>

                    <button
                      className=" bg-gradient-to-t from-gray-500 to-gray-300 px-4 py-2 flex justify-center items-center border border-gray-800 rounded-xl shadow-purple-500 shadow-sm"
                      onClick={() => handledelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todotask;
