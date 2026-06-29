import { useImpactStore } from "../../../shared/impact/store/useImpactStore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useQuery } from "@tanstack/react-query";
import { Audience, AudienceAPI } from "../index";
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Accordion,
  Chip,
} from "@mui/material";

const AudiencesSection = () => {
  const affected = useImpactStore((state) => state.audiences);

  const { data = [] } = useQuery({
    queryKey: ["audiences"],

    queryFn: async () => {
      const response = await AudienceAPI.getAllAudiences();

      return response.data;
    },
  });

  return (
    <>
      <Typography variant="h5">Audiences</Typography>

      {data.map((audience: Audience) => (
        <Accordion
          key={audience.id}
          sx={{
            border: affected.includes(audience.id)
              ? "2px solid #1976d2"
              : undefined,
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {audience.name}
          </AccordionSummary>

          <AccordionDetails>
            <Chip label={audience.interview.status} />

            {audience.vpcs &&
              audience.vpcs.map((v: any) => (
                <Accordion key={v.id}>
                  <AccordionSummary>{audience.name}</AccordionSummary>

                  <AccordionDetails>
                    {Object.entries(audience.fields)

                      .map(([key, value]: any) => (
                        <p key={key}>
                          <b>{key}</b>:{value.join(", ")}
                        </p>
                      ))}
                  </AccordionDetails>
                </Accordion>
              ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export { AudiencesSection };
