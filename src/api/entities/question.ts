interface QuestionEntity {
   id: string,
   createdAt: string,
   text: string,
   isEdited: true,
   owner: {
      name: string,
      image: string
   },
   answers: [
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

export type { QuestionEntity };
