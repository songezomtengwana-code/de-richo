import { useState, useMemo, useEffect } from "react";

const KosIntersection = (options, targetRef) => {
  const [isVisible, setIsVisible] = useState(false);

  //   dont mind
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  //   dont mind
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;

    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);

  return isVisible;
};
export default KosIntersection;
