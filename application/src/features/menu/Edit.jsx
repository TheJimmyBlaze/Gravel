
import { NavDropdown } from 'react-bootstrap';

const Edit = (

) => {

    return (
        <NavDropdown title="Edit">
            <NavDropdown.Item>Name</NavDropdown.Item>
            <NavDropdown.Item>Size</NavDropdown.Item>
            <NavDropdown.Item>Simulation</NavDropdown.Item>
            <NavDropdown.Item>Background</NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item>Preferences</NavDropdown.Item>
        </NavDropdown>
    );
};

export default Edit;