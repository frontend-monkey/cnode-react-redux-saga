import React from 'react'
import BraftEditor from 'braft-editor'
class Editor extends React.Component {
render(){

  const excludeControls = [
      'letter-spacing',
      'line-height',
      'clear',
      'headings',
      'list-ol',
      'list-ul',
      'remove-styles',
      'superscript',
      'subscript',
      'hr',
      'text-align',
      'media'
    ]
  return (<BraftEditor contentClassName="newEditor" excludeControls={excludeControls} placeholder="请输入正文内容" contentStyle={{boxShadow:'none'}}/>)
}
}

export default Editor
