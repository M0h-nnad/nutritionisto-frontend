import { Meal } from './meal.interface';
import { User } from './user.interface';

export interface DietPlan {
  id: number;
  name: string;
  description?: string;
  calories: number;
  startDate: Date;
  endDate: Date;
  users: User[];
  meals: Meal[];
}
