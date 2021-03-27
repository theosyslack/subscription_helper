import React, { useEffect, useState } from 'react';
import { DISNEY_PLUS, HULU, NETFLIX, PARAMOUNT_PLUS } from '../../consts/SERVICES';
import { SubscriptionsContext } from '../../context/SubscriptionsContext';
import AddService from '../AddService/AddService';
import Service from '../Service/Service';

const get_current = () => JSON.parse(localStorage.getItem("current_subscriptions")) || []
const getServiceForDisplayName = (displayName) => {
  switch(displayName) {
    case "Netflix":
      return NETFLIX;
    case "Hulu":
      return HULU;
    case "Paramount+":
      return PARAMOUNT_PLUS
    case "Disney+":
      return DISNEY_PLUS
  }
}


const Test = (props) => {
  return (
    <pre>
      {JSON.stringify(props)}
    </pre>
  )
}

function SubscriptionContainer() {
  const [current, updateCurrent] = useState(get_current());

  useEffect(() => {
    localStorage.setItem("current_subscriptions",  JSON.stringify(current))
  }, [current])

  const add_current = (subscription) => {
    const old = _filter(subscription)
    console.log(old)
    updateCurrent([subscription, ...old])
  }

  const _filter =  (subscription) => current.filter(current_sub => current_sub.service !== subscription.service)

  const remove_current = (subscription) => {
    const new_current = _filter(subscription)
    updateCurrent(new_current)
  }

  return (
    <SubscriptionsContext.Provider value={
      {
        current,
        add_current,
        remove_current
      }
    }>
      <SubscriptionsContext.Consumer>
        {
          ({current, add_current, remove_current}) => (
            <>
              <AddService {...{add_current, remove_current}}/>
              {current.map(({service, renewalDate}) => {
                return (
                  <Service key={`service-${service}`} service={getServiceForDisplayName(service)} renewalDate={renewalDate} />
                )
              })}
            </>
          )
        }
      </SubscriptionsContext.Consumer>

    </SubscriptionsContext.Provider>
  );
}

export default SubscriptionContainer;
