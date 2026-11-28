using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public partial class ManageCommandTool
    {
        private const string ClassicRulesRelationship = "appaction_appactionrule_classicrules";

        private CallToolResult HandleDelete(string commandId, string entityName, string location, string appId, string appName, string label, string uniqueName, string scope)
        {
            Entity command;
            if (!string.IsNullOrWhiteSpace(commandId))
            {
                if (!Guid.TryParse(commandId.Trim(), out var id) || id == Guid.Empty)
                    return Error($"'{commandId.Trim()}' is not a valid command_id GUID.");

                if (_options.DryRun)
                    return PreviewCommandDeletion(id.ToString(), id.ToString());

                command = RetrieveAppActionOrNull(id, "appactionid", "ismanaged", "contextvalue", "contextentity");
            }
            else
            {
                var (match, result) = FindCommandToDelete(entityName, location, appId, appName, label, uniqueName, scope);
                if (result != null)
                    return result;
                command = match;
            }

            if (command == null)
                return Error("No matching appaction found for action='delete'.",
                    "Check the scope or use manage_commanding(resource='command', action='list', include_children=true) to find command IDs.");

            var commands = new List<Entity>();
            var commandIds = new HashSet<Guid>();
            var treeError = CollectCommandDeletionTree(command, commands, commandIds);
            if (treeError != null)
                return treeError;

            var rules = new Dictionary<Guid, Entity>();
            foreach (var item in commands)
            {
                var ruleQuery = new QueryExpression("appactionrule") { ColumnSet = new ColumnSet("appactionruleid", "ismanaged") };
                ruleQuery.AddLink(ClassicRulesRelationship, "appactionruleid", "appactionruleid")
                    .LinkCriteria.AddCondition("appactionid", ConditionOperator.Equal, item.Id);
                foreach (var rule in ReadCommandDependencies(ruleQuery, "appactionruleid"))
                    rules.TryAdd(rule.Id, rule);
            }

            var transaction = new ExecuteTransactionRequest { Requests = new OrganizationRequestCollection() };
            foreach (var rule in rules.Values)
            {
                // Classic rules are many-to-many. Deleting a shared row would also remove it from unrelated commands.
                var owners = new QueryExpression("appaction") { ColumnSet = new ColumnSet("appactionid") };
                owners.AddLink(ClassicRulesRelationship, "appactionid", "appactionid")
                    .LinkCriteria.AddCondition("appactionruleid", ConditionOperator.Equal, rule.Id);
                if (ReadCommandDependencies(owners, "appactionid").Any(owner => !commandIds.Contains(owner.Id)))
                    continue;

                if (rule.GetAttributeValue<bool>("ismanaged"))
                    return Error($"Cannot delete appaction '{command.Id}' because dependent appactionrule '{rule.Id}' is managed (ismanaged=true).");

                transaction.Requests.Add(new DeleteRequest { Target = rule.ToEntityReference() });
            }

            var ruleCount = transaction.Requests.Count;
            foreach (var item in commands)
                transaction.Requests.Add(new DeleteRequest { Target = item.ToEntityReference() });

            var publishEntity = GetCommandDeletePublishEntity(command);
            if (transaction.Requests.Count == 1)
                DataverseMutationExecutor.Delete(_context, _orgService, command.LogicalName, command.Id);
            else
                DataverseMutationExecutor.Execute(_context, _orgService, transaction);

            var message = $"Deleted appaction '{command.Id}' with {commands.Count - 1} child appaction(s) and {ruleCount} appactionrule(s).";
            if (publishEntity != null)
                message += PublishHelper.PublishEntity(_context, _orgService, publishEntity)
                    ? $" Table '{publishEntity}' published."
                    : $" Publishing table '{publishEntity}' failed. Use manage_admin(resource='publish') to retry the publish.";

            return Success(message, new ManageCommandResult
            {
                Action = "delete",
                Status = "success",
                CommandId = command.Id.ToString(),
                Message = message
            });
        }

        private (Entity Match, CallToolResult Result) FindCommandToDelete(string entityName, string location, string appId, string appName, string label, string uniqueName, string scope)
        {
            var hasLabel = !string.IsNullOrWhiteSpace(label);
            var hasUniqueName = !string.IsNullOrWhiteSpace(uniqueName);
            if (hasLabel == hasUniqueName)
                return (null, Error("For action='delete', pass command_id or exactly one of label and uniquename."));

            if (!LocationFilterMap.TryGetValue(location?.Trim() ?? "", out var locationValue))
                return (null, Error("A valid location is required for action='delete' without command_id.",
                    "Valid values: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'."));

            var hasApp = !string.IsNullOrWhiteSpace(appId) || !string.IsNullOrWhiteSpace(appName);
            var hasEntity = !string.IsNullOrWhiteSpace(entityName);
            var targetScope = string.IsNullOrWhiteSpace(scope) ? (hasApp ? "app" : hasEntity ? "table" : "global") : scope.Trim().ToLowerInvariant();
            if (!ValidScopes.Contains(targetScope))
                return (null, Error($"Invalid scope '{targetScope}'.", "Valid values: 'app', 'table', 'global'."));
            if (targetScope == "app" && !hasApp)
                return (null, Error("app_id or app_name is required for action='delete' with scope='app'."));
            if (targetScope != "app" && hasApp)
                return (null, Error($"Omit app_id and app_name for action='delete' with scope='{targetScope}'."));
            if (targetScope == "table" && !hasEntity)
                return (null, Error("entity_name is required for action='delete' with scope='table'."));
            if (targetScope == "global" && hasEntity)
                return (null, Error("Omit entity_name for action='delete' with scope='global'. Use scope='table' for a command on a specific table across apps."));
            if (!string.IsNullOrWhiteSpace(appId) && (!Guid.TryParse(appId.Trim(), out var parsedAppId) || parsedAppId == Guid.Empty))
                return (null, Error($"'{appId.Trim()}' is not a valid app_id GUID."));

            var key = hasLabel ? "buttonlabeltext" : "uniquename";
            var value = (hasLabel ? label : uniqueName).Trim();
            if (_options.DryRun)
                return (null, PreviewCommandDeletion($"{targetScope} command matching {key}='{value}' at {location.Trim()}", null));

            var query = new QueryExpression("appaction")
            {
                ColumnSet = new ColumnSet("appactionid", "ismanaged", "contextvalue", "contextentity"),
                TopCount = 2
            };
            query.Criteria.AddCondition(key, ConditionOperator.Equal, value);
            query.Criteria.AddCondition("location", ConditionOperator.Equal, locationValue);
            if (hasApp)
            {
                var resolvedAppId = ResolveAppId(appId, appName, out var appError);
                if (!resolvedAppId.HasValue)
                    return (null, Error(appError.Split("\r\n")[0], "Use manage_ui(resource='app', action='list') to find the app."));
                query.Criteria.AddCondition("appmoduleid", ConditionOperator.Equal, resolvedAppId.Value);
            }
            else
                query.Criteria.AddCondition("appmoduleid", ConditionOperator.Null);

            if (hasEntity)
            {
                var resolved = DisplayNameFirstResolver.ResolveEntity(_orgService, entityName.Trim(), "manage_commanding(resource='command')");
                if (!resolved.IsSuccess)
                    return (null, Error(resolved.Error.Split("\r\n")[0], "Use inspect_metadata(resource='tables') to list available tables."));

                var table = query.Criteria.AddFilter(LogicalOperator.Or);
                table.AddCondition("contextvalue", ConditionOperator.Equal, resolved.Value.LogicalName);
                if (resolved.Value.MetadataId is Guid tableId)
                    table.AddCondition("contextentity", ConditionOperator.Equal, tableId);
            }
            else
            {
                query.Criteria.AddCondition("contextentity", ConditionOperator.Null);
                query.Criteria.AddCondition("contextvalue", ConditionOperator.Null);
            }

            var matches = _orgService.RetrieveMultiple(query).Entities;
            if (matches.Count > 1)
                return (null, Error($"Multiple appactions match {key}='{value}' in scope '{targetScope}'.",
                    "Pass command_id to disambiguate. Matching IDs include: " + string.Join(", ", matches.Select(match => match.Id))));

            return (matches.FirstOrDefault(), null);
        }

        private CallToolResult CollectCommandDeletionTree(Entity command, List<Entity> commands, HashSet<Guid> commandIds)
        {
            if (!commandIds.Add(command.Id))
                return Error($"Cannot delete appaction '{command.Id}' because its child hierarchy has a cycle.");
            if (command.GetAttributeValue<bool>("ismanaged"))
                return Error($"Cannot delete appaction '{command.Id}' because it is managed (ismanaged=true).");

            var query = new QueryExpression("appaction") { ColumnSet = new ColumnSet("appactionid", "ismanaged") };
            query.Criteria.AddCondition("parentappactionid", ConditionOperator.Equal, command.Id);
            foreach (var child in ReadCommandDependencies(query, "appactionid"))
            {
                var error = CollectCommandDeletionTree(child, commands, commandIds);
                if (error != null)
                    return error;
            }

            commands.Add(command);
            return null;
        }

        private IEnumerable<Entity> ReadCommandDependencies(QueryExpression query, string idColumn)
        {
            query.AddOrder(idColumn, OrderType.Ascending);
            query.PageInfo = new PagingInfo { Count = 5000, PageNumber = 1 };
            while (true)
            {
                var page = _orgService.RetrieveMultiple(query);
                foreach (var row in page.Entities)
                    yield return row;
                if (!page.MoreRecords)
                    yield break;
                query.PageInfo.PageNumber++;
                query.PageInfo.PagingCookie = page.PagingCookie;
            }
        }

        private string GetCommandDeletePublishEntity(Entity command)
        {
            var contextEntity = command.GetAttributeValue<EntityReference>("contextentity");
            if (contextEntity == null)
                return null;

            var logicalName = NullIfEmpty(command.GetAttributeValue<string>("contextvalue"));
            if (logicalName != null)
                return logicalName;

            var response = (RetrieveEntityResponse)DataverseMutationExecutor.ExecuteReadOnly(_orgService, new RetrieveEntityRequest
            {
                MetadataId = contextEntity.Id,
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            });
            return NullIfEmpty(response.EntityMetadata?.LogicalName)
                ?? throw new InvalidOperationException($"Could not resolve the table to publish for appaction '{command.Id}'.");
        }

        private CallToolResult PreviewCommandDeletion(string target, string commandId) =>
            DryRun($"Would delete {target} and its child appactions and exclusive rules, then publish its context table if present.",
                new ManageCommandResult
                {
                    Action = "delete",
                    Status = "not_executed",
                    CommandId = commandId,
                    Message = "The appaction command was not deleted."
                });
    }
}
