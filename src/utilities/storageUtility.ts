class StorageUtility<TValue> {

   private name: string;

   constructor(name: string) {
      this.name = name;
   }

   set(value: TValue) {

      const text = JSON.stringify(value);

      localStorage.setItem(this.name, text);
   }

   get(): TValue | null {

      const text = localStorage.getItem(this.name);

      if (!text) return null;

      return JSON.parse(text);
   }
}

export { StorageUtility };
