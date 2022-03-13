import s from './Users.module.css'

function Users(props) {
    if (props.users.length === 0) {
        const users = [
            {
                id: 1,
                avatar: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-10-3-128.png',
                followed: false,
                name: 'Dmitry K.',
                status: 'Make love not war',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-128.png',
                followed: false,
                name: 'Swetlana D.',
                status: 'Love is my religion',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 3,
                avatar: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-15-128.png',
                followed: true,
                name: 'Sergei S.',
                status: 'Follow your heart',
                location: {country: 'Ukraine', city: 'Kiev'}
            },
            {
                id: 4,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-128.png',
                followed: true,
                name: 'Andrew T.',
                status: 'Remember who you are',
                location: {country: 'United States', city: 'Washington'}
            },
        ]
        props.setUsers(users)
    }

    return (
        <div className={s.wrapper}>
            <h1>Users</h1>
            {props.users.map(u => {
                return (
                    <div className={s.userBlock} key={u.id}>
                        <div className={s.user}>
                            <div className={s.avatar}><img src={u.avatar} alt=""/></div>
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.userInfoColumn}>
                                <div className={s.name}>{u.name}</div>
                                <div className={s.status}>{u.status}</div>
                            </div>
                            <div className={s.userInfoColumn}>
                                <div className={s.country}>{u.location.country}</div>
                                <div className={s.city}>{u.location.city}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users