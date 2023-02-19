export interface StudentFeeMap {
  feeID: number;
  studentID: number; //Admission NUmber
  totalAmount: number;
  paidAmount: number;
  dueDate: string;
  month?: string;
  year?: number;
  transactionID?: string;
  ctratedTS?: string;
  createdBy?: string;
  updatedTS?: string;
  updatedBy?: string;
}
