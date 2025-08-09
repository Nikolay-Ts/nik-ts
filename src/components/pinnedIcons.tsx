import React, { useEffect, type JSX } from "react";

type PinnedIconProps = {
    imageSrc: string;
    onClick: () => void;
    label?: string;
    /** corner radius of the box (px or CSS length) */
    radius?: number | string;
    /** inner padding/inset (px) — lower = bigger icon */
    inset?: number;
    className?: string;
    style?: React.CSSProperties;
};

function ensurePinnedStyles() {
    if (typeof document === "undefined") return;
    if (document.getElementById("pinned-icon-styles")) return;
    const css = `
    .pinned-btn {
      height: 100%;
      width: auto;             
      aspect-ratio: 1 / 1;     
      box-sizing: border-box;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;  
      cursor: pointer;
      overflow: hidden;
      flex: 0 0 auto;           
      padding: 20px;            
      border-radius: 10px;      
    }
    .pinned-btn:hover { background: rgba(255,255,255,0.08); }
    .pinned-btn:active { background: rgba(255,255,255,0.14); }
    .pinned-btn:focus-visible { outline: 2px solid #1e90ff; outline-offset: 2px; }

    .pinned-btn img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
      display: block;
    }

    .pinned-btn--fill {
      width: 100%;
      aspect-ratio: auto;
      justify-content: flex-start;
      flex: 1 1 auto;
    }
  `;
    const style = document.createElement("style");
    style.id = "pinned-icon-styles";
    style.textContent = css;
    document.head.appendChild(style);
}

/** Displays the image in a rounded box; clicking anywhere triggers onClick */
export default function PinnedIcon({
    imageSrc,
    onClick,
    label = "Pinned app",
    radius = 10,
    inset = 4,
    className,
    style,
}: PinnedIconProps): JSX.Element {
    useEffect(() => { ensurePinnedStyles(); }, []);

    return (
        <button
            type="button"
            onClick={onClick}
            title={label}
            aria-label={label}
            className={`pinned-btn${className ? ` ${className}` : ""}`}
            style={{
                borderRadius: typeof radius === "number" ? `${radius}px` : radius,
                padding: inset,
                ...style,
            }}
        >
            <img src={imageSrc} alt="" aria-hidden="true" />
        </button>
    );
}