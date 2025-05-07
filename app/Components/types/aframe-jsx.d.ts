// types/aframe-jsx.d.ts
import 'aframe';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': any;
      'a-assets': any;
      'a-asset-item': any;
      'a-sky': any;
      'a-camera': any;
      'a-entity': any;
      'a-light': any;
      'a-box': any;
      'a-sphere': any;
      'a-cylinder': any;
      'a-plane': any;
    }
  }
}

declare global {
  interface Window {
    AFRAME?: any;
  }

  namespace JSX {
    interface IntrinsicElements {
      'a-scene': any;
      'a-assets': any;
      'a-asset-item': any;
      'a-sky': any;
      'a-camera': any;
      'a-entity': any;
      'a-light': any;
      'a-box': any;
      'a-sphere': any;
      'a-cylinder': any;
      'a-plane': any;
    }
  }
}
