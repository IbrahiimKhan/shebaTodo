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
  status: 'Todo' | 'In Progress' | 'Completed';
  img: string[];
};
