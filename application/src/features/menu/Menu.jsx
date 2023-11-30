
import { Navbar, Nav, Container } from 'react-bootstrap';

import File from './File';
import Edit from './Edit';
import Build from './Build';
import Description from './Description';

import gravel from '../../resources/gravel.png';

const Menu = ({

}) => {

    return (
        <Navbar 
            className="p-0 border-bottom border-dark"
            bg="secondary"
        >
        
            <Container className="m-0" fluid>
                <Navbar.Brand>
                    <img 
                        className="align-baseline"
                        src={gravel} 
                        width={16}
                        height={16}
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>

                    <Nav className="w-100">
                        <File />
                        <Edit />
                        <Build />

                        <Description/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;