import React, {useState} from 'react';
import cn from 'classnames'
import {StarProps} from "./Star.props";
import style from './Star.module.css';
import StarIcon from './star.svg'

const Star = ({starCounter, ...props}: StarProps): JSX.Element => {

    const [counter, setCounter] = useState(4)
    const [isActiveStar, setIsActiveStar] = useState(false)

    const handleSetStar = () => {
        setIsActiveStar(prev => !prev)
        isActiveStar
            ? setCounter(counter - 1)
            : setCounter(counter + 1)
    }

    return (
        <div {...props} className={style.filled} onClick={handleSetStar}>
            <StarIcon className={cn(style.star, {
                    [style.active]: isActiveStar
                }
            )}/> {counter}
        </div>
    )
};

export default Star;
