import { http } from "../../../shared/api";

const PagesAPI = {
  getAllPages() {
    return http.get("/pages");
  },
};

export { PagesAPI };
