import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Card, CardContent, IconButton, Typography, CardHeader } from "@material-ui/core";
import { TextTask } from "../../kyojin/tasks";
import { IdString, TaskType, tr_TaskType } from "../../kyojin/types";

type Props = {
  id: IdString;
  tasktype: TaskType;
  task: Partial<TextTask>;

  onEditTextTask?: ((task: TextTask) => void) | undefined;
  onDeleteTask?: ((id: IdString) => void) | undefined;
};

function TestTaskEditor(props: Props) {

  const handleDelete = () => {
    console.log("handleDelete " + props.id);
    if (props.onDeleteTask) {
      props.onDeleteTask(props.id);
    }
  };

  return (
    <Card variant="outlined">
      <CardHeader
        action={
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        }
        title={tr_TaskType(props.tasktype)}
        subheader={
          <>
            <Typography color="textSecondary">{props.id}</Typography>
          </>
        }
      />

      <CardContent>
        <Typography>TODO: доделать</Typography>
      </CardContent>

    </Card>
  );
}

export default TestTaskEditor;
