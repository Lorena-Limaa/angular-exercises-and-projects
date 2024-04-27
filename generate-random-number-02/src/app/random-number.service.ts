import { Injectable } from '@angular/core';

export class RandomNumberService {
  
  GenerateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
}
