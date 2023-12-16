import { ObjectId } from "mongoose";

export interface IBuyerDocument {
  _id?: string | ObjectId;
  username?: string;
  email?: string;
  profilePicture?: string;
  purchasedCourses: string[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IBuyer {
  type?: string;
  payload: IBuyerDocument;
}