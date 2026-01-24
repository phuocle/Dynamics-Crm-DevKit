using DynamicsCrm.DevKit.Shared.Models;
using System;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Handles parsing of legacy connection strings (AuthType=...;Url=...;).
    /// </summary>
    public class LegacyConnectionBuilder
    {
        public CrmConnection ParseConnectionString(string connectionString)
        {
            if (string.IsNullOrWhiteSpace(connectionString)) return null;
            string authType = null;
            string url = null;
            string username = null; // user or clientid
            string domain = null;
            string secretOrPassword = null;

            var parts = connectionString.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
            foreach (var part in parts)
            {
                var kv = part.Split(new[] { '=' }, 2, StringSplitOptions.None);
                if (kv.Length != 2) continue;
                var key = kv[0].Trim();
                var value = kv[1];
                if (key.Equals("AuthType", StringComparison.OrdinalIgnoreCase)) authType = value;
                else if (key.Equals("Url", StringComparison.OrdinalIgnoreCase)) url = value;
                else if (key.Equals("ClientId", StringComparison.OrdinalIgnoreCase)) username = value;
                else if (key.Equals("Username", StringComparison.OrdinalIgnoreCase)) username = value;
                else if (key.Equals("Domain", StringComparison.OrdinalIgnoreCase)) domain = value;
                else if (key.Equals("Password", StringComparison.OrdinalIgnoreCase)) secretOrPassword = value;
                else if (key.Equals("ClientSecret", StringComparison.OrdinalIgnoreCase)) secretOrPassword = value;
            }
            if (string.IsNullOrWhiteSpace(authType)) authType = "OAuth";
            if (!string.IsNullOrEmpty(domain) && !string.IsNullOrEmpty(username) && authType.Equals("AD", StringComparison.OrdinalIgnoreCase))
                username = domain + "\\" + username;

            // Ensure we store encrypted
            string storedPassword;
            var decryptedAttempt = Helper.DecryptString(secretOrPassword);
            if (decryptedAttempt != secretOrPassword)
                storedPassword = secretOrPassword; // already encrypted
            else
                storedPassword = string.IsNullOrEmpty(secretOrPassword) ? string.Empty : Helper.EncryptString(secretOrPassword);

            // Handle ClientId/ClientSecret specific mapping if AuthType is ClientSecret
            string clientId = null;
            string clientSecret = null;
            string userReal = username;
            string passReal = storedPassword;

            if (authType.Equals("ClientSecret", StringComparison.OrdinalIgnoreCase))
            {
                clientId = username;
                clientSecret = storedPassword;
                userReal = null;
                passReal = null;
            }

            return new CrmConnection
            {
                Name = string.Empty,
                Type = authType,
                Url = url,
                UserName = userReal,
                Password = passReal,
                ClientId = clientId,
                ClientSecret = clientSecret
            };
        }
    }
}
