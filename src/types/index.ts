// src/types/index.ts

// Type definitions for the health tracker application

type User = {
    id: string;
    name: string;
    email: string;
    age: number;
};


type Activity = {
    id: string;
    type: string;
    duration: number; // in minutes
    caloriesBurned: number;
    date: string; // YYYY-MM-DD format
};


type HealthData = {
    userId: string;
    weight: number; // in kg
    height: number; // in cm
    bmi: number;
    activityLog: Activity[];
};


type Goal = {
    userId: string;
    targetWeight: number;
    targetCalories: number;
    deadline: string; // YYYY-MM-DD format
};

export type { User, Activity, HealthData, Goal };