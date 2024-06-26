import { useState } from 'react'
import {Avatar} from './Avatar.jsx';
import './App.css'

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  );
}


export const Profile = (props) => {
  return (
    <div>
      <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      </Card>
      <Card>
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      </Card>
      <Card>
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      </Card>
    </div>

  );
}
