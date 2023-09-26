import { type Generated } from "kysely";

interface Session {
  id: Generated<number>;
  /**
   * JSON string
   */
  body: string;
}

interface Customer {
  CustomerId: number;
  CompanyName: string;
  ContactName: string;
}

export interface Database {
  session: Session;
  Customers: Customer;
}
