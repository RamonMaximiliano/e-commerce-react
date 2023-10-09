import { createContext, ReactNode } from 'react';
import { prod } from '../../App';

interface MyContextProps {
  value: string;
}

const MyContext = createContext<MyContextProps | prod[] | any>([]);

export const MyProvider: React.FC<{ value: string; children: ReactNode }> = ({
  value,
  children,
}) => {
  return <MyContext.Provider value={{ value }}>{children}</MyContext.Provider>;
};

export default MyContext;