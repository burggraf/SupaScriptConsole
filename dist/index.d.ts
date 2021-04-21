import { RealtimeSubscription } from '@supabase/supabase-js';
export default class SupaScriptConsoleLoggingService {
    subscription: any;
    constructor(obj: any);
    StartSupaScriptConsoleLogging: (obj: any) => RealtimeSubscription;
    StopSupaScriptConsoleLogging: (subscription: any) => void;
}
