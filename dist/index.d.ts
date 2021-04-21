export default class SupaScriptConsoleLoggingService {
    subscription: any;
    constructor(obj: any);
    StartSupaScriptConsoleLogging: (obj: any) => import("@supabase/supabase-js").RealtimeSubscription;
    StopSupaScriptConsoleLogging: (subscription: any) => void;
}
