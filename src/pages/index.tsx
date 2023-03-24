import React, { ReactElement } from 'react'
import HistoryForm from '~/components/creat-edit/historyForm/HistoryForm'


interface Props {
  
}

function index({}: Props): ReactElement {
  return (
    <div>
      <HistoryForm/>
    </div>
  )
}

export default index
