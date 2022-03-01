import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/missionsReducer';

const Missions = () => {
  const missionsData = useSelector((state) => state.missionsReducer);
  // const PrintMissions = ({ list }) => list.map((book) => (
  //   <tr>
  //     <th>1</th>
  //     <td>Mark</td>
  //     <td>Otto</td>
  //     <td>@mdo</td>
  //   </tr>
  // ));
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsData.length === 0) dispatch(fetchData());
  }, []);
  return (
    <div className="col-11 mx-auto mt-4">
      <Table striped bordered hover size="sm" style={{ textAlign: 'left' }}>
        <thead>
          <tr>
            <th className="col-1">Missions</th>
            <th className="col-8">Description</th>
            <th className="col-1">Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              Do exercitation eu deserunt eiusmod adipisicing cillum sit
              est nisi pariatur deserunt irure officia. Aliqua dolore enim
              eiusmod excepteur. Sunt officia ad et cillum laboris eiusmod
              exercitation consectetur elit aliqua Lorem reprehenderit.
              Voluptate ea ullamco ex ut mollit mollit deserunt do cupidatat
              quis eiusmod ea velit. Irure irure aliqua pariatur cupidatat
              cupidatat eu quis labore consequat elit minim ad. Qui commodo
              eu ipsum non et nisi eu consequat fugiat. Proident aute tempor
              excepteur enim in in eu labore ea. Ad adipisicing dolore officia
              veniam nostrud aute ut dolor proident deserunt. Commodo commodo
              mollit in adipisicing cupidatat reprehenderit aliqua dolore
              fugiat ut non proident elit voluptate. Id officia nulla aute
              in non. Cupidatat duis tempor mollit ipsum velit sint cupidatat
              non. Veniam duis anim consequat nulla tempor quis proident
              nulla irure irure eiusmod sunt cillum occaecat.
            </td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
