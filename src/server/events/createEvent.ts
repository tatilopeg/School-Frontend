import type { EventModel } from "@/models/EventModel";

export const createEvent = async(event: EventModel):Promise<EventModel | null> => {
    const body = JSON.stringify(event);
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/events/new-event`,{
            method: 'POST',
            headers,
            body
        });

        if(!response.ok) return null;
        const data:EventModel = await response.json();
        return data;
    } catch (error) {
        console.log(`Fetch error ${error}`)        
        return null;
    }
}
