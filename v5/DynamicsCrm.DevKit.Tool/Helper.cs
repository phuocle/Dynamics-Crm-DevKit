using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace DynamicsCrm.DevKit.Tool
{
    internal class Helper
    {
        private const string initVector = "ikols9i3edkdosad";
        private const int keysize = 256;

        public static string DecryptString(string cipherText)
        {
            try
            {
                if (string.IsNullOrEmpty(cipherText)) return string.Empty;
                string passPhrase = "PL.DynamicsCrm.DevKit";
                byte[] initVectorBytes = Encoding.UTF8.GetBytes(initVector);
                byte[] cipherTextBytes = Convert.FromBase64String(cipherText);
#pragma warning disable SYSLIB0041
                PasswordDeriveBytes password = new PasswordDeriveBytes(passPhrase, null);
                byte[] keyBytes = password.GetBytes(keysize / 8);
#pragma warning restore SYSLIB0041
                using (var aes = Aes.Create())
                {
                    aes.Mode = CipherMode.CBC;
                    aes.KeySize = keysize;
                    using (var decryptor = aes.CreateDecryptor(keyBytes, initVectorBytes))
                    using (var memoryStream = new MemoryStream(cipherTextBytes))
                    using (var cryptoStream = new CryptoStream(memoryStream, decryptor, CryptoStreamMode.Read))
                    using (var reader = new StreamReader(cryptoStream, Encoding.UTF8))
                    {
                        return reader.ReadToEnd();
                    }
                }
            }
            catch { return cipherText; }
        }
    }
}
