'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { ColourfulText } from '@/components/ui/shadcn-io/colourful-text';
import { motion } from 'motion/react';
import TrackingSpending from '@/assets/TrackingSpending.webp'
import BudgetInsight from '@/assets/BudgetInsight.webp';

type MouseGravity = 'attract' | 'repel';
type GlowAnimation = 'instant' | 'ease' | 'spring';
type StarsInteractionType = 'bounce' | 'merge';

type GravityStarsProps = {
  starsCount?: number;
  starsSize?: number;
  starsOpacity?: number;
  glowIntensity?: number;
  glowAnimation?: GlowAnimation;
  movementSpeed?: number;
  mouseInfluence?: number;
  mouseGravity?: MouseGravity;
  gravityStrength?: number;
  starsInteraction?: boolean;
  starsInteractionType?: StarsInteractionType;
} & React.ComponentProps<'div'>;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  mass: number;
  glowMultiplier?: number;
  glowVelocity?: number;
};

function GravityStarsBackground({
  starsCount = 75,
  starsSize = 2,
  starsOpacity = 0.75,
  glowIntensity = 15,
  glowAnimation = 'ease',
  movementSpeed = 0.3,
  mouseInfluence = 100,
  mouseGravity = 'attract',
  gravityStrength = 75,
  starsInteraction = false,
  starsInteractionType = 'bounce',
  className,
  ...props
}: GravityStarsProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const animRef = React.useRef<number | null>(null);
  const starsRef = React.useRef<Particle[]>([]);
  const mouseRef = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dpr, setDpr] = React.useState(1);
  const [canvasSize, setCanvasSize] = React.useState({
    width: 800,
    height: 600,
  });

  const readColor = React.useCallback(() => {
    const el = containerRef.current;
    if (!el) return '#ffffff';
    const cs = getComputedStyle(el);
    return cs.color || '#ffffff';
  }, []);

  const initStars = React.useCallback(
    (w: number, h: number) => {
      starsRef.current = Array.from({ length: starsCount }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const speed = movementSpeed * (0.5 + Math.random() * 0.5);
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * starsSize + 1,
          opacity: starsOpacity,
          baseOpacity: starsOpacity,
          mass: Math.random() * 0.5 + 0.5,
          glowMultiplier: 1,
          glowVelocity: 0,
        };
      });
    },
    [starsCount, movementSpeed, starsOpacity, starsSize],
  );

  const redistributeStars = React.useCallback((w: number, h: number) => {
    starsRef.current.forEach((p) => {
      p.x = Math.random() * w;
      p.y = Math.random() * h;
    });
  }, []);

  const resizeCanvas = React.useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const nextDpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    setDpr(nextDpr);
    canvas.width = Math.max(1, Math.floor(rect.width * nextDpr));
    canvas.height = Math.max(1, Math.floor(rect.height * nextDpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    setCanvasSize({ width: rect.width, height: rect.height });
    if (starsRef.current.length === 0) {
      initStars(rect.width, rect.height);
    } else {
      redistributeStars(rect.width, rect.height);
    }
  }, [initStars, redistributeStars]);

  const handlePointerMove = React.useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e) {
        const t = e.touches[0];
        if (!t) return;
        clientX = t.clientX;
        clientY = t.clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top };
    },
    [],
  );

  const updateStars = React.useCallback(() => {
    const w = canvasSize.width;
    const h = canvasSize.height;
    const mouse = mouseRef.current;

    for (let i = 0; i < starsRef.current.length; i++) {
      const p = starsRef.current[i];

      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < mouseInfluence && dist > 0) {
        const force = (mouseInfluence - dist) / mouseInfluence;
        const nx = dx / dist;
        const ny = dy / dist;
        const g = force * (gravityStrength * 0.001);

        if (mouseGravity === 'attract') {
          p.vx += nx * g;
          p.vy += ny * g;
        } else if (mouseGravity === 'repel') {
          p.vx -= nx * g;
          p.vy -= ny * g;
        }

        p.opacity = Math.min(1, p.baseOpacity + force * 0.4);

        const targetGlow = 1 + force * 2;
        const currentGlow = p.glowMultiplier || 1;

        if (glowAnimation === 'instant') {
          p.glowMultiplier = targetGlow;
        } else if (glowAnimation === 'ease') {
          const ease = 0.15;
          p.glowMultiplier = currentGlow + (targetGlow - currentGlow) * ease;
        } else {
          const spring = (targetGlow - currentGlow) * 0.2;
          const damping = 0.85;
          p.glowVelocity = (p.glowVelocity || 0) * damping + spring;
          p.glowMultiplier = currentGlow + (p.glowVelocity || 0);
        }
      } else {
        p.opacity = Math.max(p.baseOpacity * 0.3, p.opacity - 0.02);
        const targetGlow = 1;
        const currentGlow = p.glowMultiplier || 1;
        if (glowAnimation === 'instant') {
          p.glowMultiplier = targetGlow;
        } else if (glowAnimation === 'ease') {
          const ease = 0.08;
          p.glowMultiplier = Math.max(
            1,
            currentGlow + (targetGlow - currentGlow) * ease,
          );
        } else {
          const spring = (targetGlow - currentGlow) * 0.15;
          const damping = 0.9;
          p.glowVelocity = (p.glowVelocity || 0) * damping + spring;
          p.glowMultiplier = Math.max(1, currentGlow + (p.glowVelocity || 0));
        }
      }

      if (starsInteraction) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const o = starsRef.current[j];
          const dx2 = o.x - p.x;
          const dy2 = o.y - p.y;
          const d = Math.hypot(dx2, dy2);
          const minD = p.size + o.size + 5;
          if (d < minD && d > 0) {
            if (starsInteractionType === 'bounce') {
              const nx = dx2 / d;
              const ny = dy2 / d;
              const rvx = p.vx - o.vx;
              const rvy = p.vy - o.vy;
              const speed = rvx * nx + rvy * ny;
              if (speed < 0) continue;
              const impulse = (2 * speed) / (p.mass + o.mass);
              p.vx -= impulse * o.mass * nx;
              p.vy -= impulse * o.mass * ny;
              o.vx += impulse * p.mass * nx;
              o.vy += impulse * p.mass * ny;
              const overlap = minD - d;
              const sx = nx * overlap * 0.5;
              const sy = ny * overlap * 0.5;
              p.x -= sx;
              p.y -= sy;
              o.x += sx;
              o.y += sy;
            } else {
              const mergeForce = (minD - d) / minD;
              p.glowMultiplier = (p.glowMultiplier || 1) + mergeForce * 0.5;
              o.glowMultiplier = (o.glowMultiplier || 1) + mergeForce * 0.5;
              const af = mergeForce * 0.01;
              p.vx += dx2 * af;
              p.vy += dy2 * af;
              o.vx -= dx2 * af;
              o.vy -= dy2 * af;
            }
          }
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      p.vx += (Math.random() - 0.5) * 0.001;
      p.vy += (Math.random() - 0.5) * 0.001;

      p.vx *= 0.999;
      p.vy *= 0.999;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
    }
  }, [
    canvasSize.width,
    canvasSize.height,
    mouseInfluence,
    mouseGravity,
    gravityStrength,
    glowAnimation,
    starsInteraction,
    starsInteractionType,
  ]);

  const drawStars = React.useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const color = readColor();
      for (const p of starsRef.current) {
        ctx.save();
        ctx.shadowColor = color;
        ctx.shadowBlur = glowIntensity * (p.glowMultiplier || 1) * 2;
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    [dpr, glowIntensity, readColor],
  );

  const animate = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    updateStars();
    drawStars(ctx);
    animRef.current = requestAnimationFrame(animate);
  }, [updateStars, drawStars]);

  React.useEffect(() => {
    resizeCanvas();
    const container = containerRef.current;
    const ro =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(resizeCanvas)
        : null;
    if (container && ro) ro.observe(container);
    const onResize = () => resizeCanvas();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (ro && container) ro.disconnect();
    };
  }, [resizeCanvas]);

  React.useEffect(() => {
    if (starsRef.current.length === 0) {
      initStars(canvasSize.width, canvasSize.height);
    } else {
      starsRef.current.forEach((p) => {
        p.baseOpacity = starsOpacity;
        p.opacity = starsOpacity;
        const spd = Math.hypot(p.vx, p.vy);
        if (spd > 0) {
          const ratio = movementSpeed / spd;
          p.vx *= ratio;
          p.vy *= ratio;
        }
      });
    }
  }, [
    starsCount,
    starsOpacity,
    movementSpeed,
    canvasSize.width,
    canvasSize.height,
    initStars,
  ]);

  React.useEffect(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      animRef.current = null;
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      data-slot="gravity-stars-background"
      className={cn('relative w-full overflow-hidden ', className)}
      onMouseMove={(e) => handlePointerMove(e)}
      onTouchMove={(e) => handlePointerMove(e)}
      {...props}
    >
      <div className="absolute inset-x-0 top-0 flex flex-col items-center p-14 gap-14 pointer-events-none transition-colors duration-500">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2
            }
          }}
          viewport={{
            once: true
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center text-[#E3E7D3]">
            The{' '}
            <ColourfulText
              text="No.1"
              className='inline'
            />{' '}
            AI Personal
            <br />
            Financial Consultant in Malaysia
          </h1>
        </motion.div>
        <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-center gap-6 md:gap-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1
              },
              x: 0
            }}
            viewport={{
              margin: '0px 0px -200px 0px',
              amount: 0.2
            }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={TrackingSpending}
              className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl max-h-120 object-contain mt-4 md:mt-10 rounded-3xl"
            />
          </motion.div>
          <div className="flex flex-col items-center md:items-start gap-4 mt-8 md:mt-12 w-full md:w-1/2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{
                margin: '200px 0px -100px 0px',
                amount: 0.5
              }}
            >
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Tracking Spending
              </h1>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1
                }
              }}
              viewport={{
                margin: '200px 0px 0px 0px',
                amount: 0.5
              }}
              className="text-lg sm:max-w-xl leading-relaxed text-foreground"
            >
              <p>
                Record all of your financial transaction including income and expenses, your AI consultant will help you to analysis your financial situation and help you to achieve your goal!
              </p>
            </motion.div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row-reverse items-center md:items-center justify-center gap-6 md:gap-10 mt-12 text-center md:text-right">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1
              },
              x: 0
            }}
            viewport={{
              margin: '0px 0px -200px 0px',
              amount: 0.3
            }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <img
              src={BudgetInsight}
              className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl max-h-120 object-contain rounded-3xl"
            />
          </motion.div>
          <div className="flex flex-col items-center md:items-end gap-4 mb-8 md:mb-16 w-full md:w-1/2 text-center md:text-right">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ margin: '200px 0px -100px 0px', amount: 0.5 }}
            >
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-right">
                Budget Insights
              </h1>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1
                }
              }}
              viewport={{
                margin: '200px 0px -50px 0px',
                amount: 0.5
              }}
              className="text-lg sm:max-w-xl leading-relaxed text-foreground"
            >
              <p>
                Get proactive alerts on upcoming bills, track your savings goals, and see which categories are pushing you over budget. Your AI consultant prioritises what to tackle first so you stay on track every month.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

export { GravityStarsBackground, type GravityStarsProps };
