import React from 'react';

export default function StreamPlayer({ streamId }) {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      <div className="aspect-video bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-2">Live Stream</p>
          <p className="text-gray-400">Stream ID: {streamId}</p>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 bg-red-600 px-2 py-1 rounded text-xs font-medium">
        LIVE
      </div>
    </div>
  );
}