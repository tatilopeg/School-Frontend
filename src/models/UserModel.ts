export interface UserModel{
    id: string;
    username: string;
    rol: string;
}

export interface GQLUserResponseModel{
    allUsers: UserModel[];
}