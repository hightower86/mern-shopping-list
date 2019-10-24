import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

export default class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'Eggs' },
      { id: uuid(), name: 'Milk' },
      { id: uuid(), name: 'Meat' },
      { id: uuid(), name: 'Brokkoli' },
      { id: uuid(), name: 'Bread' }
    ]
  };
  render() {
    const { items } = this.state;
    //console.log(items);
    return (
      <Container>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Item');
            this.setState(state => ({
              items: [...state.items, { name: name, id: uuid() }]
            }));
          }}
        >
          Add Item
        </Button>

        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ id, name }) => (
              <CSSTransition
                key={id}
                timeout={500}
                classNames='fade'
                className='mb-1'
              >
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
