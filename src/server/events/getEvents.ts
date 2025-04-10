import type { EventModel } from "@/models/EventModel";

export const getEvents = async():Promise<EventModel[]> => {
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/events`,{
            method: 'GET',
            headers
        });

        if(!response.ok) return [];
        const data:EventModel[] = await response.json();
        return data;
    } catch (error) {
        console.log(`Fetch error ${error}`)        
        return []
    }
}
