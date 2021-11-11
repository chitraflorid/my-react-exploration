import React, {useState} from 'react';
import ExpandCollapser from './common/ExpandCollapser';
import AccordionTitle from './AccordionTitle';


const AccordionItem = (({title, text, id}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = isExpanded ? "show-content" : "hide";
  
    
  const handleClick = (e) => {
      setIsExpanded(!isExpanded);
  };
    
    
  return (
    <>
        <AccordionTitle title = {title} className='accordion-title'></AccordionTitle>
        <div className={toggleContent}>
            {text}
        </div>
        <ExpandCollapser isExpanded={isExpanded} id={id} handleClick={handleClick}></ExpandCollapser>
    </>
  );
    
});

export default AccordionItem;