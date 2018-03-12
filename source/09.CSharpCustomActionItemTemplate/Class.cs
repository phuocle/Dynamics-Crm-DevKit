using Microsoft.Xrm.Sdk;

namespace $rootnamespace$
{
    [CrmPluginRegistration("$message$", "$logicalname$", StageEnum.$stage_string$, ExecutionModeEnum.$execution$, "", "$rootnamespace$.$entityname$.$class$$execution$", 1, IsolationModeEnum.Sandbox)]
    public class $class$$execution$ : PluginBase
    {
$privateclass$
        public override void Execute()
        {
            if (Plugin.Context.Stage != (int)StageEnum.$stage_string$) throw new InvalidPluginExecutionException("Stage does not equals $stage_string$");
            if (Plugin.Context.PrimaryEntityName != "$logicalname$") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals $logicalname$");
            if (Plugin.Context.MessageName.ToLower() != "$message$".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals $message$");
            if (Plugin.Context.Mode != (int)ExecutionModeEnum.$execution$) throw new InvalidPluginExecutionException("Execution does not equal $execution$");
            var outputs = ExecuteCustomAction();
            foreach (var output in outputs)
                if (Plugin.Context.OutputParameters.Contains(output.Key))
                    Plugin.Context.OutputParameters[output.Key] = output.Value;
        }

        private ParameterCollection ExecuteCustomAction()
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE
            return outputs;
        }
    }
}