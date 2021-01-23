import React from 'react'
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ComponentA = () => {
    return (
        <>
        <div>ComponentA</div>
        <Link to="componentb" >ComponentBへ移動</Link>
        <Button variant="dark" >Hello世界</Button>

        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

<h1>Menu</h1>
<ul>
    <li><Link to="/">家</Link></li>
    <li><Link to="componentb">コンポーネントビー</Link></li>
    <li><Link to="componentc">コンポーネントシー</Link></li>
</ul>

        </>
    )
}

export default ComponentA;