import React from 'react'
import React from 'react';

function Start({
  value,
  handleClick
});
{
const onClick = () => {
  alert('ClICKED A STAR!')
}
  return (
    <div>
      <span
        className="Star"
        onClick= { () => handleClick(value)}
      >Stars</span>
    </div>
  )
}

export default Start;

