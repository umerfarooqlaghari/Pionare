// app/types/aframe.d.ts
import 'aframe';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': any;
      'a-assets': any;
      'a-sky': any;
      'a-entity': any;
      'a-text': any;
      'a-camera': any;
      'a-cursor': any;
    }
  }
}
