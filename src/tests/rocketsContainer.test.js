import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RocketsContainer from '../components/RocketsContainer';
import store from '../redux/store';

test('matches RocketsContainer component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RocketsContainer />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
