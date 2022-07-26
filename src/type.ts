export interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
  dayCreated: number;
  dueDate: number;
}
export type AddTodo = (newTodo: ITodo) => void;
export type RemoveTodo = (id: number) => void;
export type ToggleTodo = (id: number) => void;
export type UpdateTodo = (id: number, value: string) => void;
