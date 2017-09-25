import '../../stylesheets/Menu.scss'
import {PropTypes} from 'react'
import {sortOptions} from '../../constants'

const SortMenu = ({sort=sortOptions.date,onSelect=(f) => f}) =>
  <nav className="menu">
    <h1>Sort Colors</h1>
    {Object.keys(sortOptions).map((item,i) =>
      <a key={i}
        href="#"
        className={sort === sortOptions[item] 
          ? 'selected'
          : null}
        onClick={(e) => {
          e.preventDefault()
          onSelect(sortOptions[item])
        }}>{item}</a>)}
  </nav>

SortMenu.propTypes = {
  onSelect: PropTypes.func,
  sort: PropTypes.string
}

export default SortMenu