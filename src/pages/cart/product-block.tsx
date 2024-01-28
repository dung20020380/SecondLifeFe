import { Checkbox } from '@mui/material';
import React from 'react';
import { Product } from './product';

export const ProductBlock = () => {
  return (
    <div
      style={{
        padding: 10,
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 30,
        minWidth: 0,
        borderRadius: 5,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Checkbox />
        <div>{'Đồ dùng cá nhân (1 sản phẩm)'}</div>
      </div>
      <div style={{ marginTop: 20, borderTop: '1px solid gray' }}>
        {[0, 1].map((item, index) => (
          <Product />
        ))}
      </div>
    </div>
  );
};
