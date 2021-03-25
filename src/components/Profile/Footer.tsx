import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const GLITTER_AREA_WIDTH = 500;
const GLITTER_AREA_HEIGHT = 500;

const NUM_PARTICLES = 99;

const PARTICLE_COLOURS = ['#ffca57', '#68b0f1', '#5fc383', '#ea86ae'];

function confettiExplosion(originX: number, originY: number) {
  // Determine the dimensions, ensuring it doesn't exceed screen bounds.
  const width = Math.min(GLITTER_AREA_WIDTH, window.screen.width - 1);
  const bottom = window.scrollY + window.innerHeight;
  const height = Math.min(GLITTER_AREA_HEIGHT, (bottom - originY) * 2);

  const c = document.createElement('canvas');
  c.style.position = 'absolute';
  c.style.left = `${originX - width / 2.0}px`;
  c.style.top = `${originY - height / 2.0}px`;
  c.style.pointerEvents = 'none';
  c.style.width = `${width}px`;
  c.style.height = `${height}px`;
  c.style.zIndex = '-1';

  // The actual canvas draw area is multiplied by the device pixel ratio.
  const ratio = window.devicePixelRatio;
  c.width = width * ratio;
  c.height = height * ratio;

  // Add it to the document.
  document.body.appendChild(c);

  // Render a frame of the particles.
  function renderGlitterParticles(particles: any, canvas: any) {
    if (document.body.contains(canvas)) {
      requestAnimationFrame(() => renderGlitterParticles(particles, canvas));
    }

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p: any) => {
      p.x += p.speed * Math.cos((p.rotation * Math.PI) / 180);
      p.y += p.speed * Math.sin((p.rotation * Math.PI) / 180);

      p.opacity -= 0.005;
      p.speed *= p.friction;
      p.radius -= p.fade;
      p.yVel += p.gravity;
      p.y += p.yVel;

      if (p.opacity < 0 || p.radius < 0) return;

      ctx.beginPath();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
      ctx.fill();
    });

    return ctx;
  }

  function rand(a: number, b: number, c?: number) {
    return parseFloat(
      (Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0)
    );
  }

  const particles = [];
  for (let i = 0; i < NUM_PARTICLES; i++) {
    particles.push({
      x: c.width / 2.0,
      y: c.height / 2.0 + (Math.random() * 30 + 15),
      radius: rand(5, 15),
      color: PARTICLE_COLOURS[Math.floor(Math.random() * PARTICLE_COLOURS.length)],
      rotation: rand(0, 360, 1),
      speed: rand(2, 8),
      friction: 0.99,
      fade: 0.3,
      opacity: rand(150, 150, 1),
      yVel: 0,
      gravity: 0, //0.06
    });
  }

  renderGlitterParticles(particles, c);
  setTimeout(() => document.body.removeChild(c), 5000);
}

const Footer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "openxr_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const onClick = () => {
    if (!ref.current) {
      return;
    }

    confettiExplosion(ref.current.offsetLeft + ref.current.offsetWidth / 2, ref.current.offsetTop);
  };

  return (
    <div className="high-five" ref={ref} onClick={onClick}>
      <span>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </span>
      <br />✋
      <p>
        Thanks for reading. <br /> High five!
      </p>
    </div>
  );
};

export default Footer;
