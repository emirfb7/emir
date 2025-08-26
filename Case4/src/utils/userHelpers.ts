// util/userHelpers.ts
import type { User } from "../types/user";
import { getItem, setItem } from "./localStorage";       

const STORAGE_KEY = "users";

// Kullanıcı listesini getir
export const getUsers = (): User[] => {
  return getItem<User[]>(STORAGE_KEY) || [];
};

// Yeni kullanıcı ekle
export const addUser = (newUser: User): void => {
  const users = getUsers();
  users.push(newUser);
  setItem(STORAGE_KEY, users);
};

// Email'e göre kullanıcı sil
export const removeUser = (email: string): void => {
  const users = getUsers().filter(user => user.email !== email);
  setItem(STORAGE_KEY, users);
};

// Email'e göre kullanıcı bul
export const findUserByEmail = (email: string): User | undefined => {
  return getUsers().find(user => user.email === email);
};

// Email'in benzersiz olup olmadığını kontrol et
export const isEmailUnique = (email: string): boolean => {
  return !getUsers().some(user => user.email === email);
};
