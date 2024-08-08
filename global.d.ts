declare namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        autoRotate?: boolean;
        cameraControls?: boolean;
        ar?: boolean;
        arScale?: string;
        arPlacement?: string;
        iosSrc?: string;
        poster?: string;
        shadowIntensity?: number;
        exposure?: number;
        environmentImage?: string;
        skyboxImage?: string;
        autoRotateDelay?: number;
        interactionPromptThreshold?: number;
        interactionPromptStyle?: string;
        interactionPrompt?: string;
        reveal?: string;
        loading?: string;
        disableZoom?: boolean;
        enablePan?: boolean;
        orbitSensitivity?: number;
        touchAction?: string;
      };
    }
  }
  