import React, {FC} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    // onClick: (num: number) => void;
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         variant,
         children,
         // onClick
    }) => {

    // const [state, setState] = useState(0);

    return (
        <div style={{
                     width,
                     height,
                     border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
                     background: variant ===CardVariant.primary ? 'whitesmoke': ''
                 }}
             // onClick={() => onClick(state)}
        >
            {children}
        </div>
    )
}

export default Card;