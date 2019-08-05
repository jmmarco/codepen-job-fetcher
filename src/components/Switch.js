import React from 'react'
import './switch.css'
import PropTypes from 'prop-types'

export default function Switch(props) {
  const { toggleRemote } = props
  return(
    <div className="button-switch">
      <input type="checkbox" id="switch-blue" className="switch" onClick={toggleRemote} />
      <label htmlFor="switch-blue" className="lbl-off">Off</label>
      <label htmlFor="switch-blue" className="lbl-on">On</label>
    </div>
    )
}


Switch.propTypes = {
  toggleRemote: PropTypes.func.isRequired,
}