//Задания

import { IdString, TaskType, AudioType, UrlString, TextType, TextContent, tr_TaskType } from "./types";

//задание / базовый тип
export type Task = {
  id: IdString;
  tasktype: TaskType;
  //title?: string;
};

//аудиомедитация
export type AudioTask = {
  id: IdString;
  tasktype: TaskType; // audio
  type: AudioType;
  audio: UrlString;

  //содержимое можно достать из самого аудио файла
  title?: string;
  brief?: string;
  image?: UrlString;
  duration_in_sec?: number;
};

//статья (большая)
//история
export type TextTask = {
  id: IdString;
  tasktype: TaskType; // tale - история | article - статья длинная
  type: TextType;

  title: string;
  brief: string;
  detail: TextContent[];  //тест в формате MD перемежается со ссылками на картинки

  image: UrlString;
  duration_in_min: number;
};

//быстрый тест на один вопрос
export type QuickTestTask = {
  id: IdString;
  tasktype: TaskType; //quicktest
  
  title: string;
  brief: string;
  question: Question;

  image: UrlString;
  duration_in_min: number;
};

//тест
export type TestTask = {
  id: IdString
  tasktype: TaskType; //test
  title: string
  brief: string
  duration_in_min: number

  questions: Question[];         //вопросы
}

//вопрос теста
export type Question = {
  question: string;        //вопрос
  answers: string[];       //варианты ответов
  mode: AnswerMode
}

//режим отображения вариантов ответа
export type AnswerMode = "segments" | "radio" | "tags";

//просмотр картинки
export type ImageTask = {
  id: IdString
  tasktype: TaskType; //image
  title?: string
  brief?: string

  image: UrlString;
}

export function taskDescription(task: Task) {
  switch (task.tasktype) {
    case "audio": {
      const t = task as AudioTask;
      return `${tr_TaskType(task.tasktype)} ${t.title ?? t.id} (${t.type})`;
    }
    case "image": {
      const t = task as ImageTask;
      return `${tr_TaskType(task.tasktype)} ${t.title ?? t.id}`;
    }
    case "quicktest": {
      const t = task as QuickTestTask;
      return `${tr_TaskType(task.tasktype)} ${t.title ?? t.id}`;
    }
    case "test": {
      const t = task as TestTask;
      return `${tr_TaskType(task.tasktype)} ${t.title ?? t.id}`;
    }
    case "text": {
      const t = task as TextTask;
      return `${tr_TaskType(task.tasktype)} ${t.title ?? t.id} (${t.type})`;
    }
  }
}