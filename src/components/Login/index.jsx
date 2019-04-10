import React,{Component} from 'react'
import {Form,Input,Button} from 'antd'
const FormItem=Form.Item
class LoginForm extends Component{
  handleSubmit(e){
    e.preventDefault()
    this.props.form.validateFields((err,values)=>{
      if(!err){
        this.props.onSubmit(values)
      }
    })
  }
  render(){
    const {getFieldDecorator}=this.props.form
    return(
      <div className="inner">
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormItem className="item">
            {
              getFieldDecorator('accesstoken',{
                initialValue:'910e683a-b845-422e-972d-8a240a76688a',
                rules:[{
                  message:'填写信息',
                  required:true
                }]
              })(
                <Input/>
              )
            }
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">login</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
export default Form.create({})(LoginForm)
