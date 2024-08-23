'use client'
import React from 'react';
import '@google/model-viewer';


const ModelViewer = () => {
  return (
    <div className='bg-transparent'>
      <model-viewer camera-controls auto-rotate alt='a plant'
      src='/models/source/Plam_planter_low.glb' loading='lazy'
      className='absolute'>
      </model-viewer>
    </div>
  )
}

export default ModelViewer

