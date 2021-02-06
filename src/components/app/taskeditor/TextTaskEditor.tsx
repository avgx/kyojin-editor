import React, { version } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Card, CardContent, CardActions, IconButton, Typography, CardHeader, Grid, TextField, MenuItem } from "@material-ui/core";
import { Task, TextTask } from "../../kyojin/tasks";
import { IdString, TaskType, TextType, tr_TaskType, UrlString } from "../../kyojin/types";

type Props = {
  id: IdString;
  tasktype: TaskType;
  task: Partial<TextTask>;

  onEditTask?: ((task: Task) => void) | undefined;
  onDeleteTask?: ((id: IdString) => void) | undefined;
};

function TextTaskEditor(props: Props) {

  const type = props.task?.type;
  const title = props.task?.title;
  const brief = props.task?.brief;
  const image = props.task?.image;
  //TODO: detail: TextContent[];  //тест в формате MD перемежается со ссылками на картинки
  //const [duration_in_min, setDuration_in_min] = React.useState<number | undefined>(props.task?.duration_in_min);

  const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value as TextType;
    if (props.onEditTask) {
      const t = {
        ...props.task,
        type: v
      };
      props.onEditTask(t as Task);  //TODO: вероятно надо чтоб было наследование
    }
  };
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
              label="Тип"
              select
              value={type ?? ""}
              onChange={handleChangeType}
              fullWidth
              required
              variant="outlined"
            >
              <MenuItem key="unknown" value=""></MenuItem>
              <MenuItem key="article" value="article">Статья</MenuItem>
              <MenuItem key="tale" value="tale">История</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="title"
              size="small"
              label="Заголовок"
              value={title ?? ""}
              onChange={handleChangeTitle}
              fullWidth
              required
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
              required
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

export default TextTaskEditor;
