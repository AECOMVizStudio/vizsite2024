'use client'
import React from 'react';
import '@google/model-viewer';


const ModelViewer = () => {
  return (
    <div className='bg-transparent z-30'>
      <model-viewer camera-controls auto-rotate alt='a plant'
      src='/models/source/Plam_planter_low.glb' loading='lazy'
      className='absolute z-40'>
      </model-viewer>
    </div>
  )
}

export default ModelViewer

