import React, { ReactNode, useEffect, useState } from 'react';
import { ContainerStyled } from './styled';
import { TestElement } from '../../enums/TestElement';

interface Props {
  children: ReactNode;
}
export const GameBox = ({ children }: Props) => {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const maxWidth = 360;
  const maxHeight = 640;
  const aspectRatio = 9 / 16;

  const  handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  

  let rescaleWidth = width;
  let rescaleHeight = height;

  if (width < maxWidth) {

    rescaleHeight = width * aspectRatio;

  } else if (height < maxHeight) {

    rescaleWidth = height / aspectRatio;

  } else if (width > maxWidth) {

    rescaleWidth = maxWidth;
    rescaleHeight = rescaleWidth * aspectRatio;

  } else if (height > maxHeight) {

    rescaleHeight = maxHeight;
    rescaleWidth = rescaleHeight / aspectRatio;

  }

  return <ContainerStyled customWidth={Math.round(rescaleWidth)} customHeight={Math.round(rescaleHeight)} data-testid={TestElement.GAME_BOX}>{children}</ContainerStyled>;
};
