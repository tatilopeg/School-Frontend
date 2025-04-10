import type { UserModel } from "@/models/UserModel";

export const getPeople = async():Promise<UserModel[]> => {
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/people/list`,{
            method: 'GET',
            headers
        });

        if(!response.ok) return [];
        const data:UserModel[] = await response.json();
        return data;
    } catch (error) {
        console.log(`Fetch error ${error}`)        
        return []
    }
}
