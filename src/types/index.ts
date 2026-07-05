export interface Article {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  categoryName: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  isTopStory: boolean;
  isLatestStory: boolean;
}

export interface Thought {
  id: number;
  title: string;
  text: string;
  date: string;
  imageUrl: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  areaName: string;
  purpose: string;
  message: string;
}