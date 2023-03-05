import { useEffect, useState } from "react";

import { debugLog } from "./debugLog";

/**
 * Renders its children on second render
 */
export default function DelayedRender({ children }) {
  const [isRevealed, setRevealed] = useState(false);
  useEffect(() => {
    debugLog("Revealing querying components");
    setRevealed(true);
  }, []);
  return isRevealed ? children : <div>(Delaying render)</div>;
}
