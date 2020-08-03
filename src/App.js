import React, { Suspense } from 'react';

export default function App() {
  return (
    <Suspense fallback="">
      <p style={{fontFamily:'Super Grotesk Pro Bold'}}>hello, world!</p>
    </Suspense>
  );
}
