

import { Pedidos } from '../components/profile/pedidos_user_gre_sto'
import { UserCard } from '../components/profile/user_card_gre_sto'

export const Profile = () => {
  return (
    <>
    <div className='inline-flex w-full'>
    <UserCard></UserCard>
    <Pedidos></Pedidos> 
    </div>
    
    </>
    
    
  )
}

