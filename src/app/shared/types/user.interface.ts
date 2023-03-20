import { DietPlanRequest } from './diet-plan-request-interface';
import { DietPlan } from './diet-plan.interface';
import { Inbody } from './inbody.types';

export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  inbodies: Inbody[];
  dietPlanRequests: DietPlanRequest[];
  dietPlans: DietPlan[];
  createdAt: Date;
  updatedAt: Date;
  name: string;
}
