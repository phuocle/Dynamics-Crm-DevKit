'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.msdyn_flow_approvalApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _msdyn_flow_approval = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CurrentStage: { b: 'CurrentStage', a: '_currentstage_value', c: 'approvalstageorders', d: 'approvalstageorder' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_flow_approval_additionalfields: { a: 'msdyn_flow_approval_additionalfields' },
			msdyn_flow_approval_allowreassign: { a: 'msdyn_flow_approval_allowreassign', g: 'Boolean' },
			msdyn_flow_approval_approvalstagekey: { a: 'msdyn_flow_approval_approvalstagekey' },
			msdyn_flow_approval_basicapprovalmodel: { b: 'msdyn_flow_approval_basicapprovalmodel', a: '_msdyn_flow_approval_basicapprovalmodel_value', c: 'msdyn_flow_basicapprovalmodels', d: 'msdyn_flow_basicapprovalmodel' },
			msdyn_flow_approval_category: { a: 'msdyn_flow_approval_category' },
			msdyn_flow_approval_completedon_UtcDateAndTime: { a: 'msdyn_flow_approval_completedon', g: 'DateTime' },
			msdyn_flow_approval_currentstepnumber: { a: 'msdyn_flow_approval_currentstepnumber', g: 'Integer' },
			msdyn_flow_approval_details: { a: 'msdyn_flow_approval_details' },
			msdyn_flow_approval_dueon_UtcDateAndTime: { a: 'msdyn_flow_approval_dueon', g: 'DateTime' },
			msdyn_flow_approval_expireson_UtcDateAndTime: { a: 'msdyn_flow_approval_expireson', g: 'DateTime' },
			msdyn_flow_approval_itemlink: { a: 'msdyn_flow_approval_itemlink' },
			msdyn_flow_approval_itemlinkdescription: { a: 'msdyn_flow_approval_itemlinkdescription' },
			msdyn_flow_approval_itemlinkhash: { a: 'msdyn_flow_approval_itemlinkhash' },
			msdyn_flow_approval_modelid: { a: 'msdyn_flow_approval_modelid' },
			msdyn_flow_approval_modeltype: { a: 'msdyn_flow_approval_modeltype' },
			msdyn_flow_approval_name: { a: 'msdyn_flow_approval_name' },
			msdyn_flow_approval_partneridhash: { a: 'msdyn_flow_approval_partneridhash' },
			msdyn_flow_approval_partnermetadata: { a: 'msdyn_flow_approval_partnermetadata' },
			msdyn_flow_approval_priority: { a: 'msdyn_flow_approval_priority', g: 'Integer' },
			msdyn_flow_approval_requesttype: { a: 'msdyn_flow_approval_requesttype', g: 'Integer' },
			msdyn_flow_approval_result: { a: 'msdyn_flow_approval_result' },
			msdyn_flow_approval_sendemail: { a: 'msdyn_flow_approval_sendemail', g: 'Boolean' },
			msdyn_flow_approval_source: { a: 'msdyn_flow_approval_source' },
			msdyn_flow_approval_stage: { a: 'msdyn_flow_approval_stage', g: 'Integer' },
			msdyn_flow_approval_tags: { a: 'msdyn_flow_approval_tags' },
			msdyn_flow_approval_templateformid: { a: 'msdyn_flow_approval_templateformid' },
			msdyn_flow_approval_templateid: { a: 'msdyn_flow_approval_templateid' },
			msdyn_flow_approval_templateresponseId: { a: 'msdyn_flow_approval_templateresponseid' },
			msdyn_flow_approval_title: { a: 'msdyn_flow_approval_title' },
			msdyn_flow_approvalId: { a: 'msdyn_flow_approvalid' },
			new_msdyn_flow_approval_allowcancel: { a: 'msdyn_flow_approval_allowcancel', g: 'Boolean' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ProcessId: { a: 'processid' },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const msdyn_flow_approval = {};
		msdyn_flow_approval.ODataEntity = e;
		msdyn_flow_approval.FormattedValue = {};
		for (const field in _msdyn_flow_approval) {
			const fieldConfig = _msdyn_flow_approval[field];
			webApiField(msdyn_flow_approval, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		msdyn_flow_approval.Entity = u;
		msdyn_flow_approval.EntityName = 'msdyn_flow_approval';
		msdyn_flow_approval.EntityCollectionName = 'msdyn_flow_approvals';
		msdyn_flow_approval['@odata.etag'] = e?.['@odata.etag'];
		msdyn_flow_approval.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		msdyn_flow_approval.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return msdyn_flow_approval;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_flow_approval = {
		msdyn_flow_approval_priority: { Important: 192350001, Low: 192350003, Medium: 192350002, Urgent: 192350000 },
		msdyn_flow_approval_requesttype: { Basic: 192350001, eSign: 192350002, Other: 192350000, Templates: 192350003 },
		msdyn_flow_approval_stage: { Basic: 192350001, Complete: 192351000, Not_Specified: 192350000 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Abandoned: 192350007, Canceled: 192350006, Completed: 192350004, Created: 192350000, Expired: 192350005, Pending: 192350001, Suspended: 192350002 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));