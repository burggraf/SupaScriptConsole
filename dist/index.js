"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var supabase_js_1 = require("@supabase/supabase-js");
var SupaScriptConsoleLoggingService = /** @class */ (function () {
    function SupaScriptConsoleLoggingService(obj) {
        var _this = this;
        this.StartSupaScriptConsoleLogging = function (obj) {
            var style = {
                'INFO': 'color: white; background: darkgreen;',
                'ASSERT': 'color: white; background: darkred;',
                'ERROR': 'color: white; background: darkred;',
                'LOG': 'color: black; background: white; border:1px solid;',
                'TIMER': 'color: black; background: white; border:1px solid;',
                'WARN': 'color: black; background: yellow;',
            };
            var icon = {
                'INFO': String.fromCodePoint(0x1f7e2),
                'ASSERT': String.fromCodePoint(0x274e),
                'ERROR': String.fromCodePoint(0x1f534),
                'LOG': String.fromCodePoint(0x26aa),
                'TIMER': String.fromCodePoint(0x231b),
                'WARN': String.fromCodePoint(0x1f7e1),
            };
            var supabase;
            if (obj.supabase) {
                supabase = obj.supabase;
            }
            else if (obj.url && obj.key) {
                supabase = supabase_js_1.createClient(obj.url, obj.key);
            }
            else {
                console.error('%c %s ', style.ERROR, '\Error connecting to PostgreSQL ... you must either pass an object with a Supabase Client { supabase: mySupabaseClientObject } or an object with url and key { url: "https://xxx.supabase.co", key: "anon-key"} \n');
                return null;
            }
            console.log('%c %s ', style.INFO, '\nConnected to PostgreSQL ... listening for console messages from SupaScript functions...\n');
            var subscription = supabase
                .from('supascript_log')
                .on('INSERT', function (payload) {
                var type = payload.new.log_type;
                payload.new.content.unshift(icon[type]);
                console.log.apply(console, __spreadArrays(['%c pgFunc %o', style[type]], payload.new.content, [{ details: payload.new }]));
            })
                .subscribe();
            return subscription;
        };
        this.StopSupaScriptConsoleLogging = function (subscription) {
            if (!subscription) {
                subscription = _this.subscription;
            }
            subscription.unsubscribe();
        };
        this.subscription = this.StartSupaScriptConsoleLogging(obj);
    }
    return SupaScriptConsoleLoggingService;
}());
exports.default = SupaScriptConsoleLoggingService;
