import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Container, Typography } from "@mui/material";

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
    <>
      <Button onClick={goBack}>{`<Go Back`}</Button>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          style={{ wordBreak: "break-all", overflowX: "hidden" }}
        >
          {text}
        </Typography>
      </Container>
    </>
  );
};

export default TaskPage;
