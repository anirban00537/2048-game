import { useCallback, useEffect } from 'react';
import { DIRECTION_MAP } from '../utils/constants';
import { ArrowKey } from '../utils/types';
const isArrowKey = (key) => Object.keys(ArrowKey).includes(key);
// Rather than returning the direction, we pass the direction to the given callback
// so that keydown event won't make React rerender until the callback changes some states
const useArrowKeyPress = (cb) => {
    const onKeyDown = useCallback(({ key }) => {
        if (isArrowKey(key)) {
            cb(DIRECTION_MAP[key]);
        }
    }, [cb]);
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);
};
export default useArrowKeyPress;
