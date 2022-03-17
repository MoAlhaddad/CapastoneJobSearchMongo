import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button } from "antd";
import { useDispatch } from "react-redux";
const { TextArea } = input;
const { TabPane } = Tabs;
function Profile() {
  const [personalInfo, setPersonalInfo] = useState();
  const [activeTab, setActiveTab] = useState("1");
  const dispatch = useDispatch();
  function onPersonInfoSubmit(values) {
    setPersonalInfo(values);
    console.log(values);
    setActiveTab("2");
  }

  function onFinalFinish(values) {
    const finalObj = { ...personalInfo, ...values };

    console.log(finalObj);

    dispatch(updateUser(finalObj));
  }

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <DefaultLayout>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Personal Info" key="1">
            <Form
              layout="vertical"
              onFinish={onPersonInfoSubmit}
              initialValues={user}
            >
              <Row>
                <Col lg={8} sm={24}>
                  <Form.item
                    label="First name"
                    required
                    rules={[{ required: true }]}
                    name="firstName"
                  >
                    <Input />
                  </Form.item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.item
                    label="Last name"
                    required
                    rules={[{ required: true }]}
                    name="lastName"
                  >
                    <Input />
                  </Form.item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.item
                    label="Email"
                    required
                    rules={[{ required: true }]}
                    name="email"
                  >
                    <Input />
                  </Form.item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.item
                    label="Mobile Number"
                    required
                    rules={[{ required: true }]}
                    name="mobileNumber"
                  >
                    <Input />
                  </Form.item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.item
                    label="Portifolio"
                    required
                    rules={[{ required: true }]}
                    name="portifolio"
                  >
                    <Input />
                  </Form.item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.item
                    label="About"
                    required
                    rules={[{ required: true }]}
                    name="about"
                  >
                    <TextArea rows={4} />
                  </Form.item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.item
                    label="Address"
                    required
                    rules={[{ required: true }]}
                    name="address"
                  >
                    <TextArea rows={4} />
                  </Form.item>
                </Col>
              </Row>
              <Button htmlType="submit">Next</Button>
            </Form>
          </TabPane>
          <TabPane tab="Skills and Education" key="2">
            <Form
              initialValues={user}
              layout="vertical"
              onFinish={onFinalFinish}
            >
              <Row>
                <Col lg={24} sm={24}>
                  <Form.List name="education">
                    {(education, { add, remove }) => (
                      <div>
                        {education.map((field, index) => (
                          <div className="flex">
                            <Form.Item
                              {...field}
                              label="Education"
                              style={{ width: "80%" }}
                              rules={[{ required: true }]}
                            >
                              <TextArea rows={4} />
                            </Form.Item>
                            <Button
                              onClick={() => {
                                add();
                              }}
                            >
                              Add more
                            </Button>

                            {index !== 0 && (
                              <Button
                                onClick={() => {
                                  remove(index);
                                }}
                              >
                                Delete
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </Form.List>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.List name="skills">
                    {(skills, { add, remove }) => (
                      <div>
                        {skills.map((field, index) => (
                          <div className="flex">
                            <Form.Item
                              {...field}
                              label="Skills"
                              style={{ width: "80%" }}
                              rules={[{ required: true }]}
                            >
                              <TextArea rows={4} />
                            </Form.Item>
                            <Button
                              onClick={() => {
                                add();
                              }}
                            >
                              Add more
                            </Button>

                            {index !== 0 && (
                              <Button
                                onClick={() => {
                                  remove(index);
                                }}
                              >
                                Delete
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </Form.List>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.List name="experience">
                    {(experience, { add, remove }) => (
                      <div>
                        {experience.map((field, index) => (
                          <div className="flex">
                            <Form.Item
                              {...field}
                              label="Experience"
                              style={{ width: "80%" }}
                              rules={[{ required: true }]}
                            >
                              <TextArea rows={4} />
                            </Form.Item>
                            <Button
                              onClick={() => {
                                add();
                              }}
                            >
                              Add more
                            </Button>

                            {index !== 0 && (
                              <Button
                                onClick={() => {
                                  remove(index);
                                }}
                              >
                                Delete
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </Form.List>
                </Col>
              </Row>
              <Button
                onClick={() => {
                  setActiveTab("1");
                }}
              >
                Previous
              </Button>
              <Button htmlType="submit">Update</Button>
            </Form>
          </TabPane>
        </Tabs>
      </DefaultLayout>
    </div>
  );
}

export default Profile;
