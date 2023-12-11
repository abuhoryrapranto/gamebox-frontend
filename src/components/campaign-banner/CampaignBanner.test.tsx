import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CampaignBanner } from './CampaignBanner';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] CampaignBanner', () => {
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    
    const { getByTestId } = render( <CampaignBanner />);

    const campaignBanner = getByTestId('CAMPAIGN_BANNER');

    expect(campaignBanner).toHaveStyle({
      display: 'flex',
      position: 'absolute',
      flexDirection: 'column',
      textAlign: 'center',
      top: '10%',
      borderRadius: "8px",
      width: '80%',
      padding: "12px",
      backgroundColor: '#06b6d4',
      color: '#cffafe',
    });

  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {

    global.innerWidth = 250;

    const { getByTestId } = render( <CampaignBanner />);

    const campaignBanner = getByTestId('CAMPAIGN_BANNER');

    expect(campaignBanner).toHaveStyle({
      fontSize: 'flex'
    });

  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN when viewport height is 600 px', () => {

    global.innerWidth = 600;

    const { getByTestId } = render( <CampaignBanner />);

    const campaignBanner = getByTestId('CAMPAIGN_BANNER');

    expect(campaignBanner).toHaveStyle({
      width: '80%'
    });

  });
});
