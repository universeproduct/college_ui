import React, { useState } from 'react'

const DepartmentScreen = () => {
    const [deptData, setDeptData] = useState({deptCode: '',deptName: ''});
      // ================================== Handles Dynamic Textbox Values ============================
        const handleDept = (e) => {
            const { name, value } = e.target;
            setDeptData((prevData) => ({
            ...prevData,
            [name]: value
            }));
        };
        // ================================== Handles Adding the Dept to DB============================
        const handleSumbit=()=>{
            if(deptData.deptCode.length<5|| !deptData.deptCode){
                alert("*Department Code must Be 5 Numbers")}
            else if(!deptData.deptName){
                alert("*Department Name required")
            }
            else{
                let confirmation=confirm(`Adding ${deptData.deptName}, Press ok to confirm `)
                if(confirmation){
                    alert(`${deptData.deptName} has been created!`)
                }
                else{
                    alert(`${deptData.deptName} Declined to Add!`)
                }
            }
        }
// ================================== Handles Clear the TextBox Values============================

        const clearTextBox=()=>{
            setDeptData({deptCode:"",deptName:""})
        }
  return (
    <section className='m-1'>
        <form action="" className='shadow-md border-1 border-gray-300 rounded-xl p-2 w-max'>
        <table className='border-separate border-spacing-y-1'>
            <tbody className='sm:flex'>
                <tr>
                    <td>
                    <label htmlFor="deptCode" className='text-gray-600 text-xs md:text-sm'>*Enter Department Code</label>
                    </td>
                    <td>
                    <input onChange={handleDept} value={deptData.deptCode} type="text" name="deptCode" maxLength={5} minLength={5} required placeholder='eg:0001' id="deptCode" className="border-gray-400 mx-2 p-1 rounded-md border w-30 text-xs md:text-sm" /><br />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="deptName" className='text-gray-600 text-xs md:text-sm'>*Enter Department Name</label>
                    </td>
                    <td>
                    <input onChange={handleDept} value={deptData.deptName} type="text" name="deptName" maxLength={150} required placeholder='eg:BSC' id="deptCode" className="border-gray-400  mx-2 p-1 rounded-md border w-30 text-xs md:text-sm" />
                    </td>
                </tr>
            </tbody>
        </table>          
        <div className="deptBtnGroup mt-5">
            <button type="button" onClick={handleSumbit} className='p-1 md:text-sm text-xs rounded-md text-gray-100 hover:bg-green-500 mx-1 bg-green-800 cursor-pointer'>Save</button>
            <button type="button" onClick={clearTextBox} className='p-1 md:text-sm text-xs rounded-md text-gray-100 hover:bg-red-500 mx-1 bg-red-800 cursor-pointer'>Reset</button>
        </div>
       </form>
    </section>
  )
}

export default DepartmentScreen