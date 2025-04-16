"use client";

import CreateTask from "@/components/CreateTask";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TaskList from "@/components/TaskList";
import axios from "axios";
import { mongo } from "mongoose";
import { use, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // api code
      const response = await axios.post("/api", formData);
      toast.success(response.data.msg);
      setFormData({ title: "", description: "" });
      await fetchTodos();
    } catch (error) {
      toast.error("Error Creating Task");
    }
  };

  const [todoData, setTodoData] = useState([]);
  const fetchTodos = async () => {
    const response = await axios.get("/api");
    setTodoData(response.data.todos);
    
  };

  const deleteTodo = async (id) => {
    const response = await axios.delete("/api",{
      params : {
        mongoId : id
      }
    });
    toast.success(response.data.msg);
    fetchTodos();
  }

  const completeTodo = async (id) => {
const response  = await axios.put("/api",{},{
  params : {
    mongoId : id
  }
});
toast.success(response.data.msg);
fetchTodos();
  }

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="min-h-screen flex flex-col  ">
      <Toaster />
      <Header />
    <div className="flex-grow">
      <CreateTask
      className=""
        formData={formData}
        setFormData={setFormData}
        onSubmitHandler={onSubmitHandler}
      />
      <TaskList 
        formData={formData}
        setFormData={setFormData}
        todoData={todoData}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        
      />
      </div>
      <Footer className="" />
    </div>
  );
}
