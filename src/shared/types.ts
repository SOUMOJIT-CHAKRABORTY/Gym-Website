import { Interface } from "readline";

export enum SelectedPage {
  Home = "home",
  Benifits = "benifits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenifitsType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
