import Pagination, { NAME, IDS } from './Pagination';
import { render, fireEvent, cleanup } from '@testing-library/react';

describe(`${NAME} testing`, () => {
    afterEach(cleanup);

    test('render success', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(
            <Pagination onClick={handleClick} start={10} pages={4} />
        );
        const root = getByTestId(IDS.name);
        expect(root).toBeTruthy();
    });
    test('click page button', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(
            <Pagination onClick={handleClick} start={10} pages={4} />
        );
        const firstButton = getByTestId(IDS.name).querySelectorAll('button')[1];
        fireEvent.click(firstButton);
        expect(handleClick).toHaveBeenCalledTimes(1);
        expect(handleClick).toHaveBeenLastCalledWith(1);
    });

});
