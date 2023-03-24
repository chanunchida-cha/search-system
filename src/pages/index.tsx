import React, { ReactElement } from 'react'
import HistoryForm from '~/components/creat-edit/historyForm/HistoryForm'
import MainFeed from '~/components/main-feed/MainFeed'


interface Props {
  
}

function index({}: Props): ReactElement {
  return (
    <div>
      <HistoryForm />
      <MainFeed/>
    </div>
  )
}

export default index
