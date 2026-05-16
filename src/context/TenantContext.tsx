'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Tenant {
  id: string;
  name: string;
  slug: string;
}

interface TenantContextType {
  currentTenant: Tenant | null;
  setCurrentTenant: (tenant: Tenant | null) => void;
  isLoading: boolean;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [currentTenant, setCurrentTenant] = useState<Tenant | null>(() => {
    if (typeof window !== 'undefined') {
      const storedTenant = localStorage.getItem('current_tenant');
      if (storedTenant) {
        try {
          return JSON.parse(storedTenant);
        } catch {
          console.error('Failed to parse stored tenant');
        }
      }
    }
    return null;
  });
  // isLoading is currently not used because initialization is synchronous
  const isLoading = false;

  useEffect(() => {
    // Initialization logic for other things if needed
  }, []);

  const handleSetTenant = (tenant: Tenant | null) => {
    setCurrentTenant(tenant);
    if (tenant) {
      localStorage.setItem('current_tenant', JSON.stringify(tenant));
    } else {
      localStorage.removeItem('current_tenant');
    }
  };

  return (
    <TenantContext.Provider value={{ currentTenant, setCurrentTenant: handleSetTenant, isLoading }}>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const context = useContext(TenantContext);
  if (context === undefined) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
}
