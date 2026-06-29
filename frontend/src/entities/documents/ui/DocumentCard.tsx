import type { DocumentCardData } from "../index";
import {
  CardContent,
  Typography,
  Button,
  Stack,
  Card,
  Chip,
} from "@mui/material";

const DocumentCard = ({
  name,
  status,
  active,
  onClick,
  onDelete,
}: DocumentCardData) => {
  return (
    <Card
      sx={{
        cursor: "pointer",
        border: active ? "2px solid #1976d2" : undefined,
      }}
      onClick={onClick}
    >
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6">{name}</Typography>

          <Chip
            label={status}
            color={status === "outdated" ? "error" : "success"}
          />

          <Button color="error" variant="outlined" onClick={() => onDelete}>
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export { DocumentCard };
