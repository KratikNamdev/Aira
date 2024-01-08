import React from 'react';
import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { AiOutlineDollarCircle, AiOutlineTeam } from "react-icons/ai";
import { GiHumanPyramid, GiHumanTarget } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
import { RiSuitcaseFill } from "react-icons/ri";
import Colors from "../../common/Colors";
import { ESListButton } from '../ESListButton/ESListButton';

const ICON_SIZE = 25;

const navlinks = [
  {
    title: "About us",
    id: "company/about_us",
    icon: <GrContactInfo fontSize={ICON_SIZE} />,
  },
  // {
  //   title: "Leadership Team",
  //   id: "company/leadership_team",
  //   icon: <AiOutlineTeam fontSize={ICON_SIZE} />,
  // },
  {
    title: "Pricing",
    id: "company/pricing",
    icon: <AiOutlineDollarCircle fontSize={ICON_SIZE} />,
  },
  {
    title: "Careers at AIRA",
    id: "company/careers",
    icon: <RiSuitcaseFill fontSize={ICON_SIZE} />,
  },
  {
    title: "Corporate Social Responsibility",
    id: "company/csr",
    icon: <AiOutlineTeam fontSize={ICON_SIZE} />,
  },
  {
    title: "Partner",
    id: "company/partner",
    icon: <GiHumanTarget fontSize={ICON_SIZE} />,
  },
  {
    title: "Partnership Portal",
    id: "company/partnership_portal_page",
    icon: <GiHumanPyramid fontSize={ICON_SIZE} />,
  },
];

const CompanyPopover = ({ onLinkClick }) => {
  return (
    <Card raised>
      <CardContent sx={{ p: 0 }}>
        <List sx={{ p: 0 }}>
          {navlinks?.map(({ title, id, icon }) => {
            return (
              <ESListButton
                key={id}
                to={id}
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

export default CompanyPopover