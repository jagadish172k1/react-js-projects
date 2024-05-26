//import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
//import { isHtmlElement } from 'react-router-dom/dist/dom';
import Select from 'react-select';
import './Page2.css'

//import Menu from './map';

const options = [
{
        deptId:1,
        deptName:"ENT",
        doctorId:1,
        doctorName:"name1",
        slotAvailability:{
          startTime:9,
          stopTime:18,
          interval:15
        }
      },
      {
        deptId:2,
        deptName:"Dermatology",
        doctorId:2,
        doctorName:"name2",
        slotAvailability:{
          startTime:3,
          stopTime:20,
          interval:20
        }
      },
      {
        deptId:1,
        deptName:"ENT",
        doctorId:3,
        doctorName:"name3",
        slotAvailability:{
          startTime:3,
          stopTime:20,
          interval:15
        }
      },
      {
        deptId:3,
        deptName:"Physical",
        doctorId:4,
        doctorName:"name4",
        slotAvailability:{
          startTime:9,
          stopTime:18,
          interval:15
        }
      }
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dept,setDept]=useState([])
  const [doctornames,setDoctornames]=useState([])
   const [dropdownselect,setDropdownselect]=useState([])
  useEffect(()=>{
    let uniqdeptname=[];
    let deptList=[...new Map(options.map((item)=>[item["deptName"],item])).values(),]
    deptList.map((item)=>{
        
        uniqdeptname.push({
           value:item.deptId,label:item.deptName
           
        })
    })
    
    //console.log(deptList)
    setDept(uniqdeptname)
  },[])

let [doctornamefil,setDoctornamefil]=useState([])
useEffect(()=>{
    let uniqdocname=[]
    let docname=[...new Map(options.map((item)=>[item["doctorName"],item])).values(),]
    docname.map((item)=>{
        
        uniqdocname.push({
           value:item.doctorId,label:item.doctorName
           
        })
    })
    
    //console.log(docname)
    setDoctornames(uniqdocname)
  },[])
  let [docfill,setDocfill]=useState([]);
  function handleSelect(val){
    //setDoctornames(doctornamefil)
    setSelectedOption(val)
    let filtered= options.filter(item=>item.deptId===val.value)
    console.log(filtered)
    //console.log(doctornamefil);
    //setDoctornames(doctornamefil)
    let uniqdocnamefil=[]
    let docnamefil=[...new Map(filtered.map((val)=>[val["doctorName"],val])).values(),]
    setDoctornames(doctornamefil)
    docnamefil.map((val)=>{
        
        uniqdocnamefil.push({
           value:val.doctorId,label:val.doctorName
           
        })
    })
  
    console.log(uniqdocnamefil)
  
    setDoctornames(uniqdocnamefil)
    
  }
  /*}

    function handle(){
    let uniqdocnamefil=[]
    let docnamefil=[...new Map(docfill.map((val)=>[val["doctorName"],val])).values(),]
    docnamefil.map((val)=>{
        
        uniqdocnamefil.push({
           value:val.doctorId,label:val.doctorName
           
        })
    })
  
    console.log(uniqdocnamefil)
    setDoctornamefil(uniqdocnamefil)

  }*/
  return (
    <div className="back">
      <Select
        defaultValue={selectedOption}
        onChange={handleSelect}
        options={(dept)}
        placeholder={"Select The Department"}
      className="back"
      />
      <Select
      defaultValue={dropdownselect}
      options={doctornames}
      placeholder="Select The Doctor"
      className='back'

      />
    </div>
  );
}