import axiosInstance from './axiosInstance';

export interface BlogPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const blogService = {
  // Tüm blog postlarını getir
  getAllPosts: async (): Promise<BlogPost[]> => {
    const response = await axiosInstance.get('/posts');
    return response.data;
  },
}; 