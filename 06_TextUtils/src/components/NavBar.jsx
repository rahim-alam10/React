import React from 'react'
import PropTypes from 'prop-types'

function NavBar(props) {
  return (
    <nav className="bg-gray-400 text-black px-6 py-4">
      <div className="flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          {props.title}
        </a>

        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>

          <a href="#" className="hover:text-gray-200">
            {props.about}
          </a>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 rounded text-black outline-none bg-green-200"
          />

          <button className="bg-blue-600 text-amber-400 px-4 py-1 rounded hover:bg-amber-900">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
    title : PropTypes.string,
    about: PropTypes.string,
}

NavBar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
}


export default NavBar
