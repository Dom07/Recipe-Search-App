import React from 'react';
import './Recipe.css';
import { Card, Accordion, Col } from 'react-bootstrap';
import Ingredients from '../Ingredients/Ingredients';

const Recipe = (props) => {
    const { label, image, ingredients } = props.recipe;

    return (
        <Col>
        <Card className="Recipe" style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src={image} alt={label} />
            <Card.Body>
                <Card.Title className="DishName" style={{textAlign: "left"}}>
                    {label}
                </Card.Title>
                <Accordion>
                        <Accordion.Toggle as={Card.Title} className="IngredientHeader" variant="link" eventKey={label}>
                            Ingredients
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={label}>
                            <Ingredients as={Card.Title} ingredientsList={ingredients} />
                        </Accordion.Collapse>
                </Accordion>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Recipe;