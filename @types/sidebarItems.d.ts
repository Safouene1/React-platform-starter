import { ReactNode } from 'react';

type MenuItem = {
  key: string;
  label: string;
  icon: ReactNode;
  to?: string;
  children?: SubMenuItem[];
};

type SubMenuItem = {
  key: string;
  label: string;
  icon: ReactNode;
  to?: string;
};

type SidebarItemsType = MenuItem[];

export default SidebarItemsType;
