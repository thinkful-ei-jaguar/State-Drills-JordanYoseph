import React from 'react';
import './Split.css';

function Split(props){
  const combinedClassName= `split ${props.className}`;
  const newStyles={ flex: props.flexBasis };
  return (
    <div className={combinedClassName} style={newStyles}>
      {props.children}
    This is the content of the split component. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
    </div>
  );
}

export default Split;