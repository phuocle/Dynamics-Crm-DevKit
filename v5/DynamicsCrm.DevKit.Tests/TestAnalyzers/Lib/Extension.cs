using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Xml;

namespace Microsoft.Xrm.Sdk
{
    [DebuggerNonUserCode()]
    public static class Extension
    {
        public static T InputParameterOrDefault<T>(this IExecutionContext context, string parameterName)
        {
            if (context?.InputParameters == null) return default(T);
            if (context.InputParameters.Contains(parameterName))
            {
                return (T)context.InputParameters[parameterName];
            }
            return default(T);
        }

        public static T OutputParameterOrDefault<T>(this IExecutionContext context, string parameterName)
        {
            if (context?.OutputParameters == null) return default(T);
            if (context.OutputParameters.Contains(parameterName))
            {
                return (T)context.OutputParameters[parameterName];
            }
            return default(T);
        }        
    }
}
