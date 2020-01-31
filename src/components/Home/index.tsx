import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

import {
  setupMenus,
  SetupMenuType,
  setupOwnerMenus,
  SetupOwnerMenuType
} from "../../constants/constants";
import {
  setupTabLabels,
  setupOwnerMenuItems
} from "../../constants/valuesByType";

import Menu from "../shared/Menu";
import OwnerMenu from "../shared/OwnerMenu";

interface FCProps {
  className?: string;
}
const Home: FC<FCProps> = ({ className }) => {
  const [menu, setMenu] = useState(setupMenus.mySteps);
  const [ownerMenu, setOwnerMenu] = useState(setupOwnerMenus.rossRich);
  const [menuItems, setMenuItems] = useState([
    setupOwnerMenus.rossRich,
    setupOwnerMenus.harryAvery,
    setupOwnerMenus.amitPatel,
    setupOwnerMenus.suzyAnderson
  ]);

  const onChangeHandler = (v: SetupMenuType) => {
    setMenu(v);
  };
  const onClickHandler = (m: SetupOwnerMenuType) => {
    setOwnerMenu(m);
  };
  function onSearchHandler(e: ChangeEvent<HTMLInputElement>) {
    const hasName = e.target.value.toLowerCase();
    const items: SetupOwnerMenuType[] = [];
    setupOwnerMenuItems.forEach((item, key) => {
      if (item.name.toLowerCase().includes(hasName)) {
        items.push(key);
      }
    });
    setMenuItems(items);
  }
  return (
    <div className={className}>
      <Menu
        items={[setupMenus.myEvaluations, setupMenus.mySteps]}
        getLabel={item => setupTabLabels.get(item)}
        activeItem={menu}
        onChange={onChangeHandler}
      />
      <OwnerMenu
        items={menuItems}
        getItem={item => {
          return setupOwnerMenuItems.get(item);
        }}
        activeItem={ownerMenu}
        onChange={onClickHandler}
        onSearch={onSearchHandler}
      />
    </div>
  );
};

const StyledMenu = styled(Home)`
  width: 100%;
  display: flex;
  min-height: 100vh;
`;

export { StyledMenu as Home };
