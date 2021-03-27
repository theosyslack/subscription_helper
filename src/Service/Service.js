import React from 'react';
import { useContext } from 'react';
import { ServiceContext } from '../context/ServiceContext';
import './Service.css';

function Service({service}) {
  const {getMetaForService} = useContext(ServiceContext);

  const {displayName, logoSrc, color} = getMetaForService(service)

  return (
    <div className="Service" style={{backgroundColor: color}}>
      <div className="Service__logo">
        <img src={logoSrc} />
      </div>
      <div className="Service__name">
        {displayName}
      </div>
       <div className="Service__payByDate">
        Due Mar 18th
      </div>

    </div>
  );
}

export default Service;
