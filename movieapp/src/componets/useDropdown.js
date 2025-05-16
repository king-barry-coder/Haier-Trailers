import { useState, useEffect, useRef } from "react";

const useDropdown = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);


    useEffect( () => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.targrt)) {
                setOpen(false)
            }
        };

        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return { open, setOpen, menuRef}
};

export default useDropdown;

