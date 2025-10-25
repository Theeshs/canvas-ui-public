import api from '@/lib/api';
import { Email } from '@/types/email';

interface EmailResponse {
  message: string;
}

export const sendEmailMessage = async (
  payload: Email
): Promise<EmailResponse | null> => {
  try {
    debugger;
    const response = await api.post<EmailResponse>('/email', payload);
    debugger;
    return response.data;
  } catch (e) {
    return null;
  }
};
