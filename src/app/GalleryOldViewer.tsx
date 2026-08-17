import IconChevron from "../imports/IconChevron";

// Figma gallery_old_detail (264:70) 기준 좌표 — 375px 프레임
const FRAME_LEFT = 60;
const FRAME_SIZE = 260;
const ARROW_SIZE = 33;
const ARROW_LEFT = 24;
const ARROW_RIGHT = 325;
/** 확대 프레임 상단(145px)에서 화살표 상단(251px)까지의 거리 */
const ARROW_OFFSET_Y = 106;
const CHEVRON = { width: 10.607, height: 21.214, top: 5.89, left: 11.79, leftMirrored: 10.61 };

interface Props {
  photos: string[];
  index: number;
  /** 확대 프레임을 놓을 y 좌표 (375px 프레임 기준) */
  top: number;
  onSelect: (index: number) => void;
  onClose: () => void;
}

export default function GalleryOldViewer({ photos, index, top, onSelect, onClose }: Props) {
  const step = (delta: number) =>
    onSelect((index + delta + photos.length) % photos.length);

  const arrow = (direction: -1 | 1) => (
    <button
      key={direction}
      type="button"
      onClick={() => step(direction)}
      aria-label={direction === 1 ? "다음 사진" : "이전 사진"}
      style={{
        position: "absolute",
        top: top + ARROW_OFFSET_Y,
        left: direction === 1 ? ARROW_RIGHT : ARROW_LEFT,
        width: ARROW_SIZE,
        height: ARROW_SIZE,
        borderRadius: "50%",
        border: "none",
        background: "#fff",
        padding: 0,
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: CHEVRON.top,
          left: direction === 1 ? CHEVRON.left : CHEVRON.leftMirrored,
          width: CHEVRON.width,
          height: CHEVRON.height,
          transform: direction === 1 ? undefined : "scaleX(-1)",
        }}
      >
        <IconChevron />
      </span>
    </button>
  );

  return (
    <>
      {/* 사진 밖을 누르면 닫힌다 */}
      <button
        type="button"
        onClick={onClose}
        aria-label="확대 보기 닫기"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          background: "transparent",
          padding: 0,
          cursor: "pointer",
        }}
      />
      <div
        style={{
          position: "absolute",
          top,
          left: FRAME_LEFT,
          width: FRAME_SIZE,
          height: FRAME_SIZE,
          background: "#fff",
          border: "1px solid #e6e6e6",
          boxSizing: "border-box",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <img
          src={photos[index]}
          alt={`과거 인형 사진 ${index + 1}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      {arrow(-1)}
      {arrow(1)}
    </>
  );
}
