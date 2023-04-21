import React from 'react';

type Props = {
  message: string,
};

export const NoResult: React.FC<Props> = ({ message }) => {
  return (
    <div className="noResult">
      <h1>{message}</h1>
    </div>
  );
};
