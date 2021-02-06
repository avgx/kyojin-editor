// Тут будут описания сущностей в нашей модели данных

import { Task } from "./tasks";
import { IdString, UrlString } from "./types";

export enum KyojinTypeVersion {
  v1 = 'v1'
}

export type DayTasks = {
  tasks: IdString[];
};

export type Kyojin = {
  v: KyojinTypeVersion;
  id: IdString;
  revision: string;
  name: string;
  thumbnail: UrlString;
  image: UrlString;
  tasks: Task[];
  days: DayTasks[];
};