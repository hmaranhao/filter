import React from 'react'
import PropTypes from 'prop-types'
import { Chip } from '@material-ui/core'

function ChipsFilters ({
  filtersSelecteds,
  setItemsFilter,
  clearFilters
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      {filtersSelecteds.map(f => (<Chip key={f} label={f} onDelete={() => {}} style={{ marginLeft: 5 }} />))}
    </div>
  )
}

ChipsFilters.propTypes = {
  itemsFilter: PropTypes.array.isRequired,
  setItemsFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func
}

export default ChipsFilters
