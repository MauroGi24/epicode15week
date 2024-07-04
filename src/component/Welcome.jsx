import Alert from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';

function Welcome() {
  return (
    <>
      {[
        'secondary',
      ].map((variant) => (
        <Container className='mb-5'>
        <Alert className='text-center' key={variant} variant={variant}>
          Welcome To Epic Books 
        </Alert>
        </Container>
      ))}
    </>
  );
}

export default Welcome;