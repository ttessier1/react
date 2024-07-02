import { useContext } from 'react';
import { LevelContext } from './LevelContext.jsx';

export const  Section = ({ children }) => {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        Depth:{level} {children}
      </LevelContext.Provider>
    </section>
  );
}