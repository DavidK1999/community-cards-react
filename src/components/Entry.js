import React from 'react';
import { Grid, Header, Button, Form } from 'semantic-ui-react';
import Authenticate from '../hooks/Authenticate';



const Entry = () => {
    const { handleInputChange, handleSubmit } = Authenticate();

    return (
        <Grid columns={2} textAlign="left" id="entry-grid">
        <Grid.Row>
          <Grid.Column id="left">
            <Header as="h3">Follow your interests.</Header>
            <Header as="h3">See what people are talking about.</Header>
            <Header as="h3">Join the conversation.</Header>

          </Grid.Column>
          <Grid.Column id="right">
          <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
            <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                placeholder='Username'
                onChange={handleInputChange}
            />
            <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                placeholder='Password'
                onChange={handleInputChange}
            />
            <Button>Log in</Button>
            </Form.Group>
          </Form>
          <Header as="h2">See what's happening in the world right now.</Header>
            <p>Join Community Cards today.</p>
            <Button>Log in</Button>
            <Button>Register</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
}
 
export default Entry;