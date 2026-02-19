import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        xxl: 'var(--spacing-xxl)',
      },
      colors: {
        bg: 'var(--color-bg)',
        primary: 'var(--color-primary)',
        hover: 'var(--color-hover)',
        muted: 'var(--color-muted)',
      },
      fontFamily: {
        primary: 'var(--font-primary)',
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        md: 'var(--text-md)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
      },
    },
  },
} satisfies Config
