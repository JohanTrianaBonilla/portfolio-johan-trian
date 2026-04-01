import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #023459 0%, #1e646e 100%)',
          color: '#f3f7fa',
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: '-0.08em',
          borderRadius: 8,
          boxShadow: 'inset 0 1px 0 rgba(243, 247, 250, 0.18)',
        }}
      >
        JT
      </div>
    ),
    {
      ...size,
    }
  );
}
