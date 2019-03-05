using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace SunFlower.Shared
{
    public enum ImageType
    {
        Pre,
        Post
    }

    public enum ExecutionModeEnum
    {
        Synchronous = 0,
        Asynchronous = 1
    }

    public enum ImageTypeEnum
    {
        PreImage = 0,
        PostImage = 1,
        Both = 2
    }

    public enum IsolationModeEnum
    {
        None = 0,
        Sandbox = 1
    }

    public enum PluginStepOperationEnum
    {
        Activate = 0,
        Deactivate = 1,
    }

    public enum StageEnum
    {
        PreValidation = 10,
        PreOperation = 20,
        PostOperation = 40
    }

    [DebuggerNonUserCode()]
    [AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = true)]
    public class CrmPluginRegistrationAttribute : Attribute
    {
        public CrmPluginRegistrationAttribute(string message, string entityLogicalName, StageEnum stage, ExecutionModeEnum executionMode, string filteringAttributes, string stepName, int executionOrder, IsolationModeEnum isolationModel)
        {
            Message = message;
            EntityLogicalName = entityLogicalName;
            Stage = stage;
            ExecutionMode = executionMode;
            FilteringAttributes = filteringAttributes;
            Name = stepName;
            ExecutionOrder = executionOrder;
            IsolationMode = isolationModel;
        }

        public CrmPluginRegistrationAttribute(string name, string friendlyName, string description, string groupName, IsolationModeEnum isolationModel)
        {
            Name = name;
            FriendlyName = friendlyName;
            Description = description;
            GroupName = groupName;
            IsolationMode = isolationModel;
        }

        public string FriendlyName { get; set; }
        public string GroupName { get; set; }
        public string Description { get; set; }
        public bool DeleteAsyncOperation { get; set; } = true;
        public bool Offline { get; set; } = false;
        public bool Server { get; set; } = true;
        public PluginStepOperationEnum Action { get; set; } = PluginStepOperationEnum.Activate;
        public IsolationModeEnum IsolationMode { get; set; } = IsolationModeEnum.Sandbox;
        public string Message { get; set; }
        public string EntityLogicalName { get; set; }
        public string FilteringAttributes { get; set; }
        public string Name { get; set; }
        public int ExecutionOrder { get; set; }
        public StageEnum Stage { get; set; } = StageEnum.PostOperation;
        public ExecutionModeEnum ExecutionMode { get; set; } = ExecutionModeEnum.Asynchronous;
        public string UnSecureConfiguration { get; set; }
        public string SecureConfiguration { get; set; }
        public string Image1Name { get; set; }
        public string Image1Alias { get; set; }
        public ImageTypeEnum Image1Type { get; set; } = ImageTypeEnum.PreImage;
        public string Image1Attributes { get; set; }
        public string Image2Name { get; set; }
        public string Image2Alias { get; set; }
        public ImageTypeEnum Image2Type { get; set; } = ImageTypeEnum.PostImage;
        public string Image2Attributes { get; set; }
        public string Image3Name { get; set; }
        public string Image3Alias { get; set; }
        public ImageTypeEnum Image3Type { get; set; } = ImageTypeEnum.PostImage;
        public string Image3Attributes { get; set; }
        public string Image4Name { get; set; }
        public string Image4Alias { get; set; }
        public ImageTypeEnum Image4Type { get; set; } = ImageTypeEnum.PostImage;
        public string Image4Attributes { get; set; }
    }

    [DebuggerNonUserCode()]
    public static class Debugger
    {
        public static void Trace(ITracingService ts, string message)
        {
#if DEBUG
            ts.Trace($"\n{message}");
#endif
        }

        public static void Begin(ITracingService ts, IPluginExecutionContext ctx)
        {
#if DEBUG
            ts.Trace("Trace enter: {0:o}\n", DateTime.Now);
            ts.Trace("Message : {0}", ctx.MessageName);
            ts.Trace("Stage   : {0}", ctx.Stage);
            ts.Trace("Mode    : {0}", ctx.Mode);
            ts.Trace("Entity  : {0}", ctx.PrimaryEntityName);
            if (!ctx.PrimaryEntityId.Equals(Guid.Empty))
            {
                ts.Trace("Id      : {0}", ctx.PrimaryEntityId);
            }
            ts.Trace("");
            TraceAndAlign("InputParameters", ctx.InputParameters, ts);
            TraceAndAlign("OutputParameters", ctx.OutputParameters, ts);
            TraceAndAlign("SharedVariables", ctx.SharedVariables, ts);
            TraceAndAlign("PreEntityImages", ctx.PreEntityImages, ts);
            TraceAndAlign("PostEntityImages", ctx.PostEntityImages, ts);
#endif
        }
#if DEBUG
        private static void TraceAndAlign<T>(string topic, IEnumerable<KeyValuePair<string, T>> pc, ITracingService ts)
        {
            if (pc == null || pc.Count() == 0) { return; }
            ts.Trace(topic);
            var keylen = pc.Max(p => p.Key.Length);
            foreach (var p in pc)
            {
                ts.Trace($"  {p.Key}{new string(' ', keylen - p.Key.Length)} = {ValueToString(p.Value, 2)}");
            }
        }

        private static string ValueToString(object v, int indent = 1)
        {
            var ind = new string(' ', indent * 2);
            if (v == null)
            {
                return $"{ind}<null>";
            }
            else if (v is Entity)
            {
                var e = (Entity)v;
                var keylen = e.Attributes.Count > 0 ? e.Attributes.Max(p => p.Key.Length) : 50;
                return $"{e.LogicalName} {e.Id}\n{ind}" + string.Join($"\n{ind}", e.Attributes.OrderBy(a => a.Key).Select(a => $"{a.Key}{new string(' ', keylen - a.Key.Length)} = {ValueToString(a.Value, indent + 1)}"));
            }
            else if (v is ColumnSet)
            {
                var c = (ColumnSet)v;
                var a = new List<string>(c.Columns);
                a.Sort();
                return $"\n{ind}" + string.Join($"\n{ind}", a);
            }
            else
            {
                var r = string.Empty;
                if (v is EntityReference)
                {
                    var er = (EntityReference)v;
                    r = $"{er.LogicalName} {er.Id} {er.Name}";
                }
                else if (v is OptionSetValue)
                {
                    var o = (OptionSetValue)v;
                    r = ((OptionSetValue)v).Value.ToString();
                }
                else if (v is Money)
                {
                    var m = (Money)v;
                    r = ((Money)m).Value.ToString();
                }
                else
                {
                    r = v.ToString().Replace("\n", $"\n  {ind}");
                }
                return r + $" \t({v.GetType()})";
            }
        }
#endif
        public static void End(ITracingService ts, IPluginExecutionContext ctx)
        {
#if DEBUG
            ts.Trace("\nTrace exit: {0:o}\n", DateTime.Now);
#endif
        }
    }
}