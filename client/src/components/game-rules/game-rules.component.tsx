import { MouseEventHandler } from 'react';

import imageRules from '../../assets/images/image-rules-bonus.svg';
import closeIcon from '../../assets/images/icon-close.svg';

import { RulesContainer, RulesCloseContainer, RulesImageContainer, RulesTitle, Overlay } from './game-rules.styles';

type GameRulesImageProps = {
    closeHandler: MouseEventHandler<HTMLImageElement>;
};

const GameRulesImage = ({ closeHandler }: GameRulesImageProps): JSX.Element => {
    return (
        <Overlay>
            <RulesContainer>
                <RulesTitle>Rules</RulesTitle>
                <RulesImageContainer>
                    <img src={imageRules} alt='Game Rules' />
                </RulesImageContainer>

                <RulesCloseContainer>
                    <img src={closeIcon} onClick={closeHandler} alt='Close the rules' />
                </RulesCloseContainer>
            </RulesContainer>
        </Overlay>
    );
};

export default GameRulesImage;
