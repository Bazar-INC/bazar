import { useState } from 'react';

type PropertyReturnResult<T> = [{ get: T, set: React.Dispatch<React.SetStateAction<T>>, is: (value: T) => boolean; }];

const useProperty = <TValue>(initialValue: TValue): PropertyReturnResult<TValue> => {

   const [value, setValue] = useState<TValue>(initialValue);

   return [{
      get: value,
      set: setValue,
      is: (other: TValue) => value === other,
   }];
};

export { useProperty };
