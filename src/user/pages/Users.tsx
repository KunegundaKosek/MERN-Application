import React from 'react'
import UserList from '../components/UserList'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Kunegunda Kosek',
            image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb5%2F85%2Fb585c52c5029bded628c1f4cd85490e74eab57b2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_kidsroom_decorationstoys%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
            places: 3,
        },
    ]

    return <UserList items={USERS} />
}

export default Users
