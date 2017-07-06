import React from 'react';

const Example = ({children}) => {
  return (
    <div>
      <span>Example</span>
      {children}
    </div>
  );
};

Example.propTypes = {
};

export default Example;
