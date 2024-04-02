import { useEffect } from 'react';
import { ICON_ALIGN_LEFT, ICON_ALIGN_RIGHT } from "@/constants";
export default function UIButton({text='',type='' ,className = '', disabled='', onClickHandler='',Icon='',IconAlign='', ...props }) {
    return (
        <button
          type={type}
          className={className}
          disabled={disabled}
          onClick={onClickHandler}
        >
          {Icon && IconAlign === ICON_ALIGN_LEFT && Icon}
          {text}
          {Icon && IconAlign === ICON_ALIGN_RIGHT && Icon}
        </button>
    );
}
