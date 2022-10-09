const intersectionObserver = (isVisible, element, target) => {
  const currentTarget = target.current;

  if (isVisible === true) {
    /**
     * Check if visibitlity is true
     * then render 
     */
    if (currentTarget) {
      currentTarget.style.transform = "translateX(0px)";
      currentTarget.style.opacity = "1";
    } 
  }
};

export default intersectionObserver;
