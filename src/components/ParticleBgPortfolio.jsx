import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleBg = ({ className }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#030c13",
        },
      },
      fpsLimit: 120,
      fullScreen: {
        enable: false,
      },
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          grab: {
            distance: 100,
            opacity: 0.7,
          },
        },
      },
      particles: {
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 80,
          enable: true,
          opacity: 0.26,
          width: 0.7,
        },
        number: {
          value: 600,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 6,
            size_min: 0.2,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        className={className}
        id="particles-portfolio"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticleBg;
