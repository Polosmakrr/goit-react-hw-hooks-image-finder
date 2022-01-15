import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({onToggleMenu,modalImage}) {
  
  useEffect(() => {
    window.addEventListener("keydown", hendleKeyDownEsc);
    return () => {
      window.removeEventListener("keydown", hendleKeyDownEsc);
    }
  }, [])

 const hendleKeyDownEsc = (e) => {
    if (e.code === "Escape") {
      onToggleMenu();
    }
  };

 const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onToggleMenu();
    }
  };

    return createPortal(
      <div className={s.Overlay} onClick={handleBackdropClick}>
        <div className={s.Modal}>
          <img
            className={s.image}
            src={modalImage}
            alt="LargePhoto"
          />
        </div>
      </div>,
      modalRoot
    );
  }