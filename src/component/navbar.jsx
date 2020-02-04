import React from 'react';

// Stateless Funchional Component

const NavBar = ({ totalCounters }) => {
  return ( 
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand text-white">NavBar {" "} 
        <span className="badge badge-pill badge-primary">
          {totalCounters}
        </span>
      </a>
    </nav>
   );
};


// import React, { Component } from 'react';

// class NavBar extends Component {
 
//   render() { 
//     return ( 
//       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//         <a className="navbar-brand">NavBar {" "} 
//           <span className="badge badge-pill badge-primary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>

//      );
//   }
// }
 
export default NavBar;