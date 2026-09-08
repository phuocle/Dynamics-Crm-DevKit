using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace DynamicsCrm.DevKit.Shared
{
    internal static class Helper
    {
        private const string InitVector = "ikols9i3edkdosad";
        private const int KeySize = 256;

        public static string DecryptString(string cipherText)
        {
            try
            {
                if (string.IsNullOrEmpty(cipherText)) return string.Empty;
                var cipherTextBytes = Convert.FromBase64String(cipherText);
#pragma warning disable SYSLIB0041
                using var password = new PasswordDeriveBytes("PL.DynamicsCrm.DevKit", null);
                var keyBytes = password.GetBytes(KeySize / 8);
#pragma warning restore SYSLIB0041
                using var aes = Aes.Create();
                aes.Mode = CipherMode.CBC;
                aes.KeySize = KeySize;
                using var decryptor = aes.CreateDecryptor(keyBytes, Encoding.UTF8.GetBytes(InitVector));
                using var memoryStream = new MemoryStream(cipherTextBytes);
                using var cryptoStream = new CryptoStream(memoryStream, decryptor, CryptoStreamMode.Read);
                using var reader = new StreamReader(cryptoStream, Encoding.UTF8);
                return reader.ReadToEnd();
            }
            catch
            {
                return cipherText;
            }
        }
    }
}
