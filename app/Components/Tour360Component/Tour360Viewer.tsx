'use client';
import { useEffect } from 'react';

export default function Tour360Viewer() {
  useEffect(() => {
    if (!window.AFRAME) {
      require('aframe');
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <a-scene embedded vr-mode-ui="enabled: false">
        <a-assets>
          <img id="room" src="/office-3d-image.jpg" alt="360 Office" />
        </a-assets>

        <a-sky src="#room" rotation="0 -130 0"></a-sky>

        {/* Hotspot 1: Meeting Table */}
        <a-entity
  geometry="primitive: sphere; radius: 0.1"  // Smaller size
  position="2 0.3 -2"
  material="color: grey; opacity: 0.6"  // Grey color with a bit of transparency
  event-set__enter="_event: mouseenter; scale: 1.2 1.2 1.2"
  event-set__leave="_event: mouseleave; scale: 1 1 1"
  cursor-listener
  doubleclick-listener
>
  <a-text value="Meeting Table" align="center" color="white" position="0 0.5 0" scale="1.5 1.5 1.5"></a-text>
</a-entity>

<a-entity
  geometry="primitive: sphere; radius: 0.1"
  position="-3 0.5 -3"
  material="color: grey; opacity: 0.6"
  event-set__enter="_event: mouseenter; scale: 1.2 1.2 1.2"
  event-set__leave="_event: mouseleave; scale: 1 1 1"
  cursor-listener
  doubleclick-listener
>
  <a-text value="Heating System" align="center" color="white" position="0 0.5 0" scale="1.5 1.5 1.5"></a-text>
</a-entity>

<a-entity
  geometry="primitive: sphere; radius: 0.1"
  position="-2 4 -3"
  material="color: grey; opacity: 0.6"
  event-set__enter="_event: mouseenter; scale: 1.2 1.2 1.2"
  event-set__leave="_event: mouseleave; scale: 1 1 1"
  cursor-listener
  doubleclick-listener
>
  <a-text value="Lights" align="center" color="white" position="0 0.5 0" scale="1.5 1.5 1.5"></a-text>
</a-entity>


        <a-camera position="0 1.6 0">
          <a-cursor
            fuse="true"
            fuse-timeout="1000"
            material="color: white; shader: flat"
          ></a-cursor>
        </a-camera>
      </a-scene>
    </div>
  );
}
