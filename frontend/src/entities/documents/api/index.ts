import { DocumentCardData } from "../model/types";
import { http } from "../../../shared/api";

const DocumentAPI = {
  getAllDocuments() {
    return http.get("/documents");
  },

  postCreateNewDocument(data: DocumentCardData) {
    return http.post("/documents", data);
  },

  deleteDocument(id: string) {
    return http.delete(`/documents/${id}`);
  },
};

export { DocumentAPI };
