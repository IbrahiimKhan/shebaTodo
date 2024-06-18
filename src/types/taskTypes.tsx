export type TaskProps = {
  id: number;
  title: string;
  description: string;
  expiryDate: Date;
  status: 'Todo' | 'In Progress' | 'Completed';
  img: string[];
};
