import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Missions from '../components/Missions';
import RocketsContainer from '../components/RocketsContainer';
import MyProfile from '../components/MyProfile';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../components/NavBar');
jest.mock('../components/Missions');
jest.mock('../components/RocketsContainer');
jest.mock('../components/MyProfile');

describe('Correct render of the routes', () => {
  test('Should render Missions for Missions route', () => {
    Missions.mockImplementation(() => <div>MissionsPageMock</div>);
    render(
      <MemoryRouter initialEntries={['/Missions']} initialIndex={0}>
        <Missions />
      </MemoryRouter>,
    );
    expect(screen.getByText('MissionsPageMock')).toBeInTheDocument();
  });

  test('Should render MyProfile for MyProfile route', () => {
    MyProfile.mockImplementation(() => <div>MyProfilePageMock</div>);

    render(
      <MemoryRouter initialEntries={['/MyProfile']}>
        <MyProfile />
      </MemoryRouter>,
    );
    expect(screen.getByText('MyProfilePageMock')).toBeInTheDocument();
  });

  test('Should render NavBar and RocketsContainer on default route', () => {
    RocketsContainer.mockImplementation(() => <div>HomePageMock</div>);

    render(
      <MemoryRouter initialEntries={['/']}>
        <RocketsContainer />
      </MemoryRouter>,
    );
    expect(screen.getByText('HomePageMock')).toBeInTheDocument();
  });
});
