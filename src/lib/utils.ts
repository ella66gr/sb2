// src/lib/utils.ts

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes efficiently
 * Essential for dynamic styling and avoiding class conflicts
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format date for display in cards
 */
export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

/**
 * Generate random placeholder data for practice cards
 */
export function generateCardData() {
    return {
        stats: [
            { label: 'Total Users', value: '2,847', change: '+12%' },
            { label: 'Revenue', value: '$45,210', change: '+8%' },
            { label: 'Growth Rate', value: '15.3%', change: '+2.1%' },
        ],
        activities: [
            { user: 'Alice Johnson', action: 'Created new project', time: '2 hours ago' },
            { user: 'Bob Smith', action: 'Updated dashboard', time: '4 hours ago' },
            { user: 'Carol Davis', action: 'Published article', time: '6 hours ago' },
        ]
    };
}