'use client'
import React from 'react';
import '@google/model-viewer';

const model_1 = '/models/source/GOTChicago_Ped_Bridge060.glb'
const model_2 = '/models/source/GLB_43rdBridge.glb'

const ModelViewer = () => {
  return (
    <div className='bg-transparent'>
      <model-viewer camera-controls auto-rotate alt='bridge model'
      src={model_2} loading='lazy'
      >
      </model-viewer>
    </div>
  )
}

export default ModelViewer

