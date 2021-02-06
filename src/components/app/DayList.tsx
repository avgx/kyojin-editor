import React from 'react';
import { Paper, Grid, TextField } from "@material-ui/core";
import { Task } from "../kyojin/tasks";
import DayCard from './DayCard';
import { IdString } from "../kyojin/types";
import { DayTasks } from "../kyojin/model";

type Props = {
  daysCount: number;
  daysArray: DayTasks[];
  allTasks: Task[];

  onDaysCount: (count: number) => void;
  onAddDayTask: (dayNumber: number, taskId: IdString) => void;
  onRemoveDayTask: (dayNumber: number, taskId: IdString) => void;
};

function DayList(props: Props) {

  const handleDaysCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onDaysCount(Number(event.target.value));
  };

  return (
    <Paper
      variant="elevation"
      elevation={0}
    >
      <TextField
        id="standard-number"
        label="Количество дней в курсе"
        helperText="1 .. 90"
        type="number"
        // defaultValue={1}
        value={props.daysCount}
        onChange={handleDaysCount}
        inputProps={{
          min: 1,
          max: 90
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Grid container spacing={2} alignItems="stretch">
        {props.daysArray.map((d, index) => (
          <Grid item xs={12} sm={4} key={`day${index}`}>            
            <DayCard 
              dayNumber={index}
              dayTasks={d}
              allTasks={props.allTasks}
              onAddTask={props.onAddDayTask}
              onRemoveTask={props.onRemoveDayTask}
            />
          </Grid>
        ))}        
      </Grid>

    </Paper>
  );
}

export default DayList;
