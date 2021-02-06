// Тут будут описания базовых типов в нашей модели данных

export type UrlString = string;
export type IdString = string;
export type TaskType = "audio" | "text" | "quicktest" | "test" | "image";
export type AudioType = "meditation" | "breathe" | "sleep" | "background";
export type TextType = "article" | "tale";
export type TextContentType = "text" | "md" | "url";
export type TextContent = {
  type: TextContentType;
  data: string | UrlString;
}

export function tr_TaskType(tt: TaskType) {
  switch (tt) {
    case "audio":
      return "Аудио";
    case "text":
      return "Статья / История";
    case "quicktest":
      return "Быстрый тест";
    case "test":
      return "Тест";
    case "image":
      return "Картинка";
  }
}


