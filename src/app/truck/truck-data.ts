import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Truck } from './truck';

export class TruckData implements InMemoryDbService {

    createDb(): { trucks: Truck[] } {
        const trucks: Truck[] = [
            {
                truckId: 1,
                truckName: '363 Joshua',
                dispatch: 'TIM',
                city: 'Pooler',
                state: 'GA',
                when: new Date(2021, 2, 17, 10),
                comments: 'X420/BROKE DOWN'
            },
            {
                truckId: 2,
                truckName: '275/7006 Rikky',
                dispatch: 'Lukas',
                city: 'Alsip',
                state: 'IL',
                when: new Date(2021, 2, 19, 12),
                comments: 'Ext: 419 Lukas truck in shop'
            },
            {
                truckId: 3,
                truckName: '285/7061 RAY',
                dispatch: 'Tim',
                city: 'Atlanta',
                state: 'GA',
                when: new Date(2021, 3, 7, 1),
                comments: 'X420'
            }
        ];
        return { trucks };
    }
}
