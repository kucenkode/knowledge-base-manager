import { useImpactStore } from "../../../shared/impact/store/useImpactStore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useQuery } from "@tanstack/react-query";
import { PagesAPI } from "../index";
import {
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Chip,
  Typography,
} from "@mui/material";

const PagesSection = () => {
  const affected = useImpactStore((s) => s.pages);

  const { data = [] } = useQuery({
    queryKey: ["pages"],

    queryFn: async () => {
      const response = await PagesAPI.getAllPages();

      return response.data;
    },
  });

  return (
    <>
      <Typography variant="h5">Pages</Typography>

      {data.map((page: any) => (
        <Accordion
          key={page.id}
          sx={{
            border: affected.includes(page.id)
              ? "2px solid #1976d2"
              : undefined,
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {page.name}
          </AccordionSummary>

          <AccordionDetails>
            {page.sections.map((s: any) => (
              <div key={s.name}>
                {s.name}

                <Chip label={s.status} sx={{ ml: 2 }} />
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export { PagesSection };
