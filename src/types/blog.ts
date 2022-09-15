import { Time } from "./base";

export type Nav = {
  title: string;
  href: string | undefined;
}

export type Blog = {
  id: number;
  createdAt: Time;
  updatedAt: Time;
  publishedAt: Time;
  revisedAt: Time;
  title: string;
  content: string;
  category: Array<string>
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

