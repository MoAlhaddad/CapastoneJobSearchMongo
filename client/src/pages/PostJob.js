import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { postJob } from "../redux/actions/jobActions";
const { TextArea } = input;
const { TabPane } = Tabs;
const { Option } = Select;
function PostJob() {
  const [jobInfo, setJobInfo] = useState({});
  const [activeTab, setActiveTab] = useState("0");
  const dispatch = useDispatch()
  function onFirstFormFinish(values) {
    setJobInfo(values);
    setActiveTab("1");
  }
  function onFinalFormFinish(values){
    const finalObj = {...jobInfo , ...values};
    console.log(finalObj)
    dispatch(postJob(finalObj))
  }
  return (
    <div>
      <DefaultLayout>
        <Tabs defaultActiveKey="0" activeKey={activeTab}>
          <TabPane tab="Job info" kay="0">
            <Form layout="vertical" onFinish={onFirstFormFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.item
                    name="title"
                    rules={[{ required: true }]}
                    label="Title"
                  >
                    <Input />
                  </Form.item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.item
                    name="minSalary"
                    rules={[{ required: true }]}
                    label="Min Salary"
                  >
                    <Input type="number" />
                  </Form.item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.item
                    name="maxSalary"
                    rules={[{ required: true }]}
                    label="Max Salary"
                  >
                    <Input type="number" />
                  </Form.item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col lg={24} sm={24}>
                  <Form.item
                    name="Description"
                    rules={[{ required: true }]}
                    label="Description"
                  >
                    <TextArea rows={3} />
                  </Form.item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col lg={24} sm={24}>
                  <Form.item
                    name="Country"
                    rules={[{ required: true }]}
                    label="Country"
                  >
                    <TextArea rows={3} />
                  </Form.item>
                </Col>
              </Row>

              <Button htmlType="submit">Next</Button>
            </Form>
          </TabPane>
          <TabPane tab="Company" key="1">
            <Form layout='vertical' onFinish={onFinalFormFinish}>
              <Row>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="company"
                    label="Company Name"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button onClick={()=>{setActiveTab("0")}}>Previous</Button>
              <Button htmlType="submit">Post Job</Button>
            </Form>
          </TabPane>
        </Tabs>
      </DefaultLayout>
    </div>
  );
}

export default PostJob;
