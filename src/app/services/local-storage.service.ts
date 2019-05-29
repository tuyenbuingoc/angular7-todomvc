import { Injectable } from '@angular/core';
import { store } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: string): void {
    this.storage[key] = value;
  }
  get(key: string): string {
    return this.storage[key] || false;
  }
  setObj(key: string, value: any): void {
    if (!value) {
      return;
    }
    this.storage[key] = JSON.stringify(value);
  }
  getObj(key: string): any {
      return JSON.parse(this.storage[key] || '{}');
  }
  getValue<T>(key: string): T {
    const obj = JSON.parse(this.storage[key] || null);
    return obj as T || null;
  }
  remove(key: string): any {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
  get length(): number {
    return this.storage.length;
  }
  get isStorageEmty(): boolean {
    return this.length === 0;
  }
}
