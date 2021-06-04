import React from 'react';
import './Tab.css';

type TabProps = {
    isActive: boolean,
    title: string,
    clickedTab: (name: string) => void;
}

const Tab = ({ isActive, title, clickedTab }: TabProps) => (
        <div 
            className={`tab ${isActive ? "active" : ""}`}
            onClick={() => clickedTab(title)}
            >{title}</div>
);

export default Tab;
