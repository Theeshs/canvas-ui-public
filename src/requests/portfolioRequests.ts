import api from '@/lib/api';
import { UserProfile } from '@/types/portfolio';

export const fetchPortfolio = async (): Promise<UserProfile | null> => {
  try {
    const response = await api.get<{ message: string; user: UserProfile }>(
      '/portfolio'
    );
    return response.data.user;
  } catch (e) {
    return null;
  }
};
