import React, { useState, useEffect, useRef } from 'react';

interface TooltipCursorProps {
  children: React.ReactNode;
  delay: number;
}

const TooltipCursor: React.FC<TooltipCursorProps> = ({ children, delay }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltipContent, setShowTooltipContent] = useState(false);
  const [dynamicContent, setDynamicContent] = useState("");

  const tooltipRef = useRef<HTMLDivElement>(null);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const target = event.target as HTMLElement;

    const tooltipText = target.getAttribute('data-tooltip');
    if (tooltipText) setDynamicContent(tooltipText);

    targetPos.current = { x: clientX, y: clientY };
  };

  const handleMouseEnter = () => {
    setTooltipVisible(true);
    setDynamicContent("ASHRAE SUST Student Branch");
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
    setDynamicContent("");
  };

  const animate = () => {
    const speed = 0.1;
    const dx = targetPos.current.x + 12 - currentPos.current.x;
    const dy = targetPos.current.y + 12 - currentPos.current.y;

    currentPos.current.x += dx * speed;
    currentPos.current.y += dy * speed;

    const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
    const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
    let tooltipX = currentPos.current.x;
    let tooltipY = currentPos.current.y;

    if (tooltipX + tooltipWidth > window.innerWidth) {
      tooltipX = window.innerWidth - tooltipWidth - 10;
    }
    if (tooltipY + tooltipHeight > window.innerHeight) {
      tooltipY = window.innerHeight - tooltipHeight - 10;
    }

    setTooltipPosition({ x: tooltipX, y: tooltipY });

    animationFrame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isTooltipVisible) {
      animationFrame.current = requestAnimationFrame(animate);
    } else {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    }

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [isTooltipVisible]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (isTooltipVisible) {
      timeoutId = setTimeout(() => setShowTooltipContent(true), delay);
    } else {
      setShowTooltipContent(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isTooltipVisible, delay]);

  return (
    <div
      className="w-fit cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className={` fixed p-3.5 bg-black text-white rounded-full shadow text-sm font-semibold max-w-md pointer-events-none transition-opacity duration-200 ${showTooltipContent ? 'opacity-100' : 'opacity-0'}`}
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            zIndex: 2147483647
          }}
        >
          {dynamicContent}
        </div>
      )}
      {children}
    </div>
  );
};

export default TooltipCursor;
/* 
<TooltipCursor content={() => ""} delay={200}>
  <AshraeLogo width="500px" height="auto" style={{ display: 'block' }} />
</TooltipCursor> */
