
import { InputGroup, Form, Button } from 'react-bootstrap';

const Explorer = ({

}) => {

    return (
        <div className="d-flex flex-column w-100" style={{height: "256px"}}>

            <div className="d-flex justify-content-between align-items-center p-1 bg-secondary">
                <p>
                    {"/bunker/walls"}
                </p>

                <InputGroup style={{width: "400px"}}>
                    <Form.Control
                        placeholder='filter...'
                    />
                    <Button>
                        {">_"}
                    </Button>
                </InputGroup>

                <Form.Check
                    label="Current folder only"
                />
            </div>
        </div>
    );
};

export default Explorer;