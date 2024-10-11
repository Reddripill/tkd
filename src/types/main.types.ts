import React from "react";

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export type IdentityType<T> = T extends object ? { [K in keyof T]: T[K] } : T;
