export type UserRole = 'driver' | 'store' | 'dispatch';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  storeId?: string; // Only for store users
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}