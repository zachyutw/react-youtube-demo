import BackDropCircleLoading, { NAME, IDS } from './BackDropCircleLoading';
import { render, cleanup } from '@testing-library/react';

describe(`${NAME} testing`, () => {
    afterEach(cleanup);

    test('render success', () => {
        const { getByTestId, rerender } = render(
            <BackDropCircleLoading open={true} />
        );
        const root = getByTestId(IDS.name);
        expect(root).toHaveAttribute('data-open', 'true');
        rerender(<BackDropCircleLoading open={false} />);
        expect(root).toHaveAttribute('data-open', 'false');
    });
});
