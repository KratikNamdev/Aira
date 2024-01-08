import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box
} from "@mui/material";
import React from "react";
import Colors from "@/common/Colorscomponents";
import Link from 'next/link';
import { useRouter } from 'next/router';


export const ESListButton = (props) => {
  console.log("🚀 ~ file: ESListButton.jsx:17 ~ ESListButton ~ props:", props)
  const { sx, children } = props;
  const router = useRouter();

  const removeDomainAndSlash = (url) => {
    // Define a regular expression to match the domain and forward slash
    const regex = /^(https?:\/\/)?[^/]+\/?/;

    // Use the replace method to remove the matched part
    const result = url.replace(regex, '');

    return result;
  }

  return (
    <>
      {props.title === 'Documentation' ?
        <Link
          href={`http://wiki.aira.technology:8000/en/home`}
          style={{
            textDecoration: "none",
            color: "#000",
          }}
          target="_blank"
        >
          <ListItemButton
            sx={{
              px: 3,
              borderLeft: "8px solid transparent",
              borderRadius: "4px",
              "&:hover": {
                borderLeft: `8px solid ${Colors.airaSecondary}`,
                transition: "border-left 0.2s",
              },
            }}
          >
            {children}
          </ListItemButton>
        </Link>
        :
        <Link
          href={`/${props.to}`}
          style={{
            textDecoration: "none",
            color: "#000",
          }}
        >
          <ListItemButton
            sx={{
              px: 3,
              borderLeft: "8px solid transparent",
              borderRadius: "4px",
              "&:hover": {
                borderLeft: `8px solid ${Colors.airaSecondary}`,
                transition: "border-left 0.2s",
              },
            }}
          >
            {children}
          </ListItemButton>
        </Link>
      }
    </>
  );
};