import { Box, Paper } from "@mui/material";
import { DocumentsSection } from "../../../widgets/documents/ui/DocumentsSection";
import { AudiencesSection } from "../../../widgets/audiences/ui/AudiencesSection";
import { PagesSection } from "../../../widgets/pages/ui/PagesSection";

const MainPage = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: 2,
        p: 3,
      }}
    >
      <Paper sx={{ p: 3 }}>
        <DocumentsSection />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <AudiencesSection />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <PagesSection />
      </Paper>
    </Box>
  );
};

export { MainPage };
