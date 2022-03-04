import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import PrintMission from '../components/Mission';
import store from '../redux/store';

test('matches RocketsProfile component snapshot', () => {
  const missionsData = [{
    // eslint-disable-next-line max-len
    description: "Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world's third largest satellite operator in terms of revenues.",
    id: 'F7709F2',
    name: 'Eutelsat',
    reserved: false,
  }];

  const tree = renderer.create(
    <Provider store={store}>
      <PrintMission list={missionsData} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
