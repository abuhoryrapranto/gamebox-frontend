import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

interface ContainerProps {
  customWidth?: number;
  customHeight?: number;
}

export const ContainerStyled = styled.div(
  (props : ContainerProps): CSSObject => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: props.customWidth || gameConfig.container.maxWidth,
    height: props.customHeight || gameConfig.container.maxHeight,
    maxWidth: props.customWidth || gameConfig.container.maxWidth,
    maxHeight: props.customHeight ||gameConfig.container.maxHeight,
    backgroundColor: '#a5f3fc',
    borderRadius: gameConfig.container.borderRadius,
    boxShadow: '0 0 24px 8px #0284c7',
  }),
);
