do $$
declare
  legacy_column text;
begin
  select column_name
  into legacy_column
  from information_schema.columns
  where table_schema = 'public'
    and table_name = 'user_sessions'
    and column_name like '%sale_id'
  limit 1;

  if legacy_column is not null and legacy_column <> 'payment_reference' then
    execute format(
      'alter table public.user_sessions rename column %I to payment_reference',
      legacy_column
    );
  end if;
end $$;
