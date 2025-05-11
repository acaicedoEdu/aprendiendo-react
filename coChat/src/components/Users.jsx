const DatosUsers = [
    {
        id: 1,
        nombre: 'Alex',
        apellido: 'Carrizo',
        email: 'alex.carrizo@gmail.com'
    }
]

export const Users = () => {
    return (
        <div>
            {DatosUsers.map(user => (
                <div key={user.id}>
                    <h1>User {user.nombre} {user.apellido}</h1>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    )
}