'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.activitymonitorApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
				}
				if (isMultiOptionSet) {
					return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
				}
				return entity[logicalName + f];
			};
			var getValue = function () {
				if (entity[logicalName] === undefined || entity[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName];
					}
					return null;
				}
				if (isMultiOptionSet) {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return entity[logicalName];
			};
			var setValue = function (value) {
				if (isMultiOptionSet) value = value.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _activitymonitor = {
			activitymonitorId: { a: 'activitymonitorid' },
			AdvancedSettings: { a: 'advancedsettings' },
			ConditionId: { b: 'ConditionId', a: '_conditionid_value', c: 'convertruleitems', d: 'convertruleitem' },
			ContactCreatedByRule: { a: 'contactcreatedbyrule' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CurrentState: { a: 'currentstate' },
			EntitlementCheck: { a: 'entitlementcheck' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			monitoredactivityitemid_email: { b: 'monitoredactivityitemid_email', a: '_monitoredactivityitemid_value', c: 'emails', d: 'email' },
			monitoredactivityitemid_task: { b: 'monitoredactivityitemid_task', a: '_monitoredactivityitemid_value', c: 'tasks', d: 'task' },
			Name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Reason: { a: 'reason' },
			Recommendation: { a: 'recommendation', r: true },
			RuleId: { b: 'RuleId', a: '_ruleid_value', c: 'convertrules', d: 'convertrule' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var activitymonitor = {};
		activitymonitor.ODataEntity = e;
		activitymonitor.FormattedValue = {};
		for (var field in _activitymonitor) {
			var a = _activitymonitor[field].a;
			var b = _activitymonitor[field].b;
			var c = _activitymonitor[field].c;
			var d = _activitymonitor[field].d;
			var g = _activitymonitor[field].g;
			var r = _activitymonitor[field].r;
			webApiField(activitymonitor, field, e, a, b, c, d, r, u, g);
		}
		activitymonitor.Entity = u;
		activitymonitor.EntityName = 'activitymonitor';
		activitymonitor.EntityCollectionName = 'activitymonitors';
		activitymonitor['@odata.etag'] = e['@odata.etag'];
		activitymonitor.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		activitymonitor.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return activitymonitor;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.activitymonitor = {
		CurrentState : {
			Failed: 2,
			Ready_for_Power_Automate: 1,
			Ready_for_workflow: 0,
			Skipped: 3
		},
		MonitoredActivityItemIdType : {
		},
		Reason : {
			__0: 0,
			__12: 12,
			__8: 8,
			A_contact_was_not_created_for_this_sender_This_can_be_that_the_rule_owner_doesnt_have_permission_to_create_contacts: 9,
			A_resolved_case_is_already_connected_with_this_record: 4,
			An_active_case_is_already_connected_with_this_record: 3,
			An_existing_entity_is_already_connected_with_this_record: 2,
			Contact_creation_failed_for_this_sender: 16,
			Email_is_coming_from_an_unknown_sender: 7,
			Error_matching_conditions_Contact_Microsoft_support: 17,
			Internal_failure_contact_Microsoft_support: 18,
			No_email_sender_is_found: 6,
			No_valid_entitlement_for_this_email_sender: 11,
			No_valid_entitlement_for_this_email_sender_The_rule_continued_with_any_additional_action_selected_but_skipped_the_primary_action_for_this_email_sender: 10,
			The_rule_doesnt_have_any_conditions_applicable_to_the_record: 13,
			The_rule_is_disconnected_from_the_Power_Automate_flow_To_reconnect_please_deactivate_and_reactivate_the_rule: 14,
			The_rule_is_disconnected_from_the_workflow_To_reconnect_please_deactivate_and_reactivate_the_rule: 15,
			The_rule_requires_a_connected_case_to_be_resolved_for_a_specific_amount_of_time_before_creating_a_new_one_This_connected_case_has_been_resolved_for_less_than_the_amount_of_time_selected: 5,
			Unable_to_find_the_source_data_for_this_email: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));