import React from "react";
import styled from "styled-components";

import {
  FontWeights,
  FontSizes,
  FontFamily,
  Colors
} from "../../../lib/style-guide";

const Menu = styled.div`
  width: 154px;
  align-self: center;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #d1e3f8;
  box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
    0px 4px 16px rgba(50, 132, 225, 0.16);
  border-radius: 4px;
  padding: 9px 0px 8px 0px;
`;

const activeStyle = (active: boolean) => ({
  background: `${active ? Colors.AccordBlue : Colors.BG0}`,
  color: `${active ? Colors.TX0 : Colors.TX1}`
});

interface MenuItemProps {
  active: boolean;
}
const MenuItem = styled.div`
  ${(props: MenuItemProps) => activeStyle(props.active)};
  padding-left: 20px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  &:hover {
    background: ${Colors.AccordBlue};
    color: ${Colors.TX0};
  }
`;

const ItemLabel = styled.a`
  position: relative;
  height: 24px;
  top: calc(50% - 24px / 2);
  font-family: ${FontFamily.Inter};
  font-style: normal;
  font-weight: ${FontWeights.HB};
  font-size: ${FontSizes.large};
  line-height: 20px;
`;

interface FCProps<T> {
  className?: string;
  items: T[];
  onChange: (item: T) => void;
  activeItem: T;
  getLabel: (item: T) => string | undefined;
}

function MenuComponent<T>(props: FCProps<T>) {
  const { items, getLabel, activeItem, onChange, className } = props;
  return (
    <Menu className={className}>
      {items.map((item, key) => (
        <MenuItem
          key={`menu-${key}`}
          active={item === activeItem}
          onClick={() => onChange(item)}
        >
          <ItemLabel>{getLabel(item)}</ItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default MenuComponent;
