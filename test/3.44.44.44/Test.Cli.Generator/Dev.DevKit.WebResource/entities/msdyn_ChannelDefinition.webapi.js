'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ChannelDefinitionApi = function (e) {
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
		var _msdyn_channeldefinition = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ChannelDefinitionAccountExternalEntity: { a: 'msdyn_channeldefinitionaccountexternalentity' },
			msdyn_ChannelDefinitionAccountExternalFormId: { a: 'msdyn_channeldefinitionaccountexternalformid' },
			msdyn_ChannelDefinitionExternalEntity: { a: 'msdyn_channeldefinitionexternalentity' },
			msdyn_ChannelDefinitionExternalFormId: { a: 'msdyn_channeldefinitionexternalformid' },
			msdyn_ChannelDefinitionId: { a: 'msdyn_channeldefinitionid' },
			msdyn_ChannelType: { a: 'msdyn_channeltype' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_DisplayName: { a: 'msdyn_displayname' },
			msdyn_HasDeliveryReceipt: { a: 'msdyn_hasdeliveryreceipt' },
			msdyn_HasInbound: { a: 'msdyn_hasinbound' },
			msdyn_InstanceRegistrationEndpointUrlTemplate: { a: 'msdyn_instanceregistrationendpointurltemplate' },
			msdyn_MessageFormId: { a: 'msdyn_messageformid' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_OutboundEndpointUrlTemplate: { a: 'msdyn_outboundendpointurltemplate' },
			msdyn_SpecialConsentLabel: { a: 'msdyn_specialconsentlabel' },
			msdyn_SpecialConsentRequired: { a: 'msdyn_specialconsentrequired' },
			msdyn_SupportsAccount: { a: 'msdyn_supportsaccount' },
			msdyn_SupportsAttachment: { a: 'msdyn_supportsattachment' },
			msdyn_SupportsBinary: { a: 'msdyn_supportsbinary' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_channeldefinition = {};
		msdyn_channeldefinition.ODataEntity = e;
		msdyn_channeldefinition.FormattedValue = {};
		for (var field in _msdyn_channeldefinition) {
			var a = _msdyn_channeldefinition[field].a;
			var b = _msdyn_channeldefinition[field].b;
			var c = _msdyn_channeldefinition[field].c;
			var d = _msdyn_channeldefinition[field].d;
			var g = _msdyn_channeldefinition[field].g;
			var r = _msdyn_channeldefinition[field].r;
			webApiField(msdyn_channeldefinition, field, e, a, b, c, d, r, u, g);
		}
		msdyn_channeldefinition.Entity = u;
		msdyn_channeldefinition.EntityName = 'msdyn_channeldefinition';
		msdyn_channeldefinition.EntityCollectionName = 'msdyn_channeldefinitions';
		msdyn_channeldefinition['@odata.etag'] = e['@odata.etag'];
		msdyn_channeldefinition.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_channeldefinition.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_channeldefinition;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ChannelDefinition = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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