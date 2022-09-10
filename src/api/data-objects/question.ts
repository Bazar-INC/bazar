import { Client } from "../client";
import { QuestionEntity } from "../entities/question";

const client = new Client("questions");


const Question = {
   add(question: QuestionEntity) {
      return client.post("/add-question", question);
   },
   update(question: QuestionEntity) {
      return client.put("/edit-question", question);
   },
   find(id: string) {
      return client.get("/" + id);
   }
};

export { Question };
