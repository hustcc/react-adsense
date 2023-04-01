import { ReactNode } from 'react';
import { AdSenseContext, AdSenseContextValue } from './AdSenseContext';

export interface AdSenseProviderProps extends AdSenseContextValue {
  children?: ReactNode;
}

export function AdSenseProvider({ client, children }: AdSenseProviderProps) {
  return (
    <AdSenseContext.Provider value={{ client }}>
      {children}
    </AdSenseContext.Provider>
  );
}
