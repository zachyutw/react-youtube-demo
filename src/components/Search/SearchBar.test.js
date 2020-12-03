import SearchBar, { NAME, IDS } from './SearchBar';
import { render, fireEvent, cleanup } from '@testing-library/react';

describe(`${NAME} testing`, () => {
    afterEach(cleanup);

    test('render success', () => {
        const onChange = jest.fn();
        const onClear = jest.fn();
        const onSubmit = jest.fn();
        const { getByTestId } = render(
            <SearchBar onChange={onChange} onClick={onClear} onSubmit={onSubmit} query={''} placeholder="foo" />
        );
        const root = getByTestId(IDS.name);
        expect(root).toBeTruthy();
    });
    // TODO test onChange
    // TODO test onClear
    // TODO test onSubmit

});
