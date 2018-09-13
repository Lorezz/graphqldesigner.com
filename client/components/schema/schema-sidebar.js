import React from 'react';
import TableDetails from './table-details.js'
import Sidebar from './../sidebar/sidebar.js'

const SchemaSidebar = props => {
  return (
    <div className = "schema-sidebar-container">
      {/* <h4>Create Table</h4> */}
      <Sidebar />
      <TableDetails/>
    </div>
  )
};

export default SchemaSidebar;