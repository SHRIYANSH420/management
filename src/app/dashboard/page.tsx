import { Navbar } from '@/components/Navbar'
import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const session = getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
  <div>
    <Navbar />
    </div>
  )
}

export default Dashboard