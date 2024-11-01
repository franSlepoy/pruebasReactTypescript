import React from "react";
import { Table } from "react-bootstrap";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

const ContactTable = ({ contacts, onClick }: Props) => {
  return (
    <Table style={{marginTop:20}} striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr
            style={{ cursor: "pointer" }}
            key={c.id}
            onClick={() => onClick(c.id)}
          >
            <td>{c.name}</td>
            <td>{c.lastname}</td>
            <td>{c.email}</td>
            <td>{c.type}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ContactTable;
