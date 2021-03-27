import React from 'react';
import { useContext } from 'react';
import { ServiceContext } from '../../context/ServiceContext';
import './Service.css';

function Service({service, renewalDate}) {
  const {getMetaForService} = useContext(ServiceContext);

  const {displayName, unsubscribeHref, logoSrc, color} = getMetaForService(service)

  const displayRenewalDate = (() => {
    const date = new Date(renewalDate);

    return `${date.getMonth() + 1}/${date.getDate()}`
  })();

  return (
    <div className="Service" style={{backgroundColor: color}}>
      <div className="Service__logo">
        <img src={logoSrc} alt="" />
      </div>
      <div className="Service__name">
        {displayName}
      </div>
      {
        renewalDate && (
          <div className="Service__renewalDate">
            Due {displayRenewalDate}
          </div>
        )
      }
      <div className="Service__ctas">
        {unsubscribeHref && <a className="Service__cta" href={unsubscribeHref} target="_blank" rel="noreferrer" >Unsubscribe</a>}
        <a className="Service__cta" target="_blank" rel="noreferrer" >Remind Me</a>
      </div>
    </div>
  );
}

export default Service;
