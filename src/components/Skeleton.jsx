import React from 'react';
import { Skeleton as AntSkeleton } from 'antd';

const Skeleton = (props) => {
  return (
    <AntSkeleton {...props} />
  );
};

export default Skeleton;
