interface FeedbackEntity {
   id?: string,
   createdAt?: string,
   text?: string,
   stars?: 0,
   isEdited?: true,
   owner?: {
      name: string,
      image: string
   },
   answers?: [
      {
         createdAt: string,
         text: string,
         owner: {
            name: string,
            image: string
         }
      }
   ]
}

export type { FeedbackEntity };
