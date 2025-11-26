import React from "react";
import LoadingState from "src/hooks/loading/Loading.hook";
import { getPrincipalsPosts } from "src/shared/api";
import PrincipalsNoticesModel from "src/shared/models/PrincipalsNotices.model";
import { ToastContext } from "../toast/Toast.context";

interface PrincipalsNoticesContextType {
  principalsNotices: PrincipalsNoticesModel | undefined;
  loading: any;
}

export const PrincipalsNoticesContext = React.createContext<PrincipalsNoticesContextType | undefined>(undefined);

export const PrincipalsNoticesStorage = ({ children }: any) => {
  const { showToast } = React.useContext<any>(ToastContext);
  const [principalsNotices, setPrincipalsNotices] = React.useState<PrincipalsNoticesModel>();
  const [loading, setLoading] = LoadingState(true);

  React.useEffect(() => {
    const fetchPrincipalsNotices = async () => {
      try {
        setLoading(true);
        const data: any = await getPrincipalsPosts();

        setPrincipalsNotices(data);
        localStorage.setItem("principalsNotices", JSON.stringify(data));
      } catch (error) {
        console.log(error);
        showToast("Ocorreu um erro ao buscar as notícias.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchPrincipalsNotices();
  }, []);

  return (
    <PrincipalsNoticesContext.Provider value={{ principalsNotices, loading }}>
      {children}
    </PrincipalsNoticesContext.Provider>
  );
};
