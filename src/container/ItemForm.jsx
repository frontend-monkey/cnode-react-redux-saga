import React,{Component} from 'react'
import {
  Form,
  Select,
  Input,
  Button,
  Row,
  Col
}from 'antd'
import BraftEditor from 'braft-editor'
const FormItem=Form.Item;
const {Option}=Select
 const formItemLayout={
     labelCol:{
       xs:{span:2}
     },
     wrapperCol:{
       xs:{
         span:22

       }
     }
   }

class FormDemo extends Component {

  componentDidMount () {
      // 异步设置编辑器内容
      setTimeout(() => {
        this.props.form.setFieldsValue({
          content: BraftEditor.createEditorState()
        })
      }, 300)

    }
    normFile(e) {
      console.log(e,111111111111111111111111111)
        if (Array.isArray(e)) {
          return e
        }
        return e && e.fileList
      }
 handleSubmit = (event) => {
   event.preventDefault()
   this.props.form.validateFields((error, values) => {
     console.log(values)
     if (!error) {
       const submitData = {
         tab:values.tab,
         title: values.title,
         content: values.content.toHTML()//values.content.toRAW()
       }
       this.props.onSubmit(submitData)
     }
   })

 }

  render () {
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
    const { getFieldDecorator } = this.props.form
    return (
      <div className="demo-container">
        <Form onSubmit={this.handleSubmit} >
          <FormItem label="选择模块" {...formItemLayout} className="item" >
            <Row>
              <Col span={8}>
                {
                  getFieldDecorator('tab',{
                    initialValue:'dev',
                    rules:[{
                      required:true
                    }]
                  })(
                    <Select>
                      <Option value="dev">测试模块</Option>
                      <Option value="问答">问答</Option>
                      <Option value="分享">分享</Option>
                    </Select>
                  )
                }
              </Col>
            </Row>
          </FormItem>
          <FormItem className="item">
            {getFieldDecorator('title',{
              initialProps:'akla',
              rules:[
                {
                  min:11,
                  message:'长度不能低于11个字'
                }
              ]
            })(
              <Input placeholder="标题需在10个字以上"/>
            )}
          </FormItem>
          <FormItem className="item" >
            {getFieldDecorator('content', {
              validateTrigger: 'onBlur',
              rules: [{
                validator: (_, value, callback) => {
                  if (value.isEmpty()) {
                    callback('请输入正文内容')
                  } else {
                    callback()
                  }
                }
              }],
            })(
              <BraftEditor contentClassName="newEditor" excludeControls={excludeControls} placeholder="请输入正文内容" contentStyle={{boxShadow:'none'}}/>
            )}
          </FormItem>
          <FormItem className="item">
            <Button size="large" type="primary" htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    )

  }

}

export default Form.create()(FormDemo)
