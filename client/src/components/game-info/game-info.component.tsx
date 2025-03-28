import React from 'react';
import PropTypes from 'prop-types';

import { GameInfoContainer, GameScore } from './game-info.styles';

type GameInfoProps = {
    score: number;
};

/**
 * GameInfo component displays the game logo and the current score.
 *
 * @param {GameInfoProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const GameInfo = ({ score }: GameInfoProps): JSX.Element => {
    return (
        <GameInfoContainer role="banner">
            <GameScore role="contentinfo">
                <span>Score</span>
                <span>{score}</span>
            </GameScore>
        </GameInfoContainer>
    );
};

// PropTypes for runtime type checking
GameInfo.propTypes = {
    score: PropTypes.number.isRequired,
};

// Default props
GameInfo.defaultProps = {
    score: 0,
};

export default GameInfo;
