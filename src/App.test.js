import App, { IDS } from './App';
import { render } from './test-utils';

test('renders learn react link', () => {
    const { getByTestId } = render(<App />);
    const appTestId = getByTestId(IDS.appTestId);
    expect(appTestId).toBeTruthy();
});
