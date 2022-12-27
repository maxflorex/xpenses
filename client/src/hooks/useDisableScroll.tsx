import { useEffect } from "react";


export const useDisableScroll = (open: any) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [open])
}