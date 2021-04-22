# SupaScriptConsole
Javascript library for local console logging of Supabase rpc calls (PostgreSQL functions)

## Purpose
This library allows you see the console log output from your Supabase / PostgreSQL server functions written in [SupaScript](https://github.com/burggraf/SupaScript).  (SupaScript is a JavaScript-based, NodeJS-like, Deno-inspired set of extensions for Supabase & PostgreSQL server functions.)

## Example
Here's a screen shot of the Google Chrome Console showing console logging for a function running in a Supabase PostgreSQL instance:

![Chrome Debugger](./docs/sample_chrome_console_output.png)

And you can drill down on the "details" object to get complete details on the log item:

![Details Drill-down](./docs/sample_chrome_console_details.png)
