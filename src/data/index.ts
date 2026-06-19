import { politicsArticles } from './politics';
import { businessArticles } from './business';
import { quickThoughts } from './thoughts';

export const getAllArticles = () => {
  // Combine all articles and sort them by ID (or you can sort by date)
  return [...politicsArticles, ...businessArticles].sort((a, b) => a.id - b.id);
};

export const getArticleById = (id: number) => {
  return getAllArticles().find(article => article.id === id);
};

export const getAllThoughts = () => {
  return quickThoughts;
};