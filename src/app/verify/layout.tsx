import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Dribbble Dashboard ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}