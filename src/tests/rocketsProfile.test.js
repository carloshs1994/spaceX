import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RocketsProfile from '../components/RocketsProfile';
import store from '../redux/store';

test('matches RocketsProfile component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RocketsProfile />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
