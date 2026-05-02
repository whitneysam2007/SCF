import { useRef, useEffect, useState, type ReactNode } from "react";

/**
 * Scroll-triggered fade-up animation using IntersectionObserver.
 * Content is visible by default (no opacity:0 initial state) to prevent
 * invisible content if JS fails. The animation enhances but doesn't gate visibility.
 */
export function AnimatedSection({
  children,
  className = "",
  id = "",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s cubic-bezier(0.25,0.1,0.25,1), transform 0.7s cubic-bezier(0.25,0.1,0.25,1)",
        backgroundColor: "#f5f7fb",
      }}
    >
      {children}
    </section>
  );
}
