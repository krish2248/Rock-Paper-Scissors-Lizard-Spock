import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
`;

export const StyledButton = styled.button`
    background-color: white;
    color: black;
    border: none;
    padding: 1rem 2rem; // Increased size
    border-radius: 8px; // Increased border-radius
    font-size: 1.2rem; // Increased font size
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
        transform: scale(1.05);
    }

    &:active {
        background-color: #e0e0e0;
    }
`;
