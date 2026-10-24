using System;
using System.IO;
using System.Security.Cryptography;

namespace DynamicsCrm.DevKit.Shared.Templates
{
    /// <summary>
    /// Cross-platform strong-name key (.snk) generation. Replaces the VSIX
    /// SigningHelper that P/Invokes mscoree.dll StrongNameKeyGen
    /// (Windows-only): the key blob is built in pure .NET from RSA
    /// parameters, so scaffolding works on Windows, macOS and Linux.
    /// The output is the classic CSP PRIVATEKEYBLOB format accepted by
    /// SignAssembly/AssemblyOriginatorKeyFile.
    /// </summary>
    public static class SigningService
    {
        /// <summary>
        /// PUBLICKEYSTRUC header: bType = PRIVATEKEYBLOB (0x07),
        /// bVersion = 2, reserved = 0, aiKeyAlg = CALG_RSA_SIGN (0x00002400).
        /// </summary>
        private static readonly byte[] PrivateKeyHeader = { 0x07, 0x02, 0x00, 0x00, 0x00, 0x24, 0x00, 0x00 };

        public static byte[] GenerateKeyBlob(int keySizeBits = 2048)
        {
            using (var rsa = RSA.Create())
            {
                rsa.KeySize = keySizeBits;
                var parameters = rsa.ExportParameters(true);
                return BuildCspPrivateKeyBlob(parameters);
            }
        }

        /// <summary>
        /// Generates a new .snk file in the given directory and returns its
        /// full path.
        /// </summary>
        public static string GenerateKeyFile(string directory, string keyName, int keySizeBits = 2048)
        {
            if (string.IsNullOrEmpty(directory)) throw new ArgumentNullException(nameof(directory));
            if (string.IsNullOrEmpty(keyName)) throw new ArgumentNullException(nameof(keyName));
            Directory.CreateDirectory(directory);
            var keyFilePath = Path.Combine(directory, keyName);
            File.WriteAllBytes(keyFilePath, GenerateKeyBlob(keySizeBits));
            return keyFilePath;
        }

        private static byte[] BuildCspPrivateKeyBlob(RSAParameters parameters)
        {
            // CSP PRIVATEKEYBLOB fields are fixed-size: modulus/D use the
            // full key size, the CRT parameters use half of it. Values are
            // stored little-endian, left-padded with zero bytes.
            var modulus = FixedLengthLittleEndian(parameters.Modulus, parameters.Modulus.Length);
            var prime1 = FixedLengthLittleEndian(parameters.P, parameters.Modulus.Length / 2);
            var prime2 = FixedLengthLittleEndian(parameters.Q, parameters.Modulus.Length / 2);
            var exponent1 = FixedLengthLittleEndian(parameters.DP, parameters.Modulus.Length / 2);
            var exponent2 = FixedLengthLittleEndian(parameters.DQ, parameters.Modulus.Length / 2);
            var coefficient = FixedLengthLittleEndian(parameters.InverseQ, parameters.Modulus.Length / 2);
            var privateExponent = FixedLengthLittleEndian(parameters.D, parameters.Modulus.Length);
            // RSAPUBKEY: magic "RSA2" (0x32415352), bit length, public
            // exponent. Note pubexp is the exponent VALUE as a little-
            // endian DWORD (65537 => 01 00 01 00), not a length.
            var rsaPubKey = new byte[12];
            rsaPubKey[0] = 0x52; // R
            rsaPubKey[1] = 0x53; // S
            rsaPubKey[2] = 0x41; // A
            rsaPubKey[3] = 0x32; // 2
            var bitLength = modulus.Length * 8;
            rsaPubKey[4] = (byte)(bitLength & 0xFF);
            rsaPubKey[5] = (byte)((bitLength >> 8) & 0xFF);
            rsaPubKey[6] = (byte)((bitLength >> 16) & 0xFF);
            rsaPubKey[7] = (byte)((bitLength >> 24) & 0xFF);
            var exponentValue = ToUInt32(parameters.Exponent);
            rsaPubKey[8] = (byte)(exponentValue & 0xFF);
            rsaPubKey[9] = (byte)((exponentValue >> 8) & 0xFF);
            rsaPubKey[10] = (byte)((exponentValue >> 16) & 0xFF);
            rsaPubKey[11] = (byte)((exponentValue >> 24) & 0xFF);

            using (var stream = new MemoryStream())
            {
                stream.Write(PrivateKeyHeader, 0, PrivateKeyHeader.Length);
                stream.Write(rsaPubKey, 0, rsaPubKey.Length);
                stream.Write(modulus, 0, modulus.Length);
                stream.Write(prime1, 0, prime1.Length);
                stream.Write(prime2, 0, prime2.Length);
                stream.Write(exponent1, 0, exponent1.Length);
                stream.Write(exponent2, 0, exponent2.Length);
                stream.Write(coefficient, 0, coefficient.Length);
                stream.Write(privateExponent, 0, privateExponent.Length);
                return stream.ToArray();
            }
        }

        private static byte[] FixedLengthLittleEndian(byte[] value, int length)
        {
            var trimmed = TrimLeadingZeros(value);
            if (trimmed.Length > length)
            {
                throw new InvalidOperationException($"RSA parameter is longer than the CSP field ({trimmed.Length} > {length}).");
            }
            var result = new byte[length];
            for (var i = 0; i < trimmed.Length; i++)
            {
                result[i] = trimmed[trimmed.Length - 1 - i];
            }
            return result;
        }

        private static byte[] TrimLeadingZeros(byte[] value)
        {
            if (value == null) throw new ArgumentNullException(nameof(value));
            var offset = 0;
            while (offset < value.Length - 1 && value[offset] == 0)
            {
                offset++;
            }
            if (offset == 0) return value;
            var trimmed = new byte[value.Length - offset];
            Array.Copy(value, offset, trimmed, 0, trimmed.Length);
            return trimmed;
        }

        private static uint ToUInt32(byte[] bigEndian)
        {
            var trimmed = TrimLeadingZeros(bigEndian);
            uint value = 0;
            foreach (var bit in trimmed)
            {
                value = checked(value * 256 + bit);
            }
            return value;
        }
    }
}
