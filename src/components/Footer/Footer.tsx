import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-center font-sans text-sm py-4">
      <span>
        Data provided by
      </span>
      &nbsp;
       <span data-testid="footerLabelCompany">
       Marvel.
       </span>
       &nbsp;
       <span>
        ©
       </span>
       &nbsp;
       <span data-testid="footerLabelYear">
       2014
       </span>
       &nbsp;
       <span>
        Marvel
       </span>
    </div>
  )
}

export default Footer