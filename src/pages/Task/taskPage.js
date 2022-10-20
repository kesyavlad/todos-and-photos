import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import "./taskPage.scss";

const TaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks);
  const [text, setText] = useState("");
  const goBack = () => navigate(-1);
  useEffect(() => {
    tasks.map((task) => (task.id == id ? setText(task.input) : null));
  }, [id]);
  return (
    <div>
      <Button onClick={goBack}>{`<Go Back`}</Button>
      <div className="text__body">{text}</div>
    </div>
  );
};

export default TaskPage;
