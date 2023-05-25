import { Complaint } from './complaint';
export interface CustomerService {
  addComplaint: (complaint: Complaint) => void;
}
