// CustomCursor.tsx
import React, { useEffect, useRef } from "react";

const CustomCursor = ({ isVisible }: { isVisible: boolean }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.pageX}px`;
        cursorRef.current.style.top = `${event.pageY}px`;
      }
    };

    // Add or remove the `cursor-none` class to hide the default cursor
    if (isVisible) {
      document.body.classList.add("cursor-none");
    } else {
      document.body.classList.remove("cursor-none");
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("cursor-none"); // Clean up on unmount
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`fixed w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold pointer-events-none transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transform: "translate(-50%, -50%)" }}
    >
      ✕
    </div>
  );
};

export default CustomCursor;
