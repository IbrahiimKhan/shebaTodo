export type User = {
  name: string;
  email: string;
  uuid: string;
  token: string;
};

export type TaskProps = {
  id: number;
  title: string;
  description: string;
  expiryDate: Date;
  status: 'todo' | 'in progress' | 'done';
  img: string[];
};
