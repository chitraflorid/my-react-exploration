import React from "react";
import AccordionTitle from './AccordionTitle';
import AccordionItem from './AccordionItem';

const Accordion = () => {    
    const data = {
        title: "TEST ACCORDION",
        list: [
            {
                id: 101,
                title: "ACC - 1",
                text: "ewqweqweqweqweqweqweqweqweqweqfsdfdsfsfdsfrwewetwtweweRR"
            },
                {
                id: 102,
                title: "ACC - 2",
                text: "ewqweqweqweqweqweqweqweqweqweqfsdfdsfsfdsfrwewetwtweweRR"
            },
                {
                id: 103,
                title: "ACC - 3",
                text: "ewqweqweqweqweqweqweqweqweqweqfsdfdsfsfdsfrwewetwtweweRR"
            },
        ]
    };
    const titleClass = 'accordion-title';
    
  return (
      <ul>
        <li key='0'>
            <AccordionTitle title={data.title} class={titleClass} />
      </li>
        {
            data.list.map(item => {
            return (
                <li key={item.id}>
                    <AccordionItem id={item.id} title={item.title} text = {item.text} />
      </li>
            );
      })
      }
        
      </ul>
);

  };

export default Accordion;
