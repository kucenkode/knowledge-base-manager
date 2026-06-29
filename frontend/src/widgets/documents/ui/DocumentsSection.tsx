import { DocumentAPI, DocumentCard } from "../../../entities/documents";
import { Document } from "../../../entities/documents/model/types";
import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const DocumentsSection = () => {
  const { data: documents = [], isLoading } = useQuery({
    queryKey: ["documents"],

    queryFn: async () => {
      const response = await DocumentAPI.getAllDocuments();
      return response.data;
    },
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      {documents.map((document: Document) => {
        return (
          <DocumentCard
            key={document.id}
            name={document.name}
            status={document.status}
            onDelete={() => {
              DocumentAPI.deleteDocument(document.id);
            }}
          />
        );
      })}
    </Box>
  );
};

export { DocumentsSection };
