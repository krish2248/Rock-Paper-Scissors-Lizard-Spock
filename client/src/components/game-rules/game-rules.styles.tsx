import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

export const RulesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    max-width: 90%;
    margin: auto;
`;

export const RulesTitle = styled.p`
    font-size: 2rem;
    color: white;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

export const RulesImageContainer = styled.div`
    img {
        width: 100%;
        max-width: 500px; // Increased size
        height: auto;
    }
`;

export const RulesCloseContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;

    img {
        width: 2rem;
        height: 2rem;
    }
`;
