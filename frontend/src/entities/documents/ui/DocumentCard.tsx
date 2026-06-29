import { DocumentCardData } from "../index";
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
      onClick={onClick}
      sx={{
        cursor: "pointer",
        border: active ? "2px solid #1976d2" : undefined,
        transition: "0.2s",
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6">{name}</Typography>

          <Chip
            label={status}
            color={status === "outdated" ? "error" : "success"}
          />

          <Button
            color="error"
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation();

              onDelete();
            }}
          >
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export { DocumentCard };
