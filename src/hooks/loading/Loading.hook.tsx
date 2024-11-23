import React from 'react';

const LoadingState = (value: boolean): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [loading, setLoading] = React.useState<boolean>(value);

  return [loading, setLoading];
};

export default LoadingState;