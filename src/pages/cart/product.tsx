import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
export const Product = () => {
  return (
    <div
      style={{
        marginBottom: 20,
        display: 'flex',
        gap: 20,
        marginTop: 20,
      }}
    >
      <Checkbox />
      <img
        style={{
          width: 150,
          borderRadius: 5,
        }}
        src='https://th.bing.com/th/id/R.f05b78b515347b926cd5fe0b459b149b?rik=BXxxt9z5QWCHtw&riu=http%3a%2f%2fwww.dongholuxury.vn%2fwp-content%2fuploads%2f2021%2f01%2fdong-ho-rolex-datejust-126233-cu-mat-tia-xanh-la-nam-kim-cuong-2.jpg&ehk=tqISW4OKJQbLjfm9tyKM9Z86sMifF7M3CKIaAYTt2eA%3d&risl=&pid=ImgRaw&r=0'
      />
      <div style={{ gap: 20, alignItems: 'center', flex: 1, minWidth: 0 }}>
        <div style={{ marginBottom: 10 }}>Đồng hồ anne klein rose gold</div>
        <div style={{ marginBottom: 10 }}>Tình trạng: Tốt</div>
        <div style={{ marginBottom: 10 }}>
          Thương hiệu: Anne Klein, Màu sắc: Khác
        </div>
        <div
          style={{
            display: 'flex',
            gap: 20,
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          Đồ cũ cá nhân
          <div>
            <PlaceIcon />
            Hà Nội
          </div>
        </div>
        <div style={{ marginBottom: 10, fontSize: 30 }}>119.000VND</div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconButton
          size={'large'}
          aria-label='show 17 new notifications'
          color='inherit'
          style={{
            margin: 'auto',
            alignSelf: 'center',
          }}
        >
          <DeleteOutlinedIcon fontSize={'large'} />
        </IconButton>
      </div>
    </div>
  );
};
