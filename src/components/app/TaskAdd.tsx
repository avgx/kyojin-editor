import React from 'react';
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Box, Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import { TaskType, tr_TaskType } from "../kyojin/types";

type Props = {  
  onAddTask: (item: TaskType) => void;  
};

function TaskAdd(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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
    <Box>
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
      </Menu>
    </Box>
  );
}

export default TaskAdd;
