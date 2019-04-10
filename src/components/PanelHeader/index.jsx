import React,{Component} from 'react'
import styles from './panelheader.scss'
class PanelHeader extends Component{
  render(){
    return(
      <header className={styles.headers}>
        {this.props.children}
      </header>
    )
  }
}
export default PanelHeader
