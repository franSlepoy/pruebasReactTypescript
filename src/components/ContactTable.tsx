import React from "react";
import { Table } from "react-bootstrap";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

const ContactTable = ({ contacts, onClick }: Props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
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
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ContactTable;
