import { FileModel } from './file.model';

export interface BookModel {
  authorName: string;
  authorLastName: string;
  title: string;
  screen?: FileModel;
  uid: string;
  description: string;
}
