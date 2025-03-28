import styled from 'styled-components';

export const GameBodyContainer = styled.div`
    display: flex;
    flex-direction: row; // Horizontal layout
    align-items: center;
    justify-content: center; // Center the icons
    background-color: transparent; // Transparent background
    border: none; // Remove the border
    border-radius: 0; // Remove rounded corners
    box-shadow: none; // Remove shadow
    padding: 2rem; // Padding for inner spacing
    margin: 2rem; // Margin for outer spacing
    width: 100%; // Full width
    max-width: 1200px; // Maximum width

    @media (min-width: 720px) {
        padding: 3rem;
    }

    // Animation
    animation: fadeIn 1s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    // Add spacing between icons
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 2.5rem; // Increased horizontal margin between icons
        background: none; // Remove background color
        border: none; // Remove border
        padding: 0; // Remove padding
    }

    // Hover effect for icons
    & > div:hover {
        transform: scale(1.1); // Slightly enlarge the icon on hover
        transition: transform 0.2s ease-in-out; // Smooth transition
    }

    // Ensure images are displayed without any background or border
    & img {
        background: none; // Remove background color
        border: none; // Remove border
        width: 110px; // Set image size
        height: 110px; // Set image size
        transform: translateX(-60px); // Move image more to the left
    }

    // Style for text below icons
    & span {
        color: white; // White color font
        font-weight: bold; // Bold font
        margin-top: 0.5rem; // Space between icon and text
    }
`;
