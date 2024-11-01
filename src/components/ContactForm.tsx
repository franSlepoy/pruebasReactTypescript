import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import MyButton from "./MyButton";
import { Children } from "react";
import { Contact, contactSchema,contactTypeOption  } from "../schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select";

type Props = {
    onSubmit: (contact: Contact)=> void
};

const ContactForm = ({onSubmit}: Props) => {
  const methods = useForm<Contact>({
    resolver: zodResolver(contactSchema)
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">Email</Input>
        <Select name="type" label="Tipo" defaultMessage="--Selecciona tipo-- " options={contactTypeOption}/>
        <MyButton type="submit">
            Enviar
        </MyButton>
        <MyButton   onClick={()=> methods.reset()} variant="secondary">
            Limpiar
        </MyButton>
       
      </form>
    </FormProvider>
  );
};

export default ContactForm;
