import { createClient } from '@supabase/supabase-js';
function startLogging(obj) {
    const style = {
        'INFO': 'color: white; background: darkgreen;',
        'ASSERT': 'color: white; background: darkred;',
        'ERROR': 'color: white; background: darkred;',
        'LOG': 'color: black; background: white; border:1px solid;',
        'TIMER': 'color: black; background: white; border:1px solid;',
        'WARN': 'color: black; background: yellow;',
    };
    const icon = {
        'INFO': String.fromCodePoint(0x1f7e2),
        'ASSERT': String.fromCodePoint(0x274e),
        'ERROR': String.fromCodePoint(0x1f534),
        'LOG': String.fromCodePoint(0x26aa),
        'TIMER': String.fromCodePoint(0x231b),
        'WARN': String.fromCodePoint(0x1f7e1),
    };
    let supabase;
    if (obj.supabase) {
        supabase = obj.supabase;
    }
    else if (obj.url && obj.key) {
        supabase = createClient(obj.url, obj.key);
    }
    else {
        console.error('%c %s ', style.ERROR, '\Error connecting to PostgreSQL ... you must either pass an object with a Supabase Client { supabase: mySupabaseClientObject } or an object with url and key { url: "https://xxx.supabase.co", key: "anon-key"} \n');
        return null;
    }
    console.log('%c %s ', style.INFO, '\nConnected to PostgreSQL ... listening for console messages from SupaScript functions...\n');
    let subscription;
    subscription = supabase
        .from('supascript_log')
        .on('INSERT', (payload) => {
        const type = payload.new.log_type;
        payload.new.content.unshift(icon[type]);
        console.log('%c pgFunc %o', style[type], ...payload.new.content, { details: payload.new });
    })
        .subscribe();
    return subscription;
}
export { startLogging };
//# sourceMappingURL=index.js.map