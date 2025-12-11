// lib/mock-data.ts
// Mock data for frontend development (no backend needed yet)

import { User, Task, Comment, Report, Notification } from '@/types';

// Mock Users
export const MOCK_USERS: User[] = [
  {
    id: 'admin-1',
    email: 'admin@prodev.com',
    name: 'Sarah Johnson',
    role: 'admin',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    createdAt: new Date('2024-01-01'),
    stats: {
      tasksCompleted: 0,
      tasksDeclined: 0,
      tasksInProgress: 0,
      totalTasksAssigned: 45,
      completionRate: 0,
      averageCompletionTime: 0,
      currentStreak: 0,
    },
  },
  {
    id: 'user-1',
    email: 'john.doe@prodev.com',
    name: 'John Doe',
    role: 'user',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    createdAt: new Date('2024-01-15'),
    stats: {
      tasksCompleted: 28,
      tasksDeclined: 3,
      tasksInProgress: 5,
      totalTasksAssigned: 36,
      completionRate: 77.8,
      averageCompletionTime: 4.5,
      currentStreak: 7,
    },
  },
  {
    id: 'user-2',
    email: 'jane.smith@prodev.com',
    name: 'Jane Smith',
    role: 'user',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    createdAt: new Date('2024-01-20'),
    stats: {
      tasksCompleted: 32,
      tasksDeclined: 1,
      tasksInProgress: 3,
      totalTasksAssigned: 36,
      completionRate: 88.9,
      averageCompletionTime: 3.2,
      currentStreak: 12,
    },
  },
  {
    id: 'user-3',
    email: 'mike.wilson@prodev.com',
    name: 'Mike Wilson',
    role: 'user',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    createdAt: new Date('2024-02-01'),
    stats: {
      tasksCompleted: 15,
      tasksDeclined: 5,
      tasksInProgress: 4,
      totalTasksAssigned: 24,
      completionRate: 62.5,
      averageCompletionTime: 6.1,
      currentStreak: 3,
    },
  },
];

// Mock Tasks
export const MOCK_TASKS: Task[] = [
  {
    id: 'task-1',
    title: 'Complete Q4 Financial Report',
    description: 'Prepare and submit the quarterly financial analysis with projections for next quarter.',
    priority: 'high',
    category: 'work',
    status: 'pending',
    assignedTo: 'user-1',
    assignedBy: 'admin-1',
    dueDate: new Date('2024-12-20'),
    estimatedTime: 180,
    createdAt: new Date('2024-12-10'),
    tags: ['finance', 'report', 'quarterly'],
  },
  {
    id: 'task-2',
    title: 'Update Team Documentation',
    description: 'Review and update all technical documentation for the development team.',
    priority: 'medium',
    category: 'work',
    status: 'in-progress',
    assignedTo: 'user-1',
    assignedBy: 'admin-1',
    dueDate: new Date('2024-12-18'),
    estimatedTime: 120,
    acceptedAt: new Date('2024-12-11'),
    startedAt: new Date('2024-12-12'),
    createdAt: new Date('2024-12-10'),
    tags: ['documentation', 'technical'],
  },
  {
    id: 'task-3',
    title: 'Design New Landing Page',
    description: 'Create mockups for the new product landing page following brand guidelines.',
    priority: 'high',
    category: 'work',
    status: 'completed',
    assignedTo: 'user-2',
    assignedBy: 'admin-1',
    dueDate: new Date('2024-12-15'),
    estimatedTime: 240,
    actualTime: 210,
    acceptedAt: new Date('2024-12-09'),
    startedAt: new Date('2024-12-09'),
    completedAt: new Date('2024-12-14'),
    createdAt: new Date('2024-12-08'),
    tags: ['design', 'ui/ux', 'landing-page'],
  },
  {
    id: 'task-4',
    title: 'Code Review: Authentication Module',
    description: 'Review the new authentication implementation and provide feedback.',
    priority: 'medium',
    category: 'work',
    status: 'accepted',
    assignedTo: 'user-1',
    assignedBy: 'admin-1',
    dueDate: new Date('2024-12-19'),
    estimatedTime: 90,
    acceptedAt: new Date('2024-12-13'),
    createdAt: new Date('2024-12-13'),
    tags: ['code-review', 'authentication'],
  },
  {
    id: 'task-5',
    title: 'Prepare Marketing Presentation',
    description: 'Create slides for the upcoming marketing strategy meeting.',
    priority: 'low',
    category: 'work',
    status: 'declined',
    assignedTo: 'user-3',
    assignedBy: 'admin-1',
    dueDate: new Date('2024-12-17'),
    estimatedTime: 120,
    declineReason: 'This falls outside my current responsibilities. Marketing team should handle this.',
    createdAt: new Date('2024-12-11'),
    tags: ['marketing', 'presentation'],
  },
  {
    id: 'task-6',
    title: 'Weekly Fitness Challenge',
    description: 'Complete 5 workout sessions this week for better health.',
    priority: 'medium',
    category: 'health',
    status: 'in-progress',
    assignedTo: 'user-2',
    assignedBy: 'admin-1',
    dueDate: new Date('2024-12-22'),
    estimatedTime: 300,
    acceptedAt: new Date('2024-12-12'),
    startedAt: new Date('2024-12-13'),
    createdAt: new Date('2024-12-12'),
    tags: ['fitness', 'wellness'],
  },
  {
    id: 'task-7',
    title: 'Learn TypeScript Advanced Patterns',
    description: 'Complete the advanced TypeScript course and implement learnings in current project.',
    priority: 'low',
    category: 'learning',
    status: 'pending',
    assignedTo: 'user-3',
    assignedBy: 'admin-1',
    dueDate: new Date('2024-12-30'),
    estimatedTime: 480,
    createdAt: new Date('2024-12-14'),
    tags: ['learning', 'typescript', 'development'],
  },
];

// Mock Comments
export const MOCK_COMMENTS: Comment[] = [
  {
    id: 'comment-1',
    taskId: 'task-2',
    userId: 'user-1',
    userName: 'John Doe',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    text: 'I\'ve completed about 60% of the documentation updates. Should be done by tomorrow.',
    createdAt: new Date('2024-12-13T10:30:00'),
  },
  {
    id: 'comment-2',
    taskId: 'task-2',
    userId: 'admin-1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    text: 'Great progress! Please make sure to include the API documentation as well.',
    createdAt: new Date('2024-12-13T14:15:00'),
  },
];

// Mock Notifications
export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'notif-1',
    userId: 'user-1',
    type: 'task_assigned',
    title: 'New Task Assigned',
    message: 'Sarah Johnson assigned you "Complete Q4 Financial Report"',
    read: false,
    createdAt: new Date('2024-12-10T09:00:00'),
    actionUrl: '/user/tasks/task-1',
  },
  {
    id: 'notif-2',
    userId: 'user-1',
    type: 'comment_added',
    title: 'New Comment',
    message: 'Sarah Johnson commented on "Update Team Documentation"',
    read: false,
    createdAt: new Date('2024-12-13T14:15:00'),
    actionUrl: '/user/tasks/task-2',
  },
  {
    id: 'notif-3',
    userId: 'admin-1',
    type: 'task_completed',
    title: 'Task Completed',
    message: 'Jane Smith completed "Design New Landing Page"',
    read: true,
    createdAt: new Date('2024-12-14T16:30:00'),
    actionUrl: '/admin/tasks/task-3',
  },
];

// Mock Reports
export const MOCK_REPORTS: Report[] = [
  {
    id: 'report-1',
    userId: 'user-1',
    userName: 'John Doe',
    weekStart: new Date('2024-12-02'),
    weekEnd: new Date('2024-12-08'),
    generatedAt: new Date('2024-12-09'),
    sharedWithAdmin: true,
    metrics: {
      tasksCompleted: 6,
      tasksDeclined: 0,
      tasksAccepted: 7,
      totalTimeSpent: 32.5,
      averageCompletionTime: 5.4,
      completionRate: 85.7,
      categoryBreakdown: [
        { category: 'work', count: 5, timeSpent: 28, completionRate: 100 },
        { category: 'learning', count: 1, timeSpent: 4.5, completionRate: 100 },
      ],
      dailyActivity: [
        { date: new Date('2024-12-02'), tasksCompleted: 1, timeSpent: 4 },
        { date: new Date('2024-12-03'), tasksCompleted: 2, timeSpent: 8 },
        { date: new Date('2024-12-04'), tasksCompleted: 0, timeSpent: 0 },
        { date: new Date('2024-12-05'), tasksCompleted: 1, timeSpent: 5.5 },
        { date: new Date('2024-12-06'), tasksCompleted: 2, timeSpent: 9 },
        { date: new Date('2024-12-07'), tasksCompleted: 0, timeSpent: 0 },
        { date: new Date('2024-12-08'), tasksCompleted: 0, timeSpent: 6 },
      ],
      mostProductiveDay: 'Friday',
    },
  },
];

// Helper function to get user by ID
export const getUserById = (id: string): User | undefined => {
  return MOCK_USERS.find(user => user.id === id);
};

// Helper function to get tasks by user
export const getTasksByUser = (userId: string): Task[] => {
  return MOCK_TASKS.filter(task => task.assignedTo === userId);
};

// Helper function to get tasks by status
export const getTasksByStatus = (userId: string, status: string): Task[] => {
  return MOCK_TASKS.filter(
    task => task.assignedTo === userId && task.status === status
  );
};

// Helper function to get comments by task
export const getCommentsByTask = (taskId: string): Comment[] => {
  return MOCK_COMMENTS.filter(comment => comment.taskId === taskId);
};

// Helper function to get unread notifications
export const getUnreadNotifications = (userId: string): number => {
  return MOCK_NOTIFICATIONS.filter(
    notif => notif.userId === userId && !notif.read
  ).length;
};

// app/types/index.ts