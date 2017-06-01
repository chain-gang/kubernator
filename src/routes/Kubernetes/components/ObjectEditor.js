import React from 'react'
import PropTypes from 'prop-types'
import './ObjectEditor.scss'

export class ObjectEditor extends React.Component {
  static propTypes = {
    object: PropTypes.object,
    yaml: PropTypes.string.isRequired,
    detachEditor: PropTypes.func.isRequired,
    saveObject: PropTypes.func.isRequired,
    setObjectYaml: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.setObjectYaml(e.target.value)
  }

  render () {
    let { object, yaml, detachEditor, saveObject } = this.props
    return (
      <div>
        <div className='toolbar'>
          {object && <button onClick={detachEditor}>Detach</button>}
          <button onClick={saveObject}>Save</button>
          {object && <span style={{float: 'right'}}>{object.metadata.namespace}/{object.metadata.name} ({object.kind})</span>}
        </div>
        <textarea className='editorArea' value={yaml} onChange={this.handleChange} />
      </div>
    )
  }
}

export default ObjectEditor
