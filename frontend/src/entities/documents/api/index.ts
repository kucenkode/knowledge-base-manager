import { DocumentCardData } from "../model/types";
import { http } from "../../../shared/api";

const DocumentAPI = {
  getAllDocuments() {
    return http.get("/documents");
  },

  postCreateNewDocument(documentData: DocumentCardData) {
    return http.post("/documents", documentData);
  },

  deleteDocument(id: string) {
    return http.delete(`/documents/${id}`);
  },
};

export { DocumentAPI };
