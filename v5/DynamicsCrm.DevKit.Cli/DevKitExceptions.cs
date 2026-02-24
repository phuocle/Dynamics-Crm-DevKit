using System;

namespace DynamicsCrm.DevKit.Cli
{
    public static class ExitCodes
    {
        public const int Success = 0;
        public const int ValidationError = 1;
        public const int ConnectionError = 2;
        public const int RuntimeError = 3;
        public const int ConfigurationError = 4;
    }

    public class DevKitValidationException : Exception
    {
        public DevKitValidationException(string message) : base(message) { }
        public DevKitValidationException(string message, Exception inner) : base(message, inner) { }
    }

    public class DevKitConnectionException : Exception
    {
        public DevKitConnectionException(string message) : base(message) { }
        public DevKitConnectionException(string message, Exception inner) : base(message, inner) { }
    }

    public class DevKitConfigurationException : Exception
    {
        public DevKitConfigurationException(string message) : base(message) { }
        public DevKitConfigurationException(string message, Exception inner) : base(message, inner) { }
    }

    public class DevKitDeploymentException : Exception
    {
        public DevKitDeploymentException(string message) : base(message) { }
        public DevKitDeploymentException(string message, Exception inner) : base(message, inner) { }
    }
}
