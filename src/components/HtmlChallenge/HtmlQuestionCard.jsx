import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';

const HtmlQuestionCard = (props) => {
    return (
        <>
            <div className='col-12 me-2 mt-2 shadow' style={{ width: '25rem' }}>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label ClassName="h2" ><span>{props.id}.</span>   {props.question}</Form.Label>

                        <Form.Group>
                            <textarea className='form-label border-success rounded' name='textMessage' type='text' placeholder='Type your answer here' style={{ width: '25rem' }}>

                            </textarea>
                        </Form.Group>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>

                </Form>

            </div>
        
        </>
    )
}
export default HtmlQuestionCard;