import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import api from '../../services/api'

import './styles.css'

export default function Orders() {
  const [people, setPeople] = useState([])
  
  async function mountList() {
    await api.get('/pessoas').then(response => {
      setPeople(response.data)
    })
  }

  return (
    <div className="ml-3 mr-5">
      <h1 className="ml-3 mb-3">Consulta de nome fantasia</h1>

      <Button className="ml-3 mb-2" onClick={() => mountList()} variant="primary">Montar lista</Button>
      <Button className="ml-3 mb-2" onClick={() => setPeople([])} variant="primary">Limpar</Button>

      <Table className="ml-3" striped bordered hover>
        <thead>
          <tr>
            <th>Nome fantasia</th>
          </tr>
        </thead>
        <tbody>
          {
            people.map(p => (
              <tr key={p.id}>
                <td>{p.nome_fantasia}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}