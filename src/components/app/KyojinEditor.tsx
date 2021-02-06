import React from 'react';
import { Kyojin, KyojinTypeVersion } from '../kyojin/model';
import { v4 as uuidv4 } from "uuid";
import moment from 'moment';
import FileSaver from "file-saver";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IdString, TaskType, UrlString } from '../kyojin/types';
import { AppBar, Box, Grid, IconButton, Paper, TextField, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { title } from 'process';
import GetAppIcon from "@material-ui/icons/GetApp";
import TaskAdd from './TaskAdd';
import Raw from './Raw';
import AudioTaskEditor from './taskeditor/AudioTaskEditor';
import TextTaskEditor from './taskeditor/TextTaskEditor';
import ImageTaskEditor from './taskeditor/ImageTaskEditor';
import TestTaskEditor from './taskeditor/TestTaskEditor';
import QuickTestTaskEditor from './taskeditor/QuickTestTaskEditor';
import { Task } from '../kyojin/tasks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   '& .MuiTextField-root': {
    //     margin: theme.spacing(1),
    //     width: '25ch',
    //   },
    // },
    root: {
      flexGrow: 1,
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

type Props = {
  editId?: string | undefined;
  kyojins: Kyojin[];
  onChange: (value: Kyojin) => void;
};

function KyojinEditor(props: Props) {
  const classes = useStyles();
  const now = new Date();
  const rev = moment(now).format("YYYYMMDDTHHmmss");

  const editKyojin = !!props.editId ? props.kyojins.find(w => w.id === props.editId) : undefined;

  const [id, setId] = React.useState<string>(editKyojin?.id ?? uuidv4());
  const [revision, setRevision] = React.useState<string>(editKyojin?.revision ?? rev);
  const [name, setName] = React.useState<string | undefined>(editKyojin?.name);
  const [image, setImage] = React.useState<UrlString | undefined>(editKyojin?.image);
  const [tasks, setTasks] = React.useState<Task[]>(editKyojin?.tasks ?? []);

  //const [description, setDescription] = React.useState<string | undefined>(props.value?.description ?? undefined);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setRevision(moment(new Date()).format("YYYYMMDDTHHmmss"));
  };
  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
    setRevision(moment(new Date()).format("YYYYMMDDTHHmmss"));
  };
  const handleAddTask = (tasktype: TaskType) => {
    let task: Task = {
      id: uuidv4(),
      tasktype: tasktype,
    };
    setTasks(tasks.concat([task]));
    setRevision(moment(new Date()).format("YYYYMMDDTHHmmss"));
  };
  const handleDeleteTask = (id: IdString) => {
    setTasks(tasks.filter(t => t.id !== id));
    setRevision(moment(new Date()).format("YYYYMMDDTHHmmss"));
  };

  const handleEditTask = (task: Task) => {
    setTasks(tasks.map(t => t.id !== task.id ? t : task));
    setRevision(moment(new Date()).format("YYYYMMDDTHHmmss"));
  };

  const handleClickDownload = () => {
    if (!name) {
      console.log("no name");
      return;
    }
    if (!image) {
      console.log("no image");
      return;
    }
    if (!tasks || tasks.length === 0) {
      console.log("no tasks");
      return;
    }
    const kyojin: Kyojin = {
      v: KyojinTypeVersion.v1,
      id: id,
      revision: rev,
      name: name!,
      image: image!,
      tasks: tasks
    };
    const kyojinString = JSON.stringify(kyojin, undefined, 2);

    let kyojinBlob = new Blob([kyojinString], {
      type: "application/json;charset=utf-8",
    });
    FileSaver.saveAs(kyojinBlob, kyojin.name + "." + kyojin.revision + ".json");
  };

  const handleRaw = (raw: string) => {
    const x: Kyojin = JSON.parse(raw);
    if (!x) {
      //TODO: показать всплывайку
      return;
    }
    
    setId(x.id);
    setRevision(x.revision);
    setName(x.name);
    setImage(x.image);    
    setTasks(x.tasks);    
  };

  const now1 = new Date();
  const rev1 = moment(now1).format("YYYYMMDDTHHmmss");
  const kyojin1: Kyojin = {
    v: KyojinTypeVersion.v1,
    id: id,
    revision: rev,
    name: name ?? "",
    image: image ?? "",
    tasks: tasks
  };
  
  return (
    <div>
      <Box display="block" displayPrint="none">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" key="appTitle" className={classes.title}>
              Редактор великанов
            </Typography>
            <Raw
              isReadonly={false}
              raw={JSON.stringify(kyojin1, undefined, 2)}
              onChangeRaw={handleRaw}
            />
            <Tooltip title="Скачать">
              <IconButton
                edge="end"
                color="inherit"
                aria-label="Скачать"
                onClick={handleClickDownload}
              >
                <GetAppIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Typography>&nbsp;</Typography>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12} key="name">
            <TextField
              id="title-text"
              size="small"
              label="Имя"
              value={name ?? ""}
              onChange={handleChangeName}
              fullWidth
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} key="version">
            <TextField
              id="title-text"
              size="small"
              label="Версия"
              value={revision ?? ""}
              fullWidth
              variant="outlined"
              disabled
            />
          </Grid>
          <Grid item xs={12} key="image">
            <TextField
              id="title-text"
              size="small"
              label="Изображение (ссылка)"
              value={image ?? ""}
              onChange={handleChangeImage}
              fullWidth
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} key="taskadd">
            <TaskAdd
              onAddTask={handleAddTask}
            />
          </Grid>
          <Grid item xs={12} key="tasks">
            <Grid container spacing={2} alignItems="stretch">
              {tasks.map(t => {
                switch (t.tasktype) {
                  case "audio":
                    return (
                      <Grid item xs={12} sm={6} key={t.id}>
                        <AudioTaskEditor
                          id={t.id}
                          tasktype={t.tasktype}
                          task={t}
                          onEditTask={handleEditTask}
                          onDeleteTask={handleDeleteTask}
                        />
                      </Grid>

                    );
                  case "text":
                    return (
                      <Grid item xs={12} sm={6} key={t.id}>
                        <TextTaskEditor
                          id={t.id}
                          tasktype={t.tasktype}
                          task={t}
                          onEditTask={handleEditTask}
                          onDeleteTask={handleDeleteTask}
                        />
                      </Grid>
                    );
                  case "image":
                    return (
                      <Grid item xs={12} sm={6} key={t.id}>
                        <ImageTaskEditor
                          id={t.id}
                          tasktype={t.tasktype}
                          task={t}
                          onEditTask={handleEditTask}
                          onDeleteTask={handleDeleteTask}
                        />
                      </Grid>
                    );
                  case "quicktest":
                    return (
                      <Grid item xs={12} sm={6} key={t.id}>
                        <QuickTestTaskEditor
                          id={t.id}
                          tasktype={t.tasktype}
                          task={t}
                          onDeleteTask={handleDeleteTask}
                        />
                      </Grid>
                    );
                  case "test":
                    return (
                      <Grid item xs={12} sm={6} key={t.id}>
                        <TestTaskEditor
                          id={t.id}
                          tasktype={t.tasktype}
                          task={t}
                          onDeleteTask={handleDeleteTask}
                        />
                      </Grid>
                    );
                  default:
                    return (
                      <Typography>{t.id} - {t.tasktype}</Typography>
                    );
                }
              })}
            </Grid>

          </Grid>
        </Grid>

      </Box>

    </div>
  );
}

export default KyojinEditor;