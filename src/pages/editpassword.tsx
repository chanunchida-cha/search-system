import React from 'react'
import EditPassword from '~/components/edit-password/EditPassword';

type Props = {}

function editpassword({} : Props) {
    return (
        <div className='bg-white rounded-lg '>
        <h1 className="text-xl text-black font-bold ml-10 pt-10">เปลี่ยนรหัสผ่าน</h1>
          <EditPassword />
        </div>
      );
}

export default editpassword