import { politicsArticles } from './politics';
import { businessArticles } from './business';
import { miniNews } from './mininewscomments';
import { InkThoughtsArticles } from './inkthoughts';
import { PublicIssuesArticles } from './publicissues';
import { InkSpecialArticles } from './inkspecial';
import { InkHealthArticles } from './health';

export const getAllArticles = () => {
  // Combine all articles and sort them by ID (or you can sort by date)
  return [...InkThoughtsArticles, ...InkHealthArticles, ...PublicIssuesArticles, ...InkSpecialArticles, ...politicsArticles, ...businessArticles ].sort((a, b) => a.id - b.id);
};

export const getArticleById = (id: number) => {
  return getAllArticles().find(article => article.id === id);
};

export const getAllNews = () => {
  return miniNews;
};