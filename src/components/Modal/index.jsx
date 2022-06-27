import React, { useContext, useRef, useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
const Modal = (props) => {
    const mountParent = useRef(null)
    if (mountParent && mountParent.current === null) {
        mountParent.current = document.createElement('div')
    }

    useEffect(() => {
        document.body.append(mountParent.current)
        return () => {
            document.body.removeChild(mountParent.current)
        }
    }, [])
    return ReactDOM.createPortal(props.children, mountParent.current)
}

export default Modal