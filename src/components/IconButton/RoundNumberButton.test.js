import RoundNumberButton, { NAME, IDS } from './RoundNumberButton';
import { render, fireEvent, screen,cleanup } from '@testing-library/react';

describe(`${NAME} testing`, () => {
    afterEach(cleanup);

    test('render success', () => {
        const { getByTestId } = render(
            <RoundNumberButton>foo</RoundNumberButton>
        );
        const root = getByTestId(IDS.name);
        expect(root).toBeTruthy();
    });
    test('click button', () => {
        const handleClick = jest.fn();
        render(
            <RoundNumberButton onClick={handleClick}>foo</RoundNumberButton>
        );
        fireEvent.click(screen.getByText(/foo/i));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('actived check', () => {
        const { getByTestId } = render(
            <RoundNumberButton actived={true}>foo</RoundNumberButton>
        );
        expect(getByTestId(IDS.name)).toHaveStyle(`color:rgb(255,255,255)`);
        expect(getByTestId(IDS.name)).toHaveAttribute('data-actived','true');
        
    });
});
