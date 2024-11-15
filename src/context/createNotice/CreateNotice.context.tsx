import React from "react";

interface CreateNoticeContextType {
  notice: {
    title: string;
    tag: string;
    readTime: string;
    author: string;
    content: string;
  };
  setNoticeField: (
    field: keyof CreateNoticeContextType["notice"],
    value: string
  ) => void;
}

const defaultNotice = {
  title: "",
  tag: "",
  readTime: "",
  author: "",
  content: "",
};

export const CreateNoticeContext = React.createContext<
  CreateNoticeContextType | undefined
>(undefined);

export const CreateNoticeStorage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notice, setNotice] = React.useState(defaultNotice);

  React.useEffect(() => {
    console.log(notice)
  }, [notice])

  const setNoticeField = (field: keyof typeof defaultNotice, value: string) => {
    setNotice((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <CreateNoticeContext.Provider value={{ notice, setNoticeField }}>
      {children}
    </CreateNoticeContext.Provider>
  );
};
