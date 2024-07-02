import { useContext } from 'react';
import { LevelContext } from './LevelContext.jsx';

export const Heading = ({ children }) => {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <><p>Header Depth{level}</p><h1>{children}</h1></>;
    case 2:
      return <><p>Header Depth{level}</p><h2>{children}</h2></>;
    case 3:
      return <><p>Header Depth{level}</p><h3>{children}</h3></>;
    case 4:
      return <><p>Header Depth{level}</p><h4>{children}</h4></>;
    case 5:
      return <><p>Header Depth{level}</p><h5>{children}</h5></>;
    case 6:
      return <><p>Header Depth{level}</p><h6>{children}</h6></>;
    default:
      throw Error('Unknown level: ' + level);
  }
}
