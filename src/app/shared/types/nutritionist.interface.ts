import { DietPlanRequest } from './diet-plan-request-interface';

export interface Nutritionist {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
  dietPlanRequests: DietPlanRequest[];
}
