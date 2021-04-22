declare function startLogging(obj: any): void;
declare class SupaScriptConsoleLoggingService {
    subscription: any;
    constructor(obj: any);
    StartSupaScriptConsoleLogging: (obj: any) => import("@supabase/supabase-js").RealtimeSubscription | null;
    StopSupaScriptConsoleLogging: (subscription: any) => void;
}
export { SupaScriptConsoleLoggingService, startLogging };
//# sourceMappingURL=index.d.ts.map