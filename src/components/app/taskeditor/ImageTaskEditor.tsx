import React, { version } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Card, CardContent, CardActions, IconButton, Typography, CardHeader, Grid, TextField, MenuItem } from "@material-ui/core";
import { ImageTask, Task } from "../../kyojin/tasks";
import { IdString, TaskType, TextType, tr_TaskType, UrlString } from "../../kyojin/types";

type Props = {
  id: IdString;
  tasktype: TaskType;
  task: Partial<ImageTask>;

  onEditTask?: ((task: Task) => void) | undefined;
  onDeleteTask?: ((id: IdString) => void) | undefined;
};

function ImageTaskEditor(props: Props) {

  const title = props.task?.title;
  const brief = props.task?.brief;
  const image = props.task?.image;

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {    
    const v = event.target.value;
    if (props.onEditTask) {
      const t = {
        ...props.task,
        title: v
      };
      props.onEditTask(t as Task);  //TODO: вероятно надо чтоб было наследование
    }
  };
  const handleChangeBrief = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value;
    if (props.onEditTask) {
      const t = {
        ...props.task,
        brief: v
      };
      props.onEditTask(t as Task);  //TODO: вероятно надо чтоб было наследование
    }
  };
  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value;
    if (props.onEditTask) {
      const t = {
        ...props.task,
        image: v
      };
      props.onEditTask(t as Task);  //TODO: вероятно надо чтоб было наследование
    }
  };


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
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12}>
            <TextField
              id="title"
              size="small"
              label="Заголовок"
              value={title ?? ""}
              onChange={handleChangeTitle}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="brief"
              size="small"
              label="Краткое содержание"
              value={brief ?? ""}
              onChange={handleChangeBrief}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="image"
              size="small"
              label="Изображение (ссылка)"
              helperText="URL / ссылка на доступный по http/https файл"
              value={image ?? ""}
              onChange={handleChangeImage}
              fullWidth
              required
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>

    </Card>
  );
}

export default ImageTaskEditor;
