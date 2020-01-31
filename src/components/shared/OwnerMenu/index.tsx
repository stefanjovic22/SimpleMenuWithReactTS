import React, { ChangeEvent } from "react";
import styled from "styled-components";

import {
  FontWeights,
  FontSizes,
  FontFamily,
  Colors
} from "../../../lib/style-guide";
import { OwnerMenuItemType } from "../../../constants/constants";
import productboardImg from "../../../assets/images/Icons/Productboard/Productboard.png";

const OwnerMenu = styled.div`
  width: 270px;
  align-self: center;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #d1e3f8;
  box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
    0px 4px 16px rgba(50, 132, 225, 0.16);
  border-radius: 4px;
  padding: 0px 0px 10px 0px;
`;

const activeStyle = (active: boolean) => ({
  background: `${active ? Colors.AccordBlue : Colors.BG0}`,
  color: `${active ? Colors.TX0 : Colors.TX1}`
});

const MenuHeader = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: ${Colors.TX1};
  font-family: ${FontFamily.Inter};
  font-style: normal;
  font-weight: ${FontWeights.HB};
  font-size: ${FontSizes.large};
  line-height: 20px;
  ::placeholder {
    color: ${Colors.PH1};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #deecfc;
`;

const MenuBody = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0 0 0;
`;

const Avatar = styled.div`
  width: 39px;
  height: 24px;
  display: flex;
  margin-top: 8px;
`;

interface ImgProps {
  right?: boolean;
}
const Img = styled.img`
  ${(props: ImgProps) => props.right && "float: right"};
  ${(props: ImgProps) => props.right && "margin-left: 15px"};
  width: 24px;
  height: 24px;
  position: absolute;
`;

const Inner = styled.div`
  display: flex;
  margin-left: 8px;
`;

interface RoleProps {
  active: boolean;
}
const Role = styled.div`
  color: ${(props: RoleProps) => (props.active ? Colors.TX0 : Colors.PH1)};
  position: relative;
  height: 40px;
  margin-left: 8px;
  top: calc(50% - 18px / 2);
  font-family: ${FontFamily.Inter};
  font-style: normal;
  font-weight: ${FontWeights.SHM};
  font-size: ${FontSizes.medium};
  line-height: 18px;
`;

interface MenuItemProps {
  active: boolean;
}
const MenuItem = styled.div`
  ${(props: MenuItemProps) => activeStyle(props.active)};
  display: flex;
  padding-left: 20px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  &:hover {
    background: ${(props: MenuItemProps) =>
      props.active ? Colors.AccordBlue : Colors.BG3};
  }
`;

const ItemLabel = styled.a`
  position: relative;
  height: 40px;
  top: calc(50% - 20px / 2);
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
  getItem: (item: T) => OwnerMenuItemType | undefined;
  onSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function OwnerMenuComponent<T>(props: FCProps<T>) {
  const { items, getItem, activeItem, onChange, onSearch, className } = props;
  return (
    <OwnerMenu className={className}>
      <MenuHeader
        type="text"
        placeholder="Filter by name"
        onChange={onSearch}
      />
      <Divider />
      <MenuBody>
        {items.map((item, key) => (
          <MenuItem
            key={`menu-${key}`}
            active={item === activeItem}
            onClick={() => onChange(item)}
          >
            <Avatar>
              <Img src={productboardImg} />
              <Img right src={getItem(item)?.avatar} />
            </Avatar>
            <Inner>
              <ItemLabel>
                {getItem(item) !== undefined ? getItem(item)?.name : ""}
              </ItemLabel>
              <Role active={item === activeItem}>{getItem(item)?.role}</Role>
            </Inner>
          </MenuItem>
        ))}
      </MenuBody>
    </OwnerMenu>
  );
}

export default OwnerMenuComponent;
