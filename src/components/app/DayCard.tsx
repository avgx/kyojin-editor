import React from 'react';
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Card, CardContent, IconButton, CardHeader, MenuItem, Menu, Chip } from "@material-ui/core";
import { IdString } from "../kyojin/types";
import { Task, taskDescription } from "../kyojin/tasks";
import { DayTasks } from "../kyojin/model";

type Props = {
  dayNumber: number; //zero based
  dayTasks: DayTasks;
  allTasks: Task[];

  onAddTask: (dayNumber: number, taskId: IdString) => void;
  onRemoveTask: (dayNumber: number, taskId: IdString) => void;
};

function DayCard(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAdd = (taskId: IdString) => () => {
    props.onAddTask(props.dayNumber, taskId);
    setAnchorEl(null);
  };
  const handleRemove = (taskId: IdString) => () => {
    props.onRemoveTask(props.dayNumber, taskId);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Card variant="outlined">
      <CardHeader
        action={
          <IconButton aria-label="delete" onClick={handleOpenMenu}>
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        }
        title={`День ${props.dayNumber + 1}`}
      />

      <CardContent>
        {props.dayTasks.tasks.map(t => {
          
          const found = props.allTasks.find(tt => tt.id === t);
          const desc = !!found ? taskDescription(found) : `Task ${t}`;
          return (
          <Chip
            key={`chip-${t}`}
            variant="outlined"
            size="small"
            onDelete={handleRemove(t)}
            label={desc}
          />
          );
        })}
      </CardContent>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {props.allTasks.filter(tt => !props.dayTasks.tasks.includes(tt.id)).map(tt => (
          <MenuItem key={tt.id} onClick={handleAdd(tt.id)}>{taskDescription(tt)}</MenuItem>
        ))}
      </Menu>
    </Card>
  );
}

export default DayCard;
