export interface EventModel {
    title: string;
    name: string;
    description: string;
    date: string;
    imageUrl?: string;
}

export interface GQLEventResponseModel{
    allEvents: EventModel[];
}