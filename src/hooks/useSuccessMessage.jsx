import { useState } from "react";

export const useSuccessMessage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const displaySuccesMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return { isSubmitted, displaySuccesMessage };
};
