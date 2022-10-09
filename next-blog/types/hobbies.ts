export interface HobbiesType extends Hobby{
   data: [Hobby] 
}

export interface Hobby{
    id: number,
    attributes: {
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        publishedAt:string
    }
}