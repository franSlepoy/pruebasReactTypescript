import  { ReactNode } from 'react'
import { Button } from 'react-bootstrap';

type Props = {
  children: ReactNode;
  onClick: ()=> void;
}

const MyButton = ({children, onClick}: Props) => {
  return (
    <Button style={{margin:5}} onClick={onClick}>{children}</Button>
  )
}

export default MyButton