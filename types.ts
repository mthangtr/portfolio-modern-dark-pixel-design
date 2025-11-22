import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  readTime: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}