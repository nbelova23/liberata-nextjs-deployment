
import React from 'react';

export function ServerSidePage({ data }: { data: any }) {
  return (
    <div>
      <h1>Server-Side Rendered Data</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

export function StaticPage({ data }: { data: any }) {
  return (
    <div>
      <h1>Statically Generated Data</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}
