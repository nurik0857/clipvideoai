import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

export function SignUp() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log('Login Success:', tokenResponse);
            // Redirect to dashboard after successful login
            window.location.href = 'https://videoai.app/dashboard';
        },
        onError: error => {
            console.error('Login Failed:', error);
        }
    });

    return (
        <div className="auth-card">
            <h2 style={{ marginBottom: '1rem' }}>Start Creating</h2>
            <p style={{ 
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                fontSize: '0.9rem'
            }}>
                Get 3 free AI-powered video edits
            </p>
            <button className="google-btn" onClick={() => login()}>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                    alt="Google logo" 
                />
                Continue with Google
            </button>
            <p style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-secondary)',
                marginTop: '1rem',
                textAlign: 'center'
            }}>
                By signing up, you agree to our{' '}
                <a href="https://videoai.app/terms" style={{ color: 'var(--primary-color)' }}>Terms</a>
                {' '}and{' '}
                <a href="https://videoai.app/privacy" style={{ color: 'var(--primary-color)' }}>Privacy Policy</a>
            </p>
        </div>
    );
} 