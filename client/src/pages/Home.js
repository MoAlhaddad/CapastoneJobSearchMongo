import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../redux/actions/jobActions";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

function Home() {
  const { jobs } = useSelector((state) => state.jobsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  return (
    <div>
      <DefaultLayout>
        <Row gutter={16}>
          {jobs.map((job) => {
            return (
              <Col lg={12} sm={24}>
                <div className="job-div bs m-2 p-2">
                  <h4>{job.job_title}</h4>
                  <p>{job.country}</p>
                  <p>{job.company_name}</p>
                  <hr />
                  <p>{job.description}</p>
                  <div className="flex">
                    <p>
                      Salary :{" "}
                      <b>
                        {job.min_salary} - {job.max_salary}
                      </b>
                    </p>
                  </div>
                  <hr />

                  <div className="flex justify-content-between">
                    <Link to={`/jobs/${job._id}`}>
                      <Button>View</Button>
                    </Link>
                    <p>
                      Posted on: {moment(job.createdAt).format("DD-MM-YYYY")}
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </DefaultLayout>
    </div>
  );
}

export default Home;
