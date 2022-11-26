import styles from './styles.module.css';
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react';

function Navbar() {
  return (
    <div className={styles.navbar}>
        <Link to='/showpasword'>
            <Button colorScheme='teal' size='xs'>Show Password</Button>
        </Link>
        <Link to='/addpasword'>
            <Button colorScheme='teal' size='xs'>Add Password</Button>
        </Link>
        <Link to='/generate'>
            <Button colorScheme='teal' size='xs'>Generate Password</Button>
        </Link>
    </div>
  )
}

export default Navbar;