export interface Student {
  admNo: number;
  firstName: string;
  lastName?: string;
  fathersName?: string;
  mothersName?: string;
  address: string;
  contactPrimary: number;
  contactSecondary?: number;
  createdTs?: string;
  createdBy?: string;
  updatedBy?: string;
  updatedTs?: string;
  status: string; // Active/ inactive
}
