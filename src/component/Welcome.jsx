import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function Welcome() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading className='text-center'>Welcome To Epic Books</Alert.Heading>
      </Alert>
    );
  }
}

export default Welcome;