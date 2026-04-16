-- ─── Polaris Contacts Table ────────────────────────────────────────────────
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New query)

create table if not exists public.contacts (
  id         uuid        default gen_random_uuid() primary key,
  created_at timestamptz default now()             not null,
  full_name  text                                  not null,
  email      text                                  not null,
  message    text                                  not null,
  status     text        default 'new'              not null
);

-- Enable Row Level Security
alter table public.contacts enable row level security;

-- Allow anonymous INSERT (public contact form — no login required)
create policy "Allow public contact submission"
  on public.contacts
  for insert
  to anon
  with check (true);

-- Allow service_role full access (for admin)
create policy "Service role full access"
  on public.contacts
  for all
  to service_role
  using (true)
  with check (true);

-- Index for admin queries
create index if not exists contacts_status_idx     on public.contacts (status);
create index if not exists contacts_created_at_idx on public.contacts (created_at desc);
