import { MouseEventHandler } from 'react';


import { ButtonContainer, StyledButton } from './game-rules-btn.styles';

type GameRulesBtnProps = {
    openHandler: MouseEventHandler<HTMLButtonElement>;
};

const GameRulesBtn = ({ openHandler }: GameRulesBtnProps) => {
    return (
        <ButtonContainer>
            <StyledButton type='button' onClick={openHandler}>
                Rules
            </StyledButton>
        </ButtonContainer>
    );
};

export default GameRulesBtn;
