import React from 'react';
import SERVICES from '../consts/SERVICES';
import SERVICES_META from '../consts/SERVICES_META';
export const ServiceContext = React.createContext({
    services: SERVICES,
    getMetaForService: (service) => {
        if (SERVICES.includes(service)) {
            return SERVICES_META[service];
        }
    },
    isValidService: (service) => SERVICES.includes(service)
});