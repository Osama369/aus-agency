'use client';

import { cn } from "@/app/utils/cn";
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const iRef = useRef(0);
  const xRef = useRef(0);
  const ctxRef = useRef<any>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);

  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);

  const waveColors = useMemo(() => colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ], [colors]);

  const drawWave = useCallback((n: number, w: number, h: number) => {
    let nt = 0;
    nt += getSpeed();
    for (iRef.current = 0; iRef.current < n; iRef.current++) {
      ctxRef.current.beginPath();
      ctxRef.current.lineWidth = waveWidth || 50;
      ctxRef.current.strokeStyle = waveColors[iRef.current % waveColors.length];
      for (xRef.current = 0; xRef.current < w; xRef.current += 5) {
        var y = noise(xRef.current / 800, 0.3 * iRef.current, nt) * 100;
        ctxRef.current.lineTo(xRef.current, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctxRef.current.stroke();
      ctxRef.current.closePath();
    }
  }, [waveWidth, waveColors, noise, getSpeed]);

  useEffect(() => {
    const init = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      ctxRef.current = ctx;
      if (ctx) {
        const w = ctx.canvas.width = window.innerWidth;
        const h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        window.onresize = function () {
          const w = ctx.canvas.width = window.innerWidth;
          const h = ctx.canvas.height = window.innerHeight;
          ctx.filter = `blur(${blur}px)`;
        };
        render(w, h);
      }
    };

    const render = (w: number, h: number) => {
      if (ctxRef.current) {
        ctxRef.current.fillStyle = backgroundFill || "black";
        ctxRef.current.globalAlpha = waveOpacity || 0.5;
        ctxRef.current.fillRect(0, 0, w, h);
        drawWave(5, w, h);
        animationIdRef.current = requestAnimationFrame(() => render(w, h));
      }
    };

    init();

    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [drawWave, backgroundFill, waveOpacity, blur]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
