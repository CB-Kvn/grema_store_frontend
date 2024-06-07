import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/store'
import { confirmation_active } from '../redux/reducers_slices/handler_gre_sto_slice'
import { MenuStore } from '../components/store/index_gre_sto'
import { FileUpload } from '../components/confirmation/file_upload_gre_sto'

export const ConfirmationOrder = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(confirmation_active({enable:true}))
    }, [])
    
  return (
    <>
    <div className=' w-screen h-screen bg-white'>
        <MenuStore></MenuStore>
        <FileUpload></FileUpload>
    </div>
    
    </>
  )
}
