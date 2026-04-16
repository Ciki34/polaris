-- ─── Polaris Orders Table ─────────────────────────────────────────────────
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New query)

create table if not exists public.orders (
  id          uuid        default gen_random_uuid() primary key,
  created_at  timestamptz default now()             not null,
  full_name   text                                  not null,
  email       text                                  not null,
  phone       text                                  not null,
  city        text                                  not null,
  address     text                                  not null,
  postcode    text                                  not null,
  items       jsonb       default '[]'::jsonb        not null,
  total_price numeric                               not null,
  currency    text        default 'RSD'              not null,
  status      text        default 'pending'          not null,
  notes       text
);

-- Enable Row Level Security
alter table public.orders enable row level security;

-- Allow anonymous INSERT (public checkout — no login required)
create policy "Allow public order creation"
  on public.orders
  for insert
  to anon
  with check (true);

-- Allow service_role full access (for admin dashboard)
create policy "Service role full access"
  on public.orders
  for all
  to service_role
  using (true)
  with check (true);

-- Index for admin queries by status and date
create index if not exists orders_status_idx    on public.orders (status);
create index if not exists orders_created_at_idx on public.orders (created_at desc);
