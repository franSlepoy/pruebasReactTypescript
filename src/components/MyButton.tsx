import { Children, ReactNode } from 'react'
import { Button } from 'react-bootstrap'
type variant = "primary" 
type Props = {
  variant?: string
  children: ReactNode
}

const MyButton = ({variant="primary", children}: Props) => {
  return (
    <Button variant={`${variant}`} type='submit' style={{marginTop:20}}>
    {children}
    </Button>
  )
}

export default MyButton