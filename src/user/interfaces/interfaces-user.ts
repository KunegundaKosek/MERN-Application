export interface User {
    id: string
    image: string
    name: string
    places: number
}

export interface UserListProps {
    items: User[]
}
