using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.Text;

namespace DynamicsCrm.DevKit.Shared
{
    /// <summary>
    /// Helper class to generate CLI arguments based on connection type.
    /// Used by batch file templates to create type-specific connection args.
    /// </summary>
    public static class CliArgsBuilder
    {
        /// <summary>
        /// Build CLI arguments for a specific connection type.
        /// Returns the full args string to use after "devkit [command]".
        /// </summary>
        /// <param name="connection">The CRM connection configuration</param>
        /// <param name="encryptSecrets">If true, encrypt secrets before embedding in batch file</param>
        /// <returns>CLI arguments string ready for use in batch file</returns>
        /// <example>
        /// ClientSecret: --auth ClientSecret --url "https://org.crm.dynamics.com" --clientid "..." --clientsecret "..."
        /// OAuth/AD: --conn "AuthType=OAuth;Url=...;..."
        /// Interactive: --auth Interactive --url "https://org.crm.dynamics.com" --clientid "..."
        /// FromPac: --pacprofile "my-profile"
        /// </example>
        public static string Build(CrmConnection connection, bool encryptSecrets = false)
        {
            if (connection == null) return string.Empty;

            var type = connection.Type?.ToUpperInvariant() ?? "OAUTH";

            switch (type)
            {
                case "CLIENTSECRET":
                    return BuildClientSecretArgs(connection, encryptSecrets);

                case "INTERACTIVE":
                    return BuildInteractiveArgs(connection);

                case "DEVICECODE":
                    return BuildDeviceCodeArgs(connection);

                case "FROMPAC":
                    return BuildFromPacArgs(connection);

                case "OAUTH":
                    return BuildOAuthArgs(connection, encryptSecrets);

                case "AD":
                    return BuildADArgs(connection, encryptSecrets);

                default:
                    throw new NotSupportedException($"Connection type '{connection.Type}' is not supported. Supported types: ClientSecret, OAuth, Interactive, DeviceCode, FromPac, AD.");
            }
        }

        /// <summary>
        /// Build CLI args for ClientSecret authentication.
        /// </summary>
        private static string BuildClientSecretArgs(CrmConnection connection, bool encryptSecrets)
        {
            var sb = new StringBuilder();
            sb.Append("--auth ClientSecret");
            sb.Append($" --url \"{connection.Url}\"");

            // Use ClientId field if available, otherwise fallback to UserName
            var clientId = !string.IsNullOrEmpty(connection.ClientId)
                ? connection.ClientId
                : connection.UserName;
            sb.Append($" --clientid \"{clientId}\"");

            // Use ClientSecret field if available, otherwise fallback to Password
            var secretValue = !string.IsNullOrEmpty(connection.ClientSecret)
                ? Helper.DecryptString(connection.ClientSecret)
                : Helper.DecryptString(connection.Password);

            if (encryptSecrets && !string.IsNullOrEmpty(secretValue))
            {
                secretValue = Helper.EncryptString(secretValue);
            }
            sb.Append($" --clientsecret \"{secretValue}\"");

            return sb.ToString();
        }

        /// <summary>
        /// Build CLI args for Interactive (browser) authentication.
        /// </summary>
        private static string BuildInteractiveArgs(CrmConnection connection)
        {
            var sb = new StringBuilder();
            sb.Append("--auth Interactive");
            sb.Append($" --url \"{connection.Url}\"");

            // ClientId is optional for Interactive - uses Microsoft default if not specified
            if (!string.IsNullOrEmpty(connection.ClientId))
            {
                sb.Append($" --clientid \"{connection.ClientId}\"");
            }

            return sb.ToString();
        }

        /// <summary>
        /// Build CLI args for DeviceCode authentication.
        /// </summary>
        private static string BuildDeviceCodeArgs(CrmConnection connection)
        {
            var sb = new StringBuilder();
            sb.Append("--auth DeviceCode");
            sb.Append($" --url \"{connection.Url}\"");

            // ClientId is optional for DeviceCode - uses Microsoft default if not specified
            if (!string.IsNullOrEmpty(connection.ClientId))
            {
                sb.Append($" --clientid \"{connection.ClientId}\"");
            }

            return sb.ToString();
        }

        /// <summary>
        /// Build CLI args for OAuth (Username/Password) authentication.
        /// Uses modern CLI format instead of legacy connection string.
        /// </summary>
        private static string BuildOAuthArgs(CrmConnection connection, bool encryptSecrets)
        {
            var sb = new StringBuilder();
            sb.Append("--auth OAuth");
            sb.Append($" --url \"{connection.Url}\"");

            // Username
            if (!string.IsNullOrEmpty(connection.UserName))
            {
                sb.Append($" --username \"{connection.UserName}\"");
            }

            // Password (encrypted if requested)
            var password = Helper.DecryptString(connection.Password);
            if (!string.IsNullOrEmpty(password))
            {
                if (encryptSecrets)
                {
                    password = Helper.EncryptString(password);
                }
                sb.Append($" --password \"{password}\"");
            }

            // ClientId is optional - uses Microsoft default if not specified
            if (!string.IsNullOrEmpty(connection.ClientId))
            {
                sb.Append($" --clientid \"{connection.ClientId}\"");
            }

            return sb.ToString();
        }

        /// <summary>
        /// Build CLI args for FromPac (PAC CLI profile) authentication.
        /// </summary>
        private static string BuildFromPacArgs(CrmConnection connection)
        {
            // For FromPac, we use the PacProfile field
            // If not set, check UserName as fallback (older data)
            var profile = !string.IsNullOrEmpty(connection.PacProfile)
                ? connection.PacProfile
                : connection.UserName;

            if (string.IsNullOrEmpty(profile))
            {
                throw new ArgumentException("PAC profile name is required for FromPac authentication");
            }

            return $"--pacprofile \"{profile}\"";
        }

        /// <summary>
        /// Build CLI args for AD (Active Directory) on-premises authentication.
        /// Uses modern CLI format with --auth AD --url --domain --username --password.
        /// </summary>
        private static string BuildADArgs(CrmConnection connection, bool encryptSecrets)
        {
            var sb = new StringBuilder();
            sb.Append("--auth AD");
            sb.Append($" --url \"{connection.Url}\"");

            // Parse domain from username (format: domain\username)
            var username = connection.UserName ?? string.Empty;
            string domain = string.Empty;
            string user = username;

            if (username.Contains("\\"))
            {
                var parts = username.Split('\\');
                if (parts.Length == 2)
                {
                    domain = parts[0];
                    user = parts[1];
                }
            }

            if (!string.IsNullOrEmpty(domain))
            {
                sb.Append($" --domain \"{domain}\"");
            }

            if (!string.IsNullOrEmpty(user))
            {
                sb.Append($" --username \"{user}\"");
            }

            // Password (encrypted if requested)
            var password = Helper.DecryptString(connection.Password);
            if (!string.IsNullOrEmpty(password))
            {
                if (encryptSecrets)
                {
                    password = Helper.EncryptString(password);
                }
                sb.Append($" --password \"{password}\"");
            }

            return sb.ToString();
        }
    }
}
