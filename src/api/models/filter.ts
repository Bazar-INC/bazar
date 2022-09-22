export interface FilterModel {
   name: string;
   code: string;
   options: Array<{
      value: string;
      code: string;
   }>;
}
