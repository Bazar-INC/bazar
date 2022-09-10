interface CategoryEntity {
   id?: string,
   name?: string,
   code?: string,
   image?: string,
   icon?: string,
   parentCode?: string,
   parentId?: string,
   children?: string[]
}

export type { CategoryEntity };
