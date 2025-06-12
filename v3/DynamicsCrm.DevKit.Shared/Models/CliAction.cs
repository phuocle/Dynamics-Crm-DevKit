namespace DynamicsCrm.DevKit.Shared.Models
{
    public static class CliAction
    {
        public const string DO_NOTHING = "[:: SKIPPED ::] ";
        public const string DEPLOYED = "[>> DEPLOYED <<] ";
        public const string DOWNLOADED = "[vv DOWNLOADED vv] ";
        public const string DUPLICATED = "[## DUPLICATED ##] ";
        public const string UPDATED = "[** UPDATED **] ";
        public const string CREATED = "[++ CREATED ++] ";
        public const string ERROR = "[!! ERROR !!] ";
        public const string REGISTER = "[=> REGISTER <=] ";
        public const string DELETED = "[-- DELETED --] ";
        public const string DEACTIVATED = "[xx DEACTIVATED xx] ";
        public const string ACTIVATED = "[^^ ACTIVATED ^^] ";
        public const string NOT_EXISTING = "[?? NOT FOUND ??] ";
        public const string ADDED = "[+= ADDED =+] ";
    }
}
