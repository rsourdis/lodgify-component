export type GroupsResponse = Group[];

export interface Group {
  name: string;
  tasks: Task[];
}

export interface Task {
  description: string;
  value: number;
  checked: boolean;
}
