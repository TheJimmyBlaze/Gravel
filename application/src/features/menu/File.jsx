
import { NavDropdown } from 'react-bootstrap';

const File = (

) => {

    return (
        <NavDropdown title="File" menuVariant="dark">
            <NavDropdown.Item>New</NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item>Open</NavDropdown.Item>
            <NavDropdown.Item>Save</NavDropdown.Item>
        </NavDropdown>
    );
};

export default File;