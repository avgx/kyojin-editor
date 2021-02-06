//Задания

import { IdString, TaskType, AudioType, UrlString, TextType, TextContent } from "./types";

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
  type: TextType;

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