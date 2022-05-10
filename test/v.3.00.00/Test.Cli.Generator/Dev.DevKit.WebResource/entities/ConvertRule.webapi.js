'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ConvertRuleApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _convertrule = {
			AllowUnknownSender: { a: 'allowunknownsender' },
			ChannelPropertyGroupId: { b: 'channelpropertygroupid', a: '_channelpropertygroupid_value', c: 'channelpropertygroups', d: 'channelpropertygroup' },
			CheckActiveEntitlement: { a: 'checkactiveentitlement' },
			CheckBlockedSocialProfile: { a: 'checkblockedsocialprofile' },
			CheckDirectMessages: { a: 'checkdirectmessages' },
			CheckIfResolved: { a: 'checkifresolved' },
			ComponentState: { a: 'componentstate', r: true },
			ConvertRuleId: { a: 'convertruleid' },
			ConvertRuleIdUnique: { a: 'convertruleidunique', r: true },
			ConvertRuleType: { a: 'convertruletype' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ExchangeRate: { a: 'exchangerate', r: true },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team' },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser' },
			QueueId: { b: 'queueid', a: '_queueid_value', c: 'queues', d: 'queue' },
			RecordVersion: { a: 'recordversion', r: true },
			ResolvedSince: { a: 'resolvedsince' },
			ResponseTemplateId: { b: 'responsetemplateid', a: '_responsetemplateid_value', c: 'templates', d: 'template' },
			SendAutomaticResponse: { a: 'sendautomaticresponse' },
			SenderResolutionOption: { a: 'senderresolutionoption' },
			SolutionId: { a: 'solutionid', r: true },
			SourceTypeCode: { a: 'sourcetypecode' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			VersionNumber: { a: 'versionnumber', r: true },
			WorkflowId: { b: 'workflowid', a: '_workflowid_value', c: 'workflows', d: 'workflow' }
		};
		if (e === undefined) e = {};
		var u = {};
		var convertrule = {};
		convertrule.ODataEntity = e;
		convertrule.FormattedValue = {};
		for (var field in _convertrule) {
			var a = _convertrule[field].a;
			var b = _convertrule[field].b;
			var c = _convertrule[field].c;
			var d = _convertrule[field].d;
			var g = _convertrule[field].g;
			var r = _convertrule[field].r;
			webApiField(convertrule, field, e, a, b, c, d, r, u, g);
		}
		convertrule.Entity = u;
		convertrule.EntityName = 'convertrule';
		convertrule.EntityCollectionName = 'convertrules';
		convertrule['@odata.etag'] = e['@odata.etag'];
		convertrule.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		convertrule.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return convertrule;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ConvertRule = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		OwnerIdType : {
		},
		SenderResolutionOption : {
			Creating_a_new_contact_automatically: 0,
			Mapping_in_Power_Automate_manually: 1
		},
		SourceChannelTypeCode : {
			Activity_record_for_the_Teams_chat: 10088,
			Appointment: 4201,
			Booking_Alert: 10473,
			Conversation: 10743,
			Customer_Voice_alert: 10330,
			Customer_Voice_survey_invite: 10340,
			Customer_Voice_survey_response: 10342,
			Email: 4202,
			Outbound_message: 10857,
			Phone_Call: 4210,
			Project_Service_Approval: 10489,
			Service_Activity: 4214,
			Session: 10760,
			Social_Activity: 4216,
			Task: 4212
		},
		SourceTypeCode : {
			Email: 2,
			Social_Monitoring: 1
		},
		StateCode : {
			Active: 1,
			Draft: 0
		},
		StatusCode : {
			Active: 2,
			Draft: 1
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