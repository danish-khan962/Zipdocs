'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button' // Assuming Shadcn Button component

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <footer className="p-4 border-t mt-10 flex items-center justify-center gap-4">
        {/* Placeholder for buttons */}
        <div className="w-16 h-8 bg-muted rounded-md animate-pulse"></div>
        <div className="w-16 h-8 bg-muted rounded-md animate-pulse"></div>
        <div className="w-16 h-8 bg-muted rounded-md animate-pulse"></div>
      </footer>
    );
  }

  return (
    <footer className="p-4 border-t mt-10 flex items-center justify-center gap-4">
      <Button
        variant={theme === 'light' ? 'default' : 'outline'}
        onClick={() => setTheme('light')}
      >
        Light
      </Button>
      <Button
        variant={theme === 'dark' ? 'default' : 'outline'}
        onClick={() => setTheme('dark')}
      >
        Dark
      </Button>
      <Button
        variant={theme === 'system' ? 'default' : 'outline'}
        onClick={() => setTheme('system')}
      >
        System
      </Button>
    </footer>
  )
}

export default Footer
