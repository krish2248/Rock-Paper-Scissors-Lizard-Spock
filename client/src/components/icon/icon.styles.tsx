import styled from 'styled-components';

const selectColor = (color: string): string => {
    return `transparent, transparent`;
};

const selectBoxShadow = (color: string): string => {
    return `none`;
};

const justifySelf = (id: number | undefined): string => {
    let justify: string = '';

    switch (id) {
        case 1:
            justify = `center`;
            break;

        case 2:
        case 5:
            justify = `flex-start`;
            break;

        case 3:
        case 4:
            justify = `flex-end`;
            break;

        default:
            justify = `baseline`;
            break;
    }

    return justify;
};

const selectTranslateMobile = (id: number | undefined): string => {
    let translate: string = '';

    switch (id) {
        case 2:
            translate = `translate(0, -1rem)`;
            break;

        case 3:
            translate = `translate(0, -1rem)`;
            break;

        default:
            break;
    }

    return translate;
};

type BorderColorProps = {
    $iconId?: number;
    $title: string;
    $won?: boolean;
    $size?: boolean;
};

export const IconContainer = styled.div<BorderColorProps>`
    width: ${({ $size }) => ($size ? `9rem` : `7rem`)};
    height: ${({ $size }) => ($size ? `9rem` : `7rem`)};
    justify-self: ${({ $iconId }) => justifySelf($iconId)};
    display: grid;
    grid-area: ${({ $title }) => $title === 'scissors' && `1 / 1 / span 1 / span 2`};
    place-items: center center;
    transform: ${({ $iconId }) => selectTranslateMobile($iconId)};
    border: none;
    border-radius: 50%;
    background-image: linear-gradient(${({ $title }) => selectColor($title)});
    box-shadow: ${({ $won, $title }) =>
        $won
            ? `0 0 0 1.2rem rgba(255, 255, 255, 0.03), 0 0 0 3rem rgba(255, 255, 255, 0.02),
        0 0 0 5.3rem rgba(255, 255, 255, 0.015), 0 7px 0 -1px ${selectBoxShadow($title)}`
            : `none`};

    @media (max-width: 376px) {
        width: ${({ $size }) => ($size ? `7.8rem` : `5.8rem`)};
        height: ${({ $size }) => ($size ? `7.8rem` : `5.8rem`)};
    }

    @media (max-width: 280px) {
        width: 4.5rem;
        height: 4.5rem;
    }

    @media (min-width: 720px) {
        width: ${({ $size }) => ($size ? `13rem` : `8.3rem`)};
        height: ${({ $size }) => ($size ? `13rem` : `8.3rem`)};
        box-shadow: ${({ $won, $title }) =>
            $won
                ? `0 0 0 50px rgba(255, 255, 255, 0.04), 0 0 0 100px rgba(255, 255, 255, 0.02),
        0 0 0 150px rgba(255, 255, 255, 0.01), 0 7px 0 -1px ${selectBoxShadow($title)}`
                : `none`};
    }
`;

export const IconButton = styled.button`
    width: 75%;
    height: 75%;
    display: grid;
    place-items: center center;
    outline: 3px solid transparent;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    background: none; // Remove background color
    box-shadow: none; // Remove inner shadow

    img {
        width: 50%;
    }
`;
