import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import { Container, Button, Card, Image, Loader,Item } from "semantic-ui-react";

export default function Product() {
  const [item, setitem] = useState([]);
  const [loading, setLoading] = useState(true)
  const fetcher = async () => {
    const { data } = await axios(`https://fakestoreapi.com/products`);
    setitem(data);
    console.log(data);
  };
  useEffect(() => { 
    setTimeout(() => {
      fetcher();
      setLoading(false)
    }, 3000);
      
          
  }, []);

  if(loading){
    return (            
         <Loader active  verticalAlign='middle'/>                 
    )
  }




  return (
    <Container>
      <Card.Group itemsPerRow={4}>
      {item.map((it) => {   
        return (    
          <Card key={it.id}>
            <Card.Content>
              <span size="medium">{it.price}</span>
              <Image centered size="mini" src={it.image} />
              <Card.Header>{it.title}</Card.Header>
              <Card.Meta>{it.category}</Card.Meta>
              <Card.Description>
                {it.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button  inverted color="green">
                  Buy
                </Button>                
              </div>
            </Card.Content>
          </Card>     
      )})}
        </Card.Group>;
    </Container>
  );
}
