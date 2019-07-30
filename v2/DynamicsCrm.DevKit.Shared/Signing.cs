using System;
using System.IO;
using System.Runtime.InteropServices;
using EnvDTE;

namespace DynamicsCrm.DevKit.Shared
{
    public static class Signing
    {
        [DllImport("mscoree.dll")]
        internal static extern int StrongNameFreeBuffer(IntPtr pbMemory);

        [DllImport("mscoree.dll", CharSet = CharSet.Unicode, ExactSpelling = true)]
        internal static extern int StrongNameKeyGen(IntPtr wszKeyContainer, uint dwFlags, out IntPtr keyBlob, out uint keyBlobSize);

        [DllImport("mscoree.dll", CharSet = CharSet.Unicode)]
        internal static extern int StrongNameErrorInfo();

        public static void GenerateKey(Project project, string destDirectory, string keyName)
        {
            try
            {
                if (string.IsNullOrEmpty(destDirectory))
                    return;
                var keyFilePath = Path.Combine(destDirectory, keyName);
                var buffer = IntPtr.Zero;
                WriteKeydata(buffer, keyFilePath);
                project.Properties.Item("SignAssembly").Value = "true";
                project.Properties.Item("AssemblyOriginatorKeyFile").Value = keyName;
                project.ProjectItems.AddFromFile(keyFilePath);
            }
            catch
            {
            }
            finally
            {
            }
        }

        private static void WriteKeydata(IntPtr buffer, string keyFilePath)
        {
            try
            {
                if (0 != StrongNameKeyGen(IntPtr.Zero, 0, out buffer, out var buffSize))
                    Marshal.ThrowExceptionForHR(StrongNameErrorInfo());
                if (buffer == IntPtr.Zero)
                    throw new InvalidOperationException();
                var keyBuffer = new byte[buffSize];
                Marshal.Copy(buffer, keyBuffer, 0, (int)buffSize);
                File.WriteAllBytes(keyFilePath, keyBuffer);
            }
            finally
            {
                StrongNameFreeBuffer(buffer);
            }
        }
    }
}
