// src/pages/Login.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: true,
    showPassword: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
    // Prefill email if remembered previously
    const savedEmail = localStorage.getItem('thg_saved_email');
    if (savedEmail) setForm((f) => ({ ...f, email: savedEmail }));
  }, []);

  const onChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    // clear per-field error as user edits
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!EMAIL_RE.test(form.email)) er.email = 'Enter a valid email address.';
    if (!form.password || form.password.length < 8) er.password = 'Password must be at least 8 characters.';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      // Simulate a login call
      await new Promise((r) => setTimeout(r, 800));
      if (form.remember) {
        localStorage.setItem('thg_saved_email', form.email);
      } else {
        localStorage.removeItem('thg_saved_email');
      }
      setDone(true);
    } catch {
      setErrors({ form: 'Login failed. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-bg text-dark">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="text-center mb-8" data-aos="fade-up">
          <h1 className="text-4xl font-bold">Sign in</h1>
          <p className="text-gray-600 mt-2">Welcome back. Please log in to continue.</p>
        </header>

        {/* Card */}
        <div className="bg-white border rounded-xl p-6 md:p-8" data-aos="fade-up" data-aos-delay="50" role="region" aria-label="Login form">
          {done ? (
            <Success />
          ) : (
            <form noValidate onSubmit={onSubmit} className="space-y-5">
              {errors.form && (
                <div className="rounded-md border border-red-200 bg-red-50 text-red-700 px-3 py-2" role="alert">
                  {errors.form}
                </div>
              )}

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  value={form.email}
                  onChange={onChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-err' : undefined}
                  className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p id="email-err" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <a href="/reset" className="text-sm text-primary underline hover:no-underline">
                    Forgot password?
                  </a>
                </div>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={form.showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={form.password}
                    onChange={onChange}
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? 'password-err' : undefined}
                    className="w-full rounded-md border px-3 py-2 pr-11 outline-none focus:ring-2 focus:ring-accent"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, showPassword: !f.showPassword }))}
                    aria-pressed={form.showPassword}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-gray-500 hover:text-dark focus:outline-none focus:ring-2 focus:ring-accent"
                    title={form.showPassword ? 'Hide password' : 'Show password'}
                  >
                    {form.showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-err" className="mt-1 text-sm text-red-600">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={onChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-accent"
                  />
                  <span className="text-sm">Remember me</span>
                </label>
                <a href="/contact" className="text-sm text-primary underline hover:no-underline">
                  Need help?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 font-semibold text-dark hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Signing in…' : 'Sign in'}
              </button>

              {/* Divider */}
              <div className="relative text-center">
                <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gray-200" />
                <span className="relative bg-white px-2 text-xs text-gray-500">or</span>
              </div>

              {/* Social (placeholders) */}
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="rounded-md border px-3 py-2 hover:bg-gray-50">
                  Continue with Google
                </button>
                <button type="button" className="rounded-md border px-3 py-2 hover:bg-gray-50">
                  Continue with Microsoft
                </button>
              </div>

              {/* Sign up hint */}
              <p className="text-center text-sm text-gray-600">
                Don’t have an account?{' '}
                <a href="/contact" className="text-primary underline hover:no-underline">
                  Contact us
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Icons & Success --------------- */
function EyeIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function EyeOffIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M17.94 17.94A10.94 10.94 0 0112 19c-6 0-10-7-10-7a20.37 20.37 0 013.06-3.95m3.28-2.24A10.94 10.94 0 0112 5c6 0 10 7 10 7a20.3 20.3 0 01-4.06 4.95" />
      <path d="M1 1l22 22" />
    </svg>
  );
}
function Success() {
  return (
    <div className="text-center" role="status" aria-live="polite">
      <div className="mx-auto h-12 w-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h2 className="mt-4 text-xl font-semibold">Signed in</h2>
      <p className="text-gray-600 mt-1">You’re now logged in. You can close this tab or continue browsing.</p>
      <a href="/home" className="mt-4 inline-flex rounded-md bg-accent px-4 py-2 font-semibold text-dark hover:brightness-95">
        Go to Home
      </a>
    </div>
  );
}
