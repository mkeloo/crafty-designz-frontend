"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import cursorIcon from "@/assets/blanket.svg";

const CustomSvgCursor = ({ isVisible }: { isVisible: boolean }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.pageX}px`;
        cursorRef.current.style.top = `${event.pageY}px`;
      }
    };

    if (isVisible) {
      document.body.classList.add("cursor-none");
    } else {
      document.body.classList.remove("cursor-none");
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("cursor-none");
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: "translate(-50%, -50%)",
        // width: "100px",
        // height: "100px",
      }}
    >
      <Image
        src={cursorIcon}
        alt="Custom SVG Cursor"
        width={50}
        height={50}
        // className="cursor-none"
      />
    </div>
  );
};

export default CustomSvgCursor;
