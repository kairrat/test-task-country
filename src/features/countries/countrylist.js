import { useNavigate } from 'react-router-dom';

import { List } from '../../components/List';
import { Card } from '../../components/Card';
import useCountry from './use-country';
import React from 'react'

export const CountryList = () => {
  const navigate = useNavigate();
  
  const [countries,{status, error} ] = useCountry()

    return (
        <>
          {error && <h2>Can't fetch data</h2>}
          {status === 'loading' && <h2>Loading...</h2>}
    
          {status === 'recieved' && (
          <List>
            {countries.map((c) => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  },
                ],
              };
    
              return (
                <Card
                  key={c.name}
                  onClick={() => navigate(`/country/${c.name}`)}
                  {...countryInfo}
                />
              );
            })}
          </List>
          )}
        </>
      )
}

