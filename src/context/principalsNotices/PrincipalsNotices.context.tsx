import React from "react";
import LoadingState from "src/hooks/loading/Loading.hook";
import { findPrincipalsPosts } from "src/shared/api";
import PrincipalsNoticesModel from "src/shared/models/PrincipalsNotices.model";

interface PrincipalsNoticesContextType {
  principalsNotices: PrincipalsNoticesModel | undefined;
  loading: any;
}

export const PrincipalsNoticesContext = React.createContext<
  PrincipalsNoticesContextType | undefined
>(undefined);

export const PrincipalsNoticesStorage = ({ children }: any) => {
  const [principalsNotices, setPrincipalsNotices] =
    React.useState<PrincipalsNoticesModel>();
  const [loading, setLoading] = LoadingState(true);

  const fetchPrincipalsNotices = React.useCallback(async () => {
    const data: any = await findPrincipalsPosts();
    setPrincipalsNotices(data);
    localStorage.setItem("principalsNotices", JSON.stringify(data));
    setLoading(false);
  }, []);

  React.useEffect(() => {
    const valueOfLocalStorage = localStorage.getItem("principalsNotices");
    if (valueOfLocalStorage) {
      setPrincipalsNotices(JSON.parse(valueOfLocalStorage));
      setLoading(false);
      return;
    }

    fetchPrincipalsNotices();
  }, []);

  return (
    <PrincipalsNoticesContext.Provider value={{ principalsNotices, loading }}>
      {children}
    </PrincipalsNoticesContext.Provider>
  );
};
