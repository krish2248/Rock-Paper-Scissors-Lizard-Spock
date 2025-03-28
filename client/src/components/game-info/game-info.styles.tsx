import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Define CSS variables for colors and other repeated values
const colors = {
    scoreText: 'hsl(0, 0%, 100%)', // White color for score text
    gradientBackground: 'linear-gradient(135deg, hsl(0, 56.10%, 25.90%), hsl(0, 66.20%, 30.20%))',
};

export const GameInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 1rem;
    border-radius: 6px;
    background: transparent; // Make the container background transparent
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-in-out;

    @media (min-width: 720px) {
        padding: 0.7rem 1rem;
        margin: 0 6rem;
        border-radius: 12px;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const GameLogo = styled(Link)`
    text-decoration: none;
    display: grid;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    img {
        width: clamp(6rem, 5.0859rem + 5.9vw, 8.6rem); // Increased size

        @media (min-width: 1024px) {
            width: 8.3rem; // Increased size
        }
    }
`;

export const GameScore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-align: center;
    padding: 0.5rem 1.6rem;
    background: transparent; // Make the score box background transparent
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 281px) {
        padding: 0.2rem 0.7rem;
    }

    @media (min-width: 720px) {
        padding: 0.5rem 2rem;
        border-radius: 7px;
    }

    & > span:first-child {
        font-size: 1.2rem; // Increased size
        color: ${colors.scoreText}; // White color for "Score" text
        letter-spacing: 1px;
    }

    & > span:last-child {
        font-size: 3.5rem; // Increased size
        color: ${colors.scoreText}; // White color for score numbers

        @media (max-width: 281px) {
            font-size: 2.5rem; // Increased size
        }
    }

    @keyframes flipInX {
        from {
            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
            animation-timing-function: ease-in;
            opacity: 0;
        }

        40% {
            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
            animation-timing-function: ease-in;
        }

        60% {
            transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
            opacity: 1;
        }

        80% {
            transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        }

        to {
            transform: perspective(400px);
        }
    }
`;
