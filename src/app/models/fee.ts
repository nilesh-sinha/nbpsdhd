export interface Fee {
  feeId: number;
  feeNmae: string;
  description?: string;
  amount: number;
  frequency: string; // MONTHLY/ QUARTERLY/ HALF_YEARLY/ YEARLY
  ctratedBy?: string;
  createdTS?: string;
}
