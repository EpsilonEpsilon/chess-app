import {useCallback, useEffect, useState} from "react";

export const useMediaQuery = (width:string) =>
{
    const [targetReached, setTargetReached] = useState(false)

    const updateTarget = useCallback((e:any) =>
    {
        if (e.matches) setTargetReached(true)
        else setTargetReached(false)
    }, [])

    useEffect(() =>
    {
        const media = window.matchMedia(width)
        media.addEventListener('change', updateTarget)

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) setTargetReached(true)

        return () => media.removeEventListener('change', updateTarget)
    }, [])

    return targetReached
}