import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import { useState } from "react";
import { Contact } from "../schemas/Contact";

const CMS = () => {
   const [contacts, setContacts] = useState<Contactct[]>([]);

   const addContact = (contact:Contact) => setContacts([
    {
        ...contact,
        id: Math.random().toString(),
    }, ...contacts
   ])


   const deleteContact = (id:string) => setContacts(contacts.filter((c)=> c.id != id));
  
   console.log(contacts)
  return (
    <>
      <Container>
        <Row>
          <Col><ContactForm onSubmit={addContact} /></Col>
        </Row>
        <Row>
          <Col><ContactTable contacts={contacts} onClick={deleteContact}/></Col>
        </Row>
      </Container>
    </>
  );
};

export default CMS;
