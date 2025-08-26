// util/localStorage.ts

// localStorage'a veri kaydet
export const setItem = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // localStorage'dan veri oku
  export const getItem = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  };
  
  // localStorage'dan veri sil
  export const removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };
  
