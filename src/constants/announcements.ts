import type { Announcement } from '@/types/announcement';

/**
 * Site Announcements Configuration
 *
 * Add announcements here. They will automatically appear based on their
 * startDate/endDate settings. Once expired, remove them from this list.
 *
 * @example
 * {
 *   id: 'unique-id',
 *   title: 'Announcement Title',
 *   content: 'Announcement content text...',
 *   type: 'info',  // info | warning | success | important
 *   priority: 10,  // higher = shown first
 *   publishDate: '2026-01-01',  // display date
 *   startDate: '2025-01-01T00:00:00+08:00',  // optional
 *   endDate: '2025-01-07T23:59:59+08:00',    // optional
 *   color: '#FF6B6B',  // optional custom color
 *   link: { url: 'https://...', text: 'Learn more', external: true },
 * }
 */
export const announcements: Announcement[] = [
  {
    id: 'welcome-2026',
    title: '2026 年新年快乐!',
    content: '新年快乐! 感谢大家一直以来的支持~',
    type: 'important',
    priority: 10,
    color: '#86ff6b',
    publishDate: '2026-01-01',
    startDate: '2025-12-31T00:00:00+08:00',
    endDate: '2026-01-15T23:59:59+08:00',
    link: {
      url: 'https://example.com',
      text: '了解更多',
      external: true,
    },
  },
  {
    id: 'site-update',
    title: '公告测试',
    content: '公告测试！！！',
    type: 'info',
    priority: 5,
    color: '#6366F1',
    publishDate: '2025-12-25',
  },
];
