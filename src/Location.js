import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function Location() {
    return (
        <div>
            <LocationOnIcon color="secondary" />
           <span className="city">Lusaka, Zambia.</span> 
        </div>
    );
}
