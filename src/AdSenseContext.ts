import { createContext } from "react";

export interface AdSenseContextValue {
  /**
   * AdSense public client key, e.g. ca-pub-7099046271205844
   */
  client?: string;
}

export const AdSenseContext = createContext<AdSenseContextValue>({});
