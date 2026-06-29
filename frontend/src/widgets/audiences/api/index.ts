import { http } from "../../../shared/api";

const AudienceAPI = {
  getAllAudiences() {
    return http.get("/audiences");
  },
};

export { AudienceAPI };
