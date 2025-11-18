import { useState } from 'react';

export function useClickGuard() {
  const [startY, setStartY] = useState<number | null>(null);
  const [clickedInside, setClickedInside] = useState(false);

  const registerDown = (e: React.MouseEvent) => {
    setStartY(e.clientY);
  };

  const registerInsideClick = () => {
    setClickedInside(true);
  };

  const shouldToggle = (
    e: React.MouseEvent,
    options: { dragging: boolean; isEditing: boolean },
  ) => {
    if (clickedInside) {
      setClickedInside(false);
      return false;
    }

    if (startY === null) return false;

    const diff = Math.abs(e.clientY - startY);

    if (diff > 5) return false;
    if (options.dragging) return false;
    if (options.isEditing) return false;

    return true;
  };

  return {
    registerDown,
    registerInsideClick,
    shouldToggle,
  };
}
