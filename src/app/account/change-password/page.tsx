'use client';

import React, { useState } from 'react';
import { KeyRound, Lock, Unlock } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const ChangePasswordPage = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (newPassword.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }
        setError('');
        // Handle successful password change logic here
        console.log("Password changed successfully");
    };

  return (
    <div className="bg-gray-50/50 flex justify-center py-8 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800">Change Password</h1>
                <p className="text-gray-500 mt-2">Ensure your account is using a strong, unique password.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    id="currentPassword"
                    label="Current Password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    icon={<KeyRound size={18} />}
                    togglePassword
                    required
                />
                <Input
                    id="newPassword"
                    label="New Password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    icon={<Lock size={18} />}
                    togglePassword
                    required
                />
                <Input
                    id="confirmPassword"
                    label="Confirm New Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    icon={<Unlock size={18} />}
                    togglePassword
                    required
                    error={error}
                />

                <div className="pt-4">
                    <Button type="submit" size="lg" fullWidth>
                        Update Password
                    </Button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default ChangePasswordPage; 