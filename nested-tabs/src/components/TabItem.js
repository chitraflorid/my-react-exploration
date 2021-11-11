import React, {useState, useEffect} from 'react';
import TabList from './TabList';

function TabItem({ parent, tab, currentClass }) {
        const [currentTab, setCurrent] = useState(currentClass || "collapsed");
    
       function handleToggle(e) {
        setCurrent("expand");
    }
    
    function createTree() {
        if (tab.children && tab.children.length > 0) {
            return (
                <li key={tab.id} onClick={handleToggle} className="pointer"><a href="javascript:void(0);">{tab.name}</a>
                   <TabList parent={tab.id} currentClass = {currentTab}  data = {tab.children} />
                </li>
                );
        } else {
            return <li key={tab.id}>{tab.name}</li>
    
        }
 
}

    
    return (
        <React.Fragment>
            { createTree() }
        </React.Fragment>
    );
}

export default TabItem;
