import React from 'react';

const Country = (props) => {
    const { name, population, region, flag } = props.country;
    const flagStyle = { height: '50px' }
    const countyrStyle={border:'1px solid salmon', padding: '10px', margin: '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countyrStyle}>
            <h4>this is country:{name}</h4>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;