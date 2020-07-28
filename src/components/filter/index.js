import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu } from '@material-ui/icons'
import {
  Drawer,
  IconButton,
  NativeSelect
} from '@material-ui/core'

import ItemsFilter from './itemsFilter'
import ChipsFilters from './chipsFilters'
import CustomInput from './customInput'

function Filter ({
  items
}) {
  const [open, setOpen] = useState(false)
  const [itemsFilter, setItemsFilter] = useState(items ?? [])
  const [filtersSelecteds, setFiltersSelecteds] = useState([])

  const clearFilters = async () => {
    const newItems = itemsFilter.map(i => {
      if(i.tags){
        return { ...i, checked: false, tags: i.tags.map(x => ({...x, checked: false })) }
      }
      return { ...i, checked: false }
    })
    setItemsFilter(newItems)
    setFiltersSelecteds([])
  }

  const applyFilters = () => {
    let filter = []

    itemsFilter.forEach(i => {
      if (i.checked) {
        filter = [...filter, i.tag]
      }
      if (i.tags) {
        i.tags.forEach(ii => {
          if (ii.checked) {
            filter = [...filter, ii.tag]
          }
        })
      }
    })
    setOpen(false)
    setFiltersSelecteds(filter)
  }

  const removeFilter = filter => {
    const newItems = itemsFilter.map(f => {
      if(f.tags){
        f.tags.forEach(ff => removeFilter(ff))
      }
      if(f.tag === filter){
        return {... f, checked: false}
      }
      return f
    })
    setItemsFilter(newItems)
  }

  return (
    <div
      style={{
        minHeight: 40,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => setOpen(true)}>
          <Menu style={{ color: '#fff' }} />
        </IconButton>
        <ChipsFilters
          filtersSelecteds={filtersSelecteds}
          setItemsFilter={setItemsFilter}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />
      </div>
      <NativeSelect
        input={<CustomInput />}
        style={{ paddingRight: 0 }}
        inputProps={{ style: { paddingRight: 0 } }}
      >
        <option value="">Ordenação</option>
        <option value="nome-asc">A-z</option>
        <option value="nome-desc">Z-a</option>
        <option value="valor-asc">Menor Valor</option>
        <option value="valor-desc">Maior Valor</option>
      </NativeSelect>
      <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
        <ItemsFilter
          itemsFilter={itemsFilter}
          setItemsFilter={setItemsFilter}
          clearFilters={clearFilters}
          applyFilters={applyFilters}
        />
      </Drawer>
    </div>
  )
}

Filter.propTypes = {
  items: PropTypes.array.isRequired
}

export default Filter
