export enum setupMenus {
  myEvaluations,
  mySteps
}
export type SetupMenuType = setupMenus;

export enum setupOwnerMenus {
  rossRich,
  harryAvery,
  amitPatel,
  suzyAnderson
}
export type SetupOwnerMenuType = setupOwnerMenus;

export type OwnerMenuItemType = {
  name: string;
  role: string;
  avatar: string;
};
