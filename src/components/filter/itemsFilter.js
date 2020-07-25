import React from 'react'
import PropTypes from 'prop-types'
import {
  Checkbox,
  Divider,
  ButtonBase
} from '@material-ui/core'

function ItemsFilter ({
  itemsFilter,
  setItemsFilter,
  clearFilters,
  applyFilters
}) {
  const handleClick = item => {
    const newItems = itemsFilter.map(i => {
      if (item.tag === i.tag) {
        return { ...i, checked: !i.checked }
      }
      if (i.tags) {
        return {
          ...i,
          tags: i.tags.map(t => {
            if (item.tag === t.tag) {
              return { ...t, checked: !t.checked }
            }
            return t
          })
        }
      }
      return i
    })
    setItemsFilter(newItems)
  }

  const renderItem = (item, margin) => {
    let component = [
      (
        <div
          style={{ backgroundColor: margin && '#eee' }}
          key={item}
        >
          <div
            style={{
              marginLeft: 10 + margin,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <div>{item.tag}</div>
            <Checkbox
              color="primary"
              onClick={() => handleClick(item)}
              checked={Boolean(item.checked)}
            />
          </div>
          <Divider />
        </div>
      )
    ]
    if (item.tags) {
      component = [...component, ...renderItems(item.tags, 10)]
    }
    return component.map(x => x)
  }

  const renderItems = (items, margin) => {
    return items.map(i => renderItem(i, margin))
  }

  return (
    <div
      style={{ minWidth: 250 }}
    >
      <div
        style={{
          width: '100%',
          height: 90,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        logo
      </div>
      <Divider />
      {renderItems(itemsFilter, 0)}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 20
        }}
      >
        <ButtonBase
          style={{
            fontWeight: 'bold',
            borderRadius: 4,
            border: '1px solid #ddd',
            padding: 5
          }}
          onClick={clearFilters}
        >
          Limpar Filtros
        </ButtonBase>
        <ButtonBase
          style={{
            fontWeight: 'bold',
            borderRadius: 4,
            border: '1px solid #ddd',
            padding: 5
          }}
          onClick={applyFilters}
        >
          Aplicar
        </ButtonBase>
      </div>
    </div>
  )
}

ItemsFilter.propTypes = {
  itemsFilter: PropTypes.array.isRequired,
  setItemsFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func,
  applyFilters: PropTypes.func
}

export default ItemsFilter
