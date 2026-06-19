export interface Article {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  isTopStory: boolean;
}

export interface Thought {
  id: number;
  text: string;
  date: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  areaName: string;
  purpose: string;
  message: string;
}