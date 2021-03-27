import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_EVENT } from '../actions/index';
import reducer from '../reducers/index';
import { Button, Form, ModalTitle, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
        const [ state, dipatch ] = useReducer(reducer, [])
        const[ title, setTitle] = useState('')
        const[ body, setBody] = useState('')

        const handleClick = (e) => {
          e.preventDefault();
          dipatch({
            type: ADD_EVENT,
            title,
            body,
          });
          setTitle('');
          setBody('');
        }
        const handleClickone = (e) => {
          e.preventDefault();
          dipatch({
            type: ADD_EVENT,
          });

        }
        return (
          <div>
            <div>ComponentB</div>
            <Link to="componentc">ComponentCへ移動</Link>

            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <Form.Label>Body</Form.Label>
                <Form.Control
                type="text"
                placeholder="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleClick}>
              イベント作成

              </Button>
              <Button variant="danger" onClick={handleClickone}>
              イベント全削除

              </Button>
            </Form>

            <h1>Table</h1>
            <Table striped bordered hover>
              <thead>
                <th>id</th>
                <th>title</th>
                <th>body</th>
                <th>#</th>
              </thead>
              <tbody>
                {state.map((data, index) => {
                  return(
                    <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.title}</td>
                      <td>{data.body}</td>
                      <td>
                        <Button variant="danger">delete</Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
        )
}

export default ComponentB
