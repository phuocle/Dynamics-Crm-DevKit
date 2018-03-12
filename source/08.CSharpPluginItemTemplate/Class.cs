using Microsoft.Xrm.Sdk;

namespace $rootnamespace$
{
    [CrmPluginRegistration("$message$", "$logicalname$", StageEnum.$stage_string$, ExecutionModeEnum.$execution$, "",
        "$rootnamespace$.$entityname$.$class$$execution$", 1, IsolationModeEnum.Sandbox,
        Image1Name = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "",
        Image2Name = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "")]
    public class $class$$execution$ : PluginBase
    {
$privateclass$
        public override void Execute()
        {
            if (Plugin.Context.Stage != (int)StageEnum.$stage_string$) throw new InvalidPluginExecutionException("Stage does not equals $stage_string$");
            if (Plugin.Context.PrimaryEntityName != "$logicalname$") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals $logicalname$");
            if (Plugin.Context.MessageName.ToLower() != "$message$".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals $message$");
            if (Plugin.Context.Mode != (int)ExecutionModeEnum.$execution$) throw new InvalidPluginExecutionException("Execution does not equal $execution$");

            //var target = (???)Plugin.Context.InputParameters["Target"];
            //var preEntity = (Entity)Plugin.Context.PreEntityImages["PreImage"];
            //var postEntity = (Entity)Plugin.Context.PreEntityImages["PostImage"];

            //YOUR PLUGIN-CODE GO HERE
        }
    }
}