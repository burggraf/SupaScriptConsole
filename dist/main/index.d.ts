declare const SupaScriptConsoleLoggingService: (obj: any) => SupaScriptConsoleLogging;
declare class SupaScriptConsoleLogging {
    subscription: any;
    constructor(obj: any);
    StartSupaScriptConsoleLogging: (obj: any) => import("@supabase/supabase-js").RealtimeSubscription | null;
    StopSupaScriptConsoleLogging: (subscription: any) => void;
}
export { SupaScriptConsoleLoggingService };
//# sourceMappingURL=index.d.ts.map