const  kosmodal = (setElement) => { 
    if (setElement) {
        if (setElement.classList.contains("modal-inactive") === true) {
            setElement.classList.remove("modal-inactive");
            setElement.classList.add("modal-active");
          } else {
            setElement.classList.remove("modal-inactive");
            setElement.classList.add("modal-active");
          }
    }
  }

  export default kosmodal