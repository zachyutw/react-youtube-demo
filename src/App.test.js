import App, { IDS } from './App';
import { render } from './test-utils';

jest.mock('./containers/Search/useSearchControl',()=>{
  return ()=>( {
    q:'foo',
    onSearchChange:jest.fn(),
    onSearchClear:jest.fn(),
    onSearchSubmit:jest.fn(),
    onSetStart:jest.fn(),
})
})

test('renders learn react link', () => {
    const { getByTestId } = render(<App />);
    const appTestId = getByTestId(IDS.appTestId);
    expect(appTestId).toBeTruthy();
});
