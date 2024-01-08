import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { ESListButton } from '../ESListButton/ESListButton';

const navlinks1 = [
  {
    title: "Hyper-automation Solution",
    id: "platform/hyperautomationsolution",
  },
  {
    title: "Robotic Process automation",
    id: "platform/rpa",
  },
  {
    title: "Artificial Intelligence / Machine Learning",
    id: "platform/aiml",
  },
  {
    title: "Intelligent Document processing",
    id: "platform/idp",
  },
  {
    title: "Natural Language Processing",
    id: "platform/nlp",
  },
];

const navlinks2 = [
  {
    title: "Workflow",
    id: "platform/workflow",
  },
  {
    title: "Orchestrator",
    id: "platform/orchestrator",
  },
  {
    title: "Predictive Analytics",
    id: "platform/predictive_analytics",
  },
  {
    title: "Process mining",
    id: "platform/process_mining",
  },
  {
    title: "Advanced Analytics",
    id: "platform/advancedAnalytics",
  },
];

const PlatformPopover = () => {
  return (
    <Card raised>
      <CardContent sx={{ px: 5, py: 5, pt: 2 }}>
        <Stack gap={2} direction="row">
          <List>
            {navlinks1?.map(({ title, id, icon }) => {
              return (
                <ESListButton
                  key={id}
                  disableRipple
                  to={id}
                >
                  <ListItemText disableTypography>
                    <Typography variant="subtitle2" key={id}>
                      {title}
                    </Typography>
                  </ListItemText>
                </ESListButton>
              );
            })}
          </List>
          <List>
            {navlinks2?.map(({ title, id, icon }) => {
              return (
                <ESListButton
                  key={id}
                  disableRipple
                  to={id}
                >
                  <ListItemText disableTypography>
                    <Typography variant="subtitle2" key={id}>
                      {title}
                    </Typography>
                  </ListItemText>
                </ESListButton>
              );
            })}
          </List>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PlatformPopover