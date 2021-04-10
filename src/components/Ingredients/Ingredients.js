import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const Ingredients = (props) => {
    const ingredients = props.ingredientsList;
    
    const listItmes = ingredients.map(item => {
        return <ListGroup.Item 
                    key={uuidv4()} 
                    style={{fontSize: '1rem', textAlign:'left', margin: '2px 0 4px 0px', padding: '10px 0px 5px 5px', border: '1px solid green'}}>
            <div>{item.text}</div>
            <div>
                <p>Weight: {parseInt(item.weight)} gm(s)</p>
            </div>
        </ListGroup.Item>
    })

    return(
       <ListGroup>
           {listItmes}
       </ListGroup>
    )
}

export default Ingredients;