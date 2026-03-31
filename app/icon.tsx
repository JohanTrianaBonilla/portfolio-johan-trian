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
          background: 'linear-gradient(135deg, #f59e0b 0%, #facc15 100%)',
          color: '#0f172a',
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: '-0.08em',
          borderRadius: 8,
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
