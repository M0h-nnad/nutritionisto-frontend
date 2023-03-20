import { Nutritionist } from './nutritionist.interface';
import { User } from './user.interface';
export interface DietPlanRequest {
  id: number;
  status: string;
  requestedAt: Date;
  updatedAt: Date;
  completedAt: Date | null;
  user: User;
  assignedNutritionist: Nutritionist;
}
