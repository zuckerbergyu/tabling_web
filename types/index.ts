declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    desktop: true;
  }
}

export interface Reservation {
  id: string;
  status: string;
  timeReserved: string;
  timeRegistered: string;
  customer: Customer;
  tables: Table[];
  menus: Menu[];
}
export interface Customer {
  id: String;
  name: String;
  level: String;
  timeVisitedLast: String;
  adult: number;
  child: number;
  memo: string;
  request: string;
}
export interface Table {
  id: number;
  floor: number;
  name: String;
  min: number;
  max: number;
}
export interface Menu {
  id: string;
  name: string;
  qty: number;
}
