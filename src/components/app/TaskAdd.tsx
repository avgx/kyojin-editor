import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Paper, Typography, IconButton, Menu, List, ListSubheader, MenuItem, Grid, Divider } from "@material-ui/core";
import { Task } from "../kyojin/tasks";
import { TaskType, tr_TaskType } from "../kyojin/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

type Props = {  
  onAddTask: (item: TaskType) => void;  
};

function TaskAdd(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAdd = (item: TaskType) => () => {
    props.onAddTask(item);
    setAnchorEl(null);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      variant="elevation"
      elevation={0}
    >
      <Typography variant="h6">
      Задания
        <IconButton
          edge="end"
          aria-label="task"
          onClick={handleOpenMenu}
          title="Новое задание"
        >
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      </Typography>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {["audio", "text", "quicktest", "test", "image"].map(t => t as TaskType).map(tt => (
          <MenuItem key={tt} onClick={handleAdd(tt)}>{tr_TaskType(tt)}</MenuItem>
        ))}
        {/* <MenuItem key="audio" onClick={handleAdd("audio")}>{tr_TaskType("audio")}</MenuItem>
        <MenuItem key="text" onClick={handleAdd("text")}>Статья / История</MenuItem>
        <MenuItem key="quicktest" onClick={handleAdd("quicktest")}>Быстрый тест</MenuItem>
        <MenuItem key="test" onClick={handleAdd("test")}>Тест</MenuItem>
        <MenuItem key="image" onClick={handleAdd("image")}>Картинка</MenuItem>         */}
      </Menu>
    </Paper>
  );
}

export default TaskAdd;
