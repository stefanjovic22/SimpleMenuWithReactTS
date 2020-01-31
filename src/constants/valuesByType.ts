import {
  setupMenus,
  SetupMenuType,
  setupOwnerMenus,
  SetupOwnerMenuType,
  OwnerMenuItemType
} from "./constants";

import rossrich from "../assets/images/Avatars/rossrich.png";
import harryavery from "../assets/images/Avatars/harryavery.png";
import amitpatel from "../assets/images/Avatars/amitpatel.png";
import suzyanderson from "../assets/images/Avatars/suzyanderson.png";

export const setupTabLabels = new Map<SetupMenuType, string>([
  [setupMenus.myEvaluations, "My evaluations"],
  [setupMenus.mySteps, "My steps"]
]);

export const setupOwnerMenuItems = new Map<
  SetupOwnerMenuType,
  OwnerMenuItemType
>([
  [
    setupOwnerMenus.rossRich,
    {
      name: "Ross Rich",
      role: "Manager",
      avatar: rossrich
    }
  ],
  [
    setupOwnerMenus.harryAvery,
    {
      name: "Harry Avery",
      role: "Associate",
      avatar: harryavery
    }
  ],
  [
    setupOwnerMenus.amitPatel,
    {
      name: "Amit Patel",
      role: "Associate",
      avatar: amitpatel
    }
  ],
  [
    setupOwnerMenus.suzyAnderson,
    {
      name: "Suzy Anderson",
      role: "Associate",
      avatar: suzyanderson
    }
  ]
]);
