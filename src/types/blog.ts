import { Time } from "./base";

export type Nav = {
  title: string;
  href?: string;
}

export type Blog = {
  id: number;
  createdAt: Time;
  updatedAt: Time;
  publishedAt: Time;
  revisedAt: Time;
  title: string;
  content: string;
  tag: Array<string>;
}

export type Category = {
  id: number;
  createdAt: Time;
  updatedAt: Time;
  publishedAt: Time;
  revisedAt: Time;
  name: string|undefined;
}

export type Eyecatch = {
  url: string;
  height: number;
  width: number;
}

export type totalCount = number;
export type offset = number;
export type limit = number;