'use client'
import React from 'react';
import '@google/model-viewer';

const model_1 = '/models/source/GOTChicago_Ped_Bridge060.glb'
const model_2 = '/models/source/GLB_43rdBridge.glb'

const ModelViewer = () => {
  return (
    <div className='bg-transparent'>
      <model-viewer 
      camera-orbit="40deg 40deg 15m" camera-controls auto-rotate interactionPrompt='auto'
      src={model_2} alt='bridge model' loading='lazy'
      >
        <div id="annotation">43rd Street Bridge - Chicago, IL</div>
      </model-viewer>
    </div>
  )
}

export default ModelViewer

