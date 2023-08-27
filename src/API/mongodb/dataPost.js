require("dotenv").config();
import axios from "axios";

export async function mongoPost(url, document) {
  axios.post(
    url,
    {
      dataSource: "Infidium",
      database: "resume_data",
      collection: "work_history",
      document,
    }
  );
}
