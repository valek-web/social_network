import React from 'react'
import User from './User/User';
import s from './Users.module.css';

let initionUser = [
    { id: 0, lastName: 'Alexseev', firstName: 'James', age: 18, city: 'New-York', frends: 0, books: 7, follow: true, photo: 'https://i.pinimg.com/564x/58/cf/2f/58cf2f56adfa48bfdb7a342014814005.jpg' },
    { id: 1, lastName: 'Smith', firstName: 'Robert', age: 29, city: 'Moscow', frends: 46, books: 13, follow: false, photo: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' },
    { id: 2, lastName: 'Johnson', firstName: 'David', age: 23, city: 'Minsk', frends: 57, books: 18, follow: true, photo: 'https://www.dianamiaus.com/instagram-travel-destinations/img_0335/' },
    { id: 3, lastName: 'Williams', firstName: 'Thomas', age: 27, city: 'Kiev', frends: 12, books: 14, follow: false, photo: 'https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 4, lastName: 'Brown', firstName: 'Alex', age: 31, city: 'Dalas', frends: 15, books: 16, follow: true, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJRlMPmB8dddiOzpavwNgnRKfLPW0FGwcMQ&usqp=CAU' },
    { id: 5, lastName: 'Jones', firstName: 'Jason', age: 36, city: 'Boston', frends: 28, books: 23, follow: true, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EV_R8QqOb2x1bljaiE2Bxr9jGYayNzMQCg&usqp=CAU' },
    { id: 6, lastName: 'Miller', firstName: 'Mark', age: 25, city: 'Detroit', frends: 19, books: 29, follow: false, photo: 'https://i.pinimg.com/originals/25/4b/04/254b0457df2facf12b95d749117aaabc.jpg' },
    { id: 7, lastName: 'Davis', firstName: 'Richard', age: 19, city: 'Kansas', frends: 37, books: 11, follow: true, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30kH_RikMUq3AgPYxnjnfnxhTiVkpNENdbA&usqp=CAU' }
]

class Users extends React.Component {

    componentDidMount = () => {
        if (this.props.users.length == 0) {
            this.props.getUsers(initionUser)
        }
    }

    render = () => {
        let mapUser = this.props.users.map(i => {
            return (
                <User
                    onPhoto={i.photo}
                    onLastName={i.lastName}
                    onFirstName={i.firstName}
                    onAge={i.age} onCity={i.city}
                    onBooks={i.books}
                    onFrends={i.frends}
                    onFollow={i.follow}
                    onID={i.id}
                    onFollowun={this.props.followUnfollowUser}
                    key={i.id} />
            )
        })
        return (
            <div className={s.box}>{mapUser}</div>
        )
    }
}

export default Users;