import { render } from "@testing-library/react";
import React from "react";
import { Input, Menu } from "semantic-ui-react";
import { useState } from "react";


export default function LayOut() {
    const [state, setState] = useState('')
  
    const handleItemClick = ( name ) =>setState(name)
        
        
     
    return (
      <Menu inverted>
        <Menu.Item 
          name='home'      
          active={state === 'home'}
          onClick={()=>handleItemClick('home')}
        />
        <Menu.Item
          name='messages'       
          active={state === 'messages'}
          onClick={()=>handleItemClick('messages')}
        />
        <Menu.Item
          name='friends'         
          active={state === 'friends'}
          onClick={()=>handleItemClick('friends')}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={state === 'logout'}
            onClick={()=>handleItemClick}
          />
        </Menu.Menu>
      </Menu>
  );
    
}
