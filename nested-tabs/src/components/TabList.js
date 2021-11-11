import React, {useState} from 'react';
import TabItem from './TabItem';


function TabList({data, currentClass }) {

 
      return (
        <ul className={currentClass}>
        {
            data.map(tab => <TabItem  currentClass={currentClass}  key={tab.id} tab={tab} />)
        }
      </ul>
);
}

export default TabList;
