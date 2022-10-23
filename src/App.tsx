import React from 'react';
import { useState, useEffect } from 'react';
import Converter from './components/Converter';
import { Container, Card, CardBody } from 'reactstrap';
import getCountries, { Currency } from './utils/getCountries';

function App() {
  const [currs, setCurrs] = useState<Currency[]>([]);

  useEffect(() => {
    getCountries().then((response) =>
      setCurrs(response)
    );
  })

  return (
    <Container className="text-center">
      <Card className="mt-5">
        <CardBody>
          <h1 className="card-title">Currency converter</h1>
          <h5 className="card-subtitle mb-5">Automatically convert between two currencies</h5>
          <Converter 
            currencies={currs}
          />
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
