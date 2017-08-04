import { initializeApp } from 'firebase';

const databaseConfig = {

};

export const fbDatabase = initializeApp(databaseConfig, 'database').database();
