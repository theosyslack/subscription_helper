import React, { useState } from 'react';
import { useContext } from 'react';
import SERVICES from '../../consts/SERVICES';
import Select from 'react-select'
import { ServiceContext } from '../../context/ServiceContext';
import './AddService.css';
import { SubscriptionsContext } from '../../context/SubscriptionsContext';

function AddService() {
  const {getMetaForService} = useContext(ServiceContext);
  const {add_current, remove_current, current} = useContext(SubscriptionsContext);
  const [service, updateService] = useState("");
  const [renewalDate, updateRenewalDate] = useState();

  const onFormSubmit = () => {
    add_current({service, renewalDate})
  }

  return (
    <div className="AddService">
      <form className="AddService__form" onSubmit={(e) => {
        e.preventDefault()
        onFormSubmit()
      }}>
        <div className="AddService__field">
          <label className="AddService__field__label" htmlFor="serviceSelect">Select a service </label>
          <Select className="AddService__field__select" id="serviceSelect" options={SERVICES.map(service => {
            const {displayName} = getMetaForService(service);
            return (
              {
                label: displayName,
                value: displayName
              }
            )
          })} onChange={({value}) => updateService(value)}> </Select>
          {/* <select  value={service} onChange={(e) => { updateService(e.target.value) }}>
            <option value="" disabled>Select a service</option>
            {SERVICES.map(service => {
              const {displayName, unsubscribeHref, logoSrc, color} = getMetaForService(service)

              return (
                <option key={`${displayName}-option`} value={service}> {displayName} </option>
              )
            })}
          </select> */}
        </div>
        <div className="AddService__field">
          <label className="AddService__field__label" htmlFor="renewalDate">When's the bill due? </label>
          <input className="AddService__field__input" id="renewalDate" type="date" onChange={(e) => updateRenewalDate(e.target.value)}/> 
        </div>
       
        <button className="AddService__button">+ Add Service</button>
      </form>
    </div>
  );
}

export default AddService;
