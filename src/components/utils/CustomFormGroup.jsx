import { Form } from "react-bootstrap";



const CustomFormGroup = ({label, value}) => {

    return <Form.Group className="mb-3" controlId={label}>
    <Form.Label>{label.charAt(0).toUpperCase() + label.slice(1)}</Form.Label>
    <Form.Control
      placeholder={label.charAt(0).toUpperCase() + label.slice(1)}
      defaultValue={value}
    />
  </Form.Group>
}


export default CustomFormGroup;