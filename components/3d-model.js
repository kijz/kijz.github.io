import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { loadGLTFModel } from "../lib/model";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Model = () => {
  const refContainer = useRef();
  const refMounted = useRef(false);
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [target] = useState(new THREE.Vector3(0, 0.4, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI),
    ),
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    const { current: isMounted } = refMounted;

    if (container && !renderer && !isMounted) {
      refMounted.current = true;
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      // 640 -> 240
      // 8 -> 6
      const scale = scH * 0.00005 + 1;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xffffff, 2);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      controls.minZoom = 0.5;
      controls.maxZoom = 2;
      controls.minPolarAngle = 0.25;
      controls.maxPolarAngle = 1.5;
      setControls(controls);

      loadGLTFModel(scene, "/model/mt_inari_statue.glb", {
        receiveShadows: false,
        castShadow: false,
      }).then(() => {
        setLoading(false);
        animate();
      });

      let req = null;
      let frame = 0;

      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 150 ? frame + 1 : frame;

        if (frame <= 150) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 170) * Math.PI * 10;

          camera.position.y = p.y;
          camera.position.x = p.x * Math.cos(rotSpeed) +
            p.z * Math.sin(rotSpeed);
          camera.position.z = p.z * Math.cos(rotSpeed) -
            p.x * Math.sin(rotSpeed);

          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [renderer, handleWindowResize]);

  return (
    <Box
      ref={refContainer}
      className="voxel-model"
      mx="auto"
      mt={["-40px", "-140px", "-200px"]}
      mb={["-40px", "-140px", "-200px"]}
      w={[220, 480, 640]}
      h={[220, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size) / 2)"
        />
      )}
    </Box>
  );
};

export default Model;
