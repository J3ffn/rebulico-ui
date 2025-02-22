import React from "react";

export interface CreateNoticeContextType {
  notice: {
    title: string;
    tag: {
      _id: string;
      name: string;
      slug: string;
      description: string;
    };
    project: {
      _id: string;
      name: string;
    };
    collaborators: { name: string }[];
    bannerImage: string;
    author: string;
    content: string;
    published_at: Date;
  };
  setNoticeField: (
    field: keyof CreateNoticeContextType["notice"],
    value: string
  ) => void;
  onSubmit: () => void;
}

const defaultNotice = {
  title: "",
  tag: {
    _id: "",
    name: "",
    slug: "",
    description: "",
  },
  project: {
    _id: "",
    name: "",
  },
  collaborators: [{ name: "" }],
  bannerImage: "",
  author: "",
  content: "",
  published_at: new Date(),
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
    console.log(notice);
  }, [notice]);

  const setNoticeField = (field: keyof typeof defaultNotice, value: string) => {
    setNotice((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = React.useCallback(async () => {
    console.log("CLICOU");
    // await createPost(notice)
  }, []);

  return (
    <CreateNoticeContext.Provider value={{ notice, setNoticeField, onSubmit }}>
      {children}
    </CreateNoticeContext.Provider>
  );
};
