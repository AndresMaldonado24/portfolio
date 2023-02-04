import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal({children}){
    
    const portalNode = document.createElement('div');

    portalNode.className = 'fixed top-0 left-0 right-0 z-50 w-screen h-screen bg-black bg-opacity-70';

    useEffect( () => {

        document.body.appendChild(portalNode);

        return () => {
            portalNode.remove();
        }
    },[portalNode]);

    return ReactDOM.createPortal(children,portalNode);
}