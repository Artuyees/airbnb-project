import React from "react";
import CellWifiIcon from "@mui/icons-material/CellWifi";
import PoolIcon from "@mui/icons-material/Pool";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TvIcon from "@mui/icons-material/Tv";
import {
  Air,
  Elevator,
  Kitchen,
  LocalLaundryServiceOutlined,
  Pets,
  SportsGymnasticsOutlined,
  Tv,
} from "@mui/icons-material";
import SpaIcon from "@mui/icons-material/Spa";
type Props = {
  icon: string;
};
const IconSelector = (props: Props) => {
  const { icon } = props;
  switch (icon.toLowerCase()) {
    case "cellwifi":
      return <CellWifiIcon />;
    case "pool":
      return <PoolIcon />;
    case "localparking":
      return <LocalParkingIcon />;
    case "kitchen":
      return <RestaurantIcon />;
    case "bar":
      return <LocalBarIcon />;
    case "gym":
      return <SportsGymnasticsOutlined />;
    case "spa":
      return <SpaIcon />;
    case "air":
      return <Air />;
    case "tv":
      return <Tv />;
    case "locallaundry":
      return <LocalLaundryServiceOutlined />;
    case "kitchen":
      return <Kitchen />;
    case "pets":
      return <Pets />;
    case "elevator":
      return <Elevator />;
    default:
      return <TvIcon />;
  }
};

export default IconSelector;

/* { name: "WiFi", icon: "CellWifi" },
{ name: "Parking", icon: "LocalParking" },
{ name: "Pool", icon: "Pool" },
{ name: "AirDryer", icon: "Air" },
{ name: "Washing machine", icon: "LocalLaundry" },
{ name: "TV", icon: "TV" },
{ name: "Kitchen", icon: "Kitchen" },
{ name: "animals", icon: "Pets" },
{ name: "elevator", icon: "Elevator" }, */
