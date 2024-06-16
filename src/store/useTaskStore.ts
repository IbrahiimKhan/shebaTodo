import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {zustandStorage} from '@/storage/storage';
import {TaskProps} from '@/types/storeTypes';

interface TaskStore {
  tasks: TaskProps[];
  createTask: (task: TaskProps) => void;
  updateTask: (id: number, updatedTask: Partial<TaskProps>) => void;
  deleteTask: (id: number) => void;
  deleteAllTasks: () => void;
  getTask: (id: number) => TaskProps | undefined;
  getAllTasks: () => TaskProps[];
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      createTask: (task: TaskProps) => {
        set(state => ({tasks: [...state.tasks, task]}));
      },
      updateTask: (id: number, updatedTask: Partial<TaskProps>) => {
        set(state => ({
          tasks: state.tasks.map(task =>
            task.id === id ? {...task, ...updatedTask} : task,
          ),
        }));
      },
      deleteTask: (id: number) => {
        set(state => ({
          tasks: state.tasks.filter(task => task.id !== id),
        }));
      },
      deleteAllTasks: () => {
        set({tasks: []});
      },
      getTask: (id: number) => {
        return get().tasks.find(task => task.id === id);
      },
      getAllTasks: () => {
        return get().tasks;
      },
    }),
    {
      name: 'task-store',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export default useTaskStore;
