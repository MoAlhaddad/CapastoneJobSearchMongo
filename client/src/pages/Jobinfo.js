import { Button } from 'antd';
import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'


function Jobinfo() {
  const {jobs} = useSelector(state=>state.jobsReducer)

  const job = jobs.find(job=>job._id == match.params.id)

  return (   
     <div>
      <DefaultLayout>
        {job && ( <div>
          <p> <b>title</b>: {job.title} </p>
          <p> <b>Company</b>: {job.company_name}</p>
          <p> <b>Description</b>: {job.description}</p>
          <p> <b>Country</b>: {job.country}</p>
          <p> <b>Min Salary</b>: {job.min_salary} </p>
          <p> <b>Max Salary</b>: {job.max_salary}</p>
          <hr />
          <div className="flex justify-content-between">
            <Button>Apply Now</Button>
            </div>
            </div>)}
      </DefaultLayout>
    </div>
  );
}

export default Jobinfo;
