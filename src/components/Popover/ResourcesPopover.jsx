import React from 'react';
import {
  Card,
  CardContent,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsCalendarEvent, BsNewspaper } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import { GiPapers } from "react-icons/gi";
import { MdChangeHistory } from "react-icons/md";
import { SiBlogger } from "react-icons/si";
import { ESListButton } from '../ESListButton/ESListButton';

const ICON_SIZE = 25;

const navlinks = [
  { title: "Blogs", id: "resources/blogs", icon: <SiBlogger fontSize={ICON_SIZE} /> },
  {
    title: "Success Stories",
    id: "resources/success_stories",
    icon: <MdChangeHistory fontSize={ICON_SIZE} />,
  },
  {
    title: "White paper",
    id: "resources/whitepapers",
    icon: <BsNewspaper fontSize={ICON_SIZE} />,
  },
  {
    title: "Events",
    id: "resources/events",
    icon: <BsCalendarEvent fontSize={ICON_SIZE} />,
  },
  {
    title: "Brochure",
    id: "resources/brochures",
    icon: <AiOutlineFilePdf fontSize={ICON_SIZE} />,
  },
  {
    title: "Documentation",
    id: "http://wiki.aira.technology:8000/en/home",
    icon: <FcDocument fontSize={ICON_SIZE} />,
  },
  {
    title: "Testimonials",
    id: "resources/testimonials",
    icon: <GiPapers fontSize={ICON_SIZE} />,
  }
];

const ResourcesPopover = () => {
  return (
    <Card raised>
      <CardContent sx={{ p: 0 }}>
        <List sx={{ p: 0 }}>
          {navlinks?.map(({ title, id, icon }) => {
            return (
              <ESListButton
                key={id}
                to={id}
                title={title}
              >
                <ListItemText disableTypography>
                  <Typography variant="subtitle2">{title}</Typography>
                </ListItemText>
              </ESListButton>
            );
          })}
        </List>
      </CardContent>
    </Card>
  )
}

export default ResourcesPopover