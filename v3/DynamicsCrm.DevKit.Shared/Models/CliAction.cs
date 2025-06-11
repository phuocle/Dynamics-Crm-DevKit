namespace DynamicsCrm.DevKit.Shared.Models
{
    public static class CliAction
    {
        // All constants follow the pattern [xx FULLTEXT xx] where:
        // - xx are special ASCII characters that match at beginning and end
        // - FULLTEXT is the complete action name in uppercase
        // - Text is padded with spaces to ensure uniform width (DEACTIVATED is the longest)
        public const string DO_NOTHING   = "[:: DO NOTHING ::] ";
        public const string DEPLOYED     = "[>>  DEPLOYED  <<] ";
        public const string DOWNLOADED   = "[vv DOWNLOADED vv] ";
        public const string DUPLICATED   = "[## DUPLICATED ##] ";
        public const string UPDATED      = "[**  UPDATED   **] ";
        public const string CREATED      = "[++  CREATED   ++] ";
        public const string ERROR        = "[!!   ERROR    !!] ";
        public const string REGISTER     = "[=>  REGISTER  <=] ";
        public const string DELETED      = "[--  DELETED   --] ";
        public const string DEACTIVATED  = "[xx DEACTIVATED xx] ";
        public const string ACTIVATED    = "[^^ ACTIVATED  ^^] ";
        public const string NOT_EXISTING = "[?? NOT FOUND  ??] ";
        public const string ADDED        = "[+=   ADDED    =+] ";

        // Legacy properties for backward compatibility
        public static string DoNothing => DO_NOTHING;
        public static string Deployed => DEPLOYED;
        public static string Downloaded => DOWNLOADED;
        public static string Duplicated => DUPLICATED;
        public static string Updated => UPDATED;
        public static string Created => CREATED;
        public static string Error => ERROR;
        public static string Register => REGISTER;
        public static string Deleted => DELETED;
        public static string Deactivated => DEACTIVATED;
        public static string Activated => ACTIVATED;
        public static string NotExisting => NOT_EXISTING;
        public static string Added => ADDED;
    }
}
