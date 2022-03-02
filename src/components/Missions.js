import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/missionsReducer';
import PrintMissions from './Mission';

const Missions = () => {
  const missionsData = useSelector((state) => state.missionsReducer);
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
          <PrintMissions list={missionsData} />
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
