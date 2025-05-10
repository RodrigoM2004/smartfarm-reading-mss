import { useEffect, useState } from "react";

{/* hooker que define em que sessão da página o usuário está */}

export function useScrollSpy(sectionIds = [], offset = 0) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    function onScroll() {
      let currentId = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - offset <= 0 && rect.bottom > 0) {
            currentId = id;
          }
        }
      }
      setActiveId(currentId);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
