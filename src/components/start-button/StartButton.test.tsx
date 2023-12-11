import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';

afterEach(cleanup);

describe('[GAME] StartButton', () => {
  it('SHOULD Render StartButton with proper config', () => {
    
    const { getByTestId } = render( <StartButton />);

    const startButton = getByTestId('START_BUTTON');

    expect(startButton).toHaveTextContent('Start Button');

  });

  it('SHOULD Render StartButton with click event', () => {

    window.alert = jest.fn();
    
    const { getByTestId } = render( <StartButton />);

    const startButton = getByTestId('START_BUTTON');

    fireEvent.click(startButton);

    expect(window.alert).toHaveBeenCalled();

    expect(window.alert).toHaveBeenCalledWith('You will learn to develop JS games after you join with us! For now, best of luck!');

  });
});
