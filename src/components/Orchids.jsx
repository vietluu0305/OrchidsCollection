// src/components/Orchids.jsx

import React from 'react';
import { OrchidsData } from '../data/ListOfOrchids';
import OrchidsPresentation from './OrchidsPresentation';

export default function Orchids() {
    const orchids = OrchidsData;
    return (
        <OrchidsPresentation orchids={orchids} />
    );
}