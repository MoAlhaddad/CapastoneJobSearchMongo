import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {useSelector , useDispatch } from 'react-redux'
import {Table} from 'antd'

// function PostedJobs() {
//     const alljobs = useSelector(state=>state.jobsReducer).jobs
//     const userid = JSON.parse(localStorage.getItem('user'))._id
//     const userPostedJobs = alljobs.filter(job=>job.postedBy==userid) ///need to add postedBy attribute in mongo db for jobs query

//     const columns = [
//         { 
//             title: "Title",
//             dataIndex: "title",
//     },
//     {
//        title: "Company",
//        dataIndex: "company",
//     },
//     {
//         title: "Country",
//         dataIndex: "country"
//     },
// //     {
// //         title: "Posted On",
// //         dataIndex: "postedOn",
// //     },                             Need to add Posted on attribute in mongodb for jobs query
//     ];

//     const dataSource = []

//     for(var job of userPostedJobs){

//         var obj = {
//             title: job.title,
//             company: job.company,
//             postedOn: moment(job.createdAt).format('MM DD yyyy'),
//             appliedCandiates : job.appliedCandidates.length
            
//         }
//         dataSource.push(obj);
//     }

//     console.log(userPostedJobs)
//   return (
//     <div>
//         <DefaultLayout>
//             <h1>Posted Jobs</h1>

//             <Table columns={columns} dataSoure={dataSource} />
//         </DefaultLayout>
//     </div>
//   )
// }

// export default PostedJobs