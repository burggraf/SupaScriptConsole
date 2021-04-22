# SupaScriptConsole
Javascript/Typescript library for local (client-side) console logging of Supabase rpc calls (PostgreSQL functions)

## Purpose
This library allows you see the console log output from your Supabase / PostgreSQL server functions written in [SupaScript](https://github.com/burggraf/SupaScript).  (SupaScript is a JavaScript-based, NodeJS-like, Deno-inspired set of extensions for Supabase & PostgreSQL server functions.)

## Example
Here's a screen shot of the Google Chrome Console showing console logging for a function running in a Supabase PostgreSQL instance:

![Chrome Debugger](./docs/sample_chrome_console_output.png)

And you can drill down on the "details" object to get complete details on the log item:

![Details Drill-down](./docs/sample_chome_console_details.png)

## Install
```
npm install https://github.com/burggraf/SupaScriptConsole.git --save
```

## Usage
Import the library at the top of your module:
```js
import { startLogging } from 'supascriptconsole';
```
Now just call it in your code (usually in a constructor or other startup code):
```js
startLogging({supabase: this.supabase});
```
To stop logging, just assign the output to a variable then call `unsubscribe()` on that variable later.
```js
this.subscription = startLogging({supabase: this.supabase});
// later
this.subscription.unsubscribe();
```
## How to add logging to your SupaScript functions
See the [SupaScript Console Docs](https://github.com/burggraf/SupaScript/blob/main/docs/console.md)

## Logging types supported
In your SupaScript functions, you can use:
```js
console.log();
console.info();
console.warn();
console.error();
console.assert();
console.time();
console.timeEnd()
```

## SupaScript (server side) complete example
```js
create or replace function test_console() returns text as $$
  console.time('test-my-function');
  console.log('logged to the console at:', new Date());
  for (let x = 0; x < 100000; x++) {
    const busyWork = 'this is loop #' + x.toString();
  }
  console.log('strings', 12345, {'object': {'with': 'nested', 'items': [1, 2, 3, 'Go!']}});
  console.info('shows up in green');
  console.warn('shows up in yellow');
  console.error('shows up in red');
  console.assert(false, 'only logs if the first parameter evaluates to false');

  console.timeEnd('test-my-function'); // profiling FTW!
  return 'ok';
$$ language plv8;
```

## Call the server function in your client code
```js
const { data, error } = await this.supabase
.rpc('test_console');
```
Now you can call the function from your client code and view the console debug messages right in your browser while testing your app!
