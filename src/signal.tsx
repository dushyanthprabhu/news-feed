import { signal } from "@preact/signals-react";
import Article from "./inerface";

const articles = signal<Article[]>();
const searchArticles = signal<Article[]>();

export { articles, searchArticles };
