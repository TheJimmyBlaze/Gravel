
import { NavDropdown } from 'react-bootstrap';

import Import from '../import/Import';

const Assets = ({

}) => {
    
    return (
        <NavDropdown title="Assets">
            <Import />

            <NavDropdown.Divider />

            <NavDropdown.Item>Save Assets</NavDropdown.Item>
            <NavDropdown.Item>Load Assets</NavDropdown.Item>
        </NavDropdown>
    );
};

export default Assets;