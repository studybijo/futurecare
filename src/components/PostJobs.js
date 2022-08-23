
import React, { useState } from "react";

import { Row, Col, Form, Tabs, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";


const { TextArea } = Input;
const { TabPane } = Tabs;

function PostJobs() {
  return (
    <div>
   
        <Tabs defaultActiveKey="0">
            <TabPane tab='Job Info' key='0'>
                <Form>
                    <Row>
                        <Form.Item name='title' rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                    </Row>
                </Form>
            </TabPane>
            <TabPane tab='Company Info Info' key='1'>
                Company Info
            </TabPane>
      </Tabs>
    </div>
  )
}

export default PostJobs
