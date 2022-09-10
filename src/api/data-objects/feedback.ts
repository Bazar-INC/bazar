import { Client } from "../client";
import { FeedbackEntity } from "../entities/feedback";

const client = new Client("feedbacks");

const Feedback = {
   add(feedback: FeedbackEntity) {
      return client.post("/add-feedback", feedback);
   },
   update(feedback: FeedbackEntity) {
      return client.put("/edit-feedback", feedback);
   },
   find(id: string) {
      return client.get("/" + id);
   },
};

export { Feedback };
