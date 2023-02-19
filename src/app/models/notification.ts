export interface Notice {
  notifId: number;
  title: string;
  content: string;
  priority: number; // 1/2
  pictureUrls?: string;
  createdBy?: string;
  createdTs?: string;
  validTill?: string;
}
