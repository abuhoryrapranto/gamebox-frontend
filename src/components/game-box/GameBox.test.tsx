import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameBox } from './GameBox';
import { CampaignBanner } from '../campaign-banner/CampaignBanner';
import { StartButton } from '../start-button/StartButton';

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {

    global.innerWidth = 1000;
    global.innerHeight = 1000;

    const { getByTestId } = render(
      <GameBox>
        <CampaignBanner />
        <StartButton />
      </GameBox>
    );

    const gameBox = getByTestId('GAME_BOX');

    const styles = window.getComputedStyle(gameBox);

      expect(styles.maxWidth);
      expect(styles.maxHeight);

  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {

    global.innerWidth = 300;
    global.innerHeight = 1000;

    const { getByTestId } = render(
      <GameBox>
        <CampaignBanner />
        <StartButton />
      </GameBox>
    );

    const gameBox = getByTestId('GAME_BOX');

    const styles = window.getComputedStyle(gameBox);

      expect(styles.maxWidth).toBe('300px');
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {

    global.innerWidth = 1000;
    global.innerHeight = 600;

    const { getByTestId } = render(
      <GameBox>
        <CampaignBanner />
        <StartButton />
      </GameBox>
    );

    const gameBox = getByTestId('GAME_BOX');

    const styles = window.getComputedStyle(gameBox);

    expect(styles.maxHeight).toBe('600px');
  });
});
