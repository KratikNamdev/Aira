import React from 'react';
import {
  Card,
  CardContent,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  AiOutlineInsurance,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  BsBank2,
  BsClipboard2Data,
  BsFillAirplaneFill,
  BsTruck,
} from "react-icons/bs";
import { FaAws, FaSalesforce } from "react-icons/fa";
import { FcProcess, FcSalesPerformance } from "react-icons/fc";
import { GiHealthNormal, GiHumanPyramid, GiRadioTower } from "react-icons/gi";
import { GrOverview } from "react-icons/gr";
import { MdPrecisionManufacturing } from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";
import { SiHubspot, SiJira, SiOracle, SiSap } from "react-icons/si";
import Colors from "../../common/Colors";
import { ESListButton } from '../ESListButton/ESListButton';
import Image from 'next/image'

const ICON_SIZE = 25;

const SOLUTIONSSECTION = [
  {
    title: "By Industry",
    icon: "/document.png",
    links: [
      {
        title: "Manufacturing",
        id: "solutions/manufacturing",
        icon: <MdPrecisionManufacturing fontSize={ICON_SIZE} />,
      },
      {
        title: "Telecom",
        id: "solutions/telecom",
        icon: <GiRadioTower fontSize={ICON_SIZE} />,
      },
      {
        title: "Banking and Finance",
        id: "solutions/banking_and_finance",
        icon: <BsBank2 fontSize={ICON_SIZE} />,
      },
      {
        title: "BPO",
        id: "solutions/bpo",
        icon: <AiOutlinePhone fontSize={ICON_SIZE} />,
      },
      {
        title: "Insurance",
        id: "solutions/insurance",
        icon: <AiOutlineInsurance fontSize={ICON_SIZE} />,
      },
      {
        title: "Retail",
        id: "solutions/retail",
        icon: <AiOutlineShoppingCart fontSize={ICON_SIZE} />,
      },
      {
        title: "Aviation",
        id: "solutions/aviation",
        icon: <BsFillAirplaneFill fontSize={ICON_SIZE} />,
      },
      {
        title: "Healthcare",
        id: "solutions/healthcare",
        icon: <GiHealthNormal fontSize={ICON_SIZE} />,
      },
      // {
      //   title: "All industries",
      //   id: "all_industries",
      //   icon: <AiOutlineSmallDash fontSize={ICON_SIZE} />,
      // },
    ],
  },
  {
    title: "By Department",
    icon: "/geometry.png",
    links: [
      {
        title: "Supply Chain",
        id: "solutions/supply_chain",
        icon: <RiFlowChart fontSize={ICON_SIZE} />,
      },
      {
        title: "Human Resource",
        id: "solutions/human_resource",
        icon: <GiHumanPyramid fontSize={ICON_SIZE} />,
      },
      {
        title: "Marketing and sales",
        id: "solutions/marketing_and_sales",
        icon: <FcSalesPerformance fontSize={ICON_SIZE} />,
      },
      {
        title: "Customer Service",
        id: "solutions/customer_service",
        icon: <BsClipboard2Data fontSize={ICON_SIZE} />,
      },
      // {
      //   title: "All Departments",
      //   id: "all_departments",
      //   icon: <AiOutlineSmallDash fontSize={ICON_SIZE} />,
      // },
    ],
  },
  {
    title: "By Technology",
    icon: "/technology.png",
    links: [
      // {
      //   title: "ServiceNow",
      //   id: "solutions/service_now",
      //   icon: <FaSalesforce fontSize={ICON_SIZE} />,
      // },
      {
        title: "Salesforce",
        id: "solutions/salesforce",
        icon: <FaSalesforce fontSize={ICON_SIZE} />,
      },
      { title: "SAP", id: "solutions/sap", icon: <SiSap fontSize={ICON_SIZE} /> },
      // { title: "Jira", id: "solutions/jira", icon: <SiJira fontSize={ICON_SIZE} /> },
      { title: "AWS", id: "solutions/aws", icon: <FaAws fontSize={ICON_SIZE} /> },
      // {
      //   title: "Oracle",
      //   id: "solutions/oracle",
      //   icon: <SiOracle fontSize={ICON_SIZE} />,
      // },
      {
        title: "Hubspot",
        id: "solutions/hubspot",
        icon: <SiHubspot fontSize={ICON_SIZE} />,
      },
    ],
  },
];

const SolutionsPopover = ({ onLinkClick }) => {
  return (
    <Card raised sx={{ width: "100%" }}>
      <CardContent sx={{ px: 10, py: 5 }}>
        <Stack direction="row" gap={1}>
          {SOLUTIONSSECTION?.map(({ title, icon, links }, idx) => {
            return (
              <Stack direction="column" key={title}>
                <Stack direction="row" alignItems="flex-start" gap={1}>
                  <Image
                    height={25}
                    width={25}
                    src={icon}
                    alt="heading"
                  />
                  <Typography
                    variant="subtitle"
                    sx={{
                      fontWeight: 700,
                      verticalAlign: "middle",
                      color: Colors.airaPrimary,
                      mb: 1,
                    }}
                  >
                    {title}
                  </Typography>
                </Stack>
                <List>
                  {links?.map(({ title, id, icon }) => {
                    return (
                      <ESListButton
                        disableRipple
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
              </Stack>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default SolutionsPopover