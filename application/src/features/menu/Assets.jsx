
import { NavDropdown } from 'react-bootstrap';

const Assets = ({

}) => {
    
    return (
        <NavDropdown title="Assets">
            <NavDropdown.Item>Import Sheet</NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item>Save Assets</NavDropdown.Item>
            <NavDropdown.Item>Load Assets</NavDropdown.Item>
        </NavDropdown>
    );
};

export default Assets;