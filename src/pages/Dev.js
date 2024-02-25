// Properties.js
import React, { useState } from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import Dev from '../components/Dev';

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleButtonClick = () => {
    // You can add your search logic here
    console.log('Search button clicked');
  };

  return (
    <div className="content13">
      <div className="bg-blue text-white new-project d-flex align-items-center">
        <h2 className="container7">Real Estate Developers in Dubai</h2>
      </div>

      <Container className="mt-3">
        <Form className="d-flex">
          <FormControl
            type="text"
            placeholder="Search by property name..."
            className="search-bar2"
            style={{ width: '80%' }}
            onChange={handleSearch}
          />
          <Button variant="primary" onClick={handleButtonClick} className="custom-search-button">
          Search
          </Button>
        </Form>
      </Container>

      <section className="pyk">
        <Dev searchQuery={searchQuery} />
      </section>
    </div>
  );
};

export default Properties;
