import React from 'react'
import PropTypes from 'prop-types'
import { Chip, Button } from '@material-ui/core'

function ChipsFilters({
  filtersSelecteds,
  clearFilters,
  removeFilter
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      {filtersSelecteds.map(f => (<Chip key={f} label={f} onDelete={() => removeFilter(f)} style={{ marginLeft: 5 }} />))}
      {filtersSelecteds.length > 0 &&
        <Button
          style={{
            textTransform: 'none',
            color: 'white',
            textDecoration: 'underline'
          }}
          variant="text"
          onClick={() => clearFilters()}
        >Limpar Filtros</Button>}
    </div>
  )
}

ChipsFilters.propTypes = {
  itemsFilter: PropTypes.array.isRequired,
  clearFilters: PropTypes.func,
  removeFilter: PropTypes.func
}

export default ChipsFilters
