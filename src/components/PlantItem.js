import React from 'react';
import CareScale from './CareScale'
import '../styles/PlantItem.css'

const PlantItem = ({id, cover, name, water, light}) => {
    return (
            <li key={id} className='lmj-plant-item' onClick={() =>handleClick(name)}><img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover' />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>
            </li>
    );
};

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix`)
}

export default PlantItem;