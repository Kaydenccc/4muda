'use client';
import { Input } from '@material-tailwind/react';

export function InputDefault({ className }) {
  return (
    <div className={className}>
      <Input label="Nama Properti" className="w-full" color="black" />
    </div>
  );
}
