'use client'
import React from 'react';
import '@google/model-viewer';


const ModelViewer = () => {
  return (
    <model-viewer camera-controls auto-rotate alt='a plant'
    src='/models/source/Plam_planter_low.glb' >
    </model-viewer>
  )
}

export default ModelViewer

