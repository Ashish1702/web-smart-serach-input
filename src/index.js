import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const marginProps = {
  none: 'none',
  dense: 'dense',
  normal: 'normal'
}

export default class SmartSearchInput extends Component {
  static propTypes = {
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    FormHelperTextProps: PropTypes.object,
    fullWidth: PropTypes.bool,
    dataList: PropTypes.array,
    id: PropTypes.string,
    InputLabelProps: PropTypes.object,
    InputProps: PropTypes.object,
    inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    label: PropTypes.node,
    margin: PropTypes.oneOf(Object.keys(marginProps)),
    multiline: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    select: PropTypes.bool,
    SelectProps: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.arrayOf, PropTypes.number, PropTypes.string]),
    helperText: PropTypes.node
  }

  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  _handleSearchBoxInput = (e) => {
    const { id } = this.props
    const searchValue = document.getElementById(id).value
    this.setState({value: searchValue})
  }

  render() {
    let {
      autoComplete,
      autoFocus,
      defaultValue,
      disabled,
      error,
      FormHelperTextProps,
      fullWidth,
      dataList,
      id,
      InputLabelProps,
      InputProps,
      inputRef,
      label,
      margin,
      multiline,
      name,
      onChange,
      placeholder,
      required,
      rows,
      rowsMax,
      select,
      SelectProps,
      value,
      helperText
    } = this.props

    console.log('Print Just props ==> ',
      autoComplete,
      autoFocus,
      defaultValue,
      disabled,
      error,
      FormHelperTextProps,
      fullWidth,
      id,
      InputLabelProps,
      InputProps,
      inputRef,
      label,
      margin,
      multiline,
      name,
      onChange,
      placeholder,
      required,
      rows,
      rowsMax,
      select,
      SelectProps,
      value,
      helperText)

    dataList.map((d) => {
      console.log(d['name'])
    })

    return (
      <div>
        <div className={styles.serachBoxField}>
          <input
            id={id}
            className={styles.searchInputBox}
            type='search'
            placeholder='search here ...'
            name='searchresult'
            value={value}
            // onInput={this._handleSearchBoxInput}
            // onChangeCapture={this._handleSearchBoxInput}
            // onInputCapture={this._handleSearchBoxInput}
            onChange={this._handleSearchBoxInput}
          />
          <label htmlFor='searchInput' className={styles.searchInputBoxLabel}>Search Box</label>
        </div>
        <div className={styles.searchSuggestionArea}>
          {'searchResult'}
        </div>
      </div>
    )
  }
}
