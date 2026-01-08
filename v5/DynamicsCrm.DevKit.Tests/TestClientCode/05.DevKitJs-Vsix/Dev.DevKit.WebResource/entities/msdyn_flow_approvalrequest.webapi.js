'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.msdyn_flow_approvalrequestApi = function (e) {
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
		const _msdyn_flow_approvalrequest = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_flow_approvalrequest_allowreassignment: { a: 'msdyn_flow_approvalrequest_allowreassignment', g: 'Boolean' },
			msdyn_flow_approvalrequest_approval: { b: 'msdyn_flow_approvalrequest_approval', a: '_msdyn_flow_approvalrequest_approval_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval' },
			msdyn_flow_approvalrequest_approvalstagekey: { a: 'msdyn_flow_approvalrequest_approvalstagekey' },
			msdyn_flow_approvalrequest_dueon_UtcDateAndTime: { a: 'msdyn_flow_approvalrequest_dueon', g: 'DateTime' },
			msdyn_flow_approvalrequest_expireson_UtcDateAndTime: { a: 'msdyn_flow_approvalrequest_expireson', g: 'DateTime' },
			msdyn_flow_approvalrequest_lastnotifiedon_UtcDateAndTime: { a: 'msdyn_flow_approvalrequest_lastnotifiedon', g: 'DateTime' },
			msdyn_flow_approvalrequest_name: { a: 'msdyn_flow_approvalrequest_name' },
			msdyn_flow_approvalrequest_notificationfrequency: { a: 'msdyn_flow_approvalrequest_notificationfrequency', g: 'Integer' },
			msdyn_flow_approvalrequest_options: { a: 'msdyn_flow_approvalrequest_options' },
			msdyn_flow_approvalrequest_partnermetadata: { a: 'msdyn_flow_approvalrequest_partnermetadata' },
			msdyn_flow_approvalrequest_reassignedfrom: { b: 'msdyn_flow_approvalrequest_reassignedfrom', a: '_msdyn_flow_approvalrequest_reassignedfrom_value', c: 'msdyn_flow_approvalrequests', d: 'msdyn_flow_approvalrequest' },
			msdyn_flow_approvalrequest_responseoptions: { a: 'msdyn_flow_approvalrequest_responseoptions' },
			msdyn_flow_approvalrequest_responseoptionstype: { a: 'msdyn_flow_approvalrequest_responseoptionstype', g: 'Integer' },
			msdyn_flow_approvalrequest_stage: { a: 'msdyn_flow_approvalrequest_stage', g: 'Integer' },
			msdyn_flow_approvalrequest_stepnumber: { a: 'msdyn_flow_approvalrequest_stepnumber', g: 'Integer' },
			msdyn_flow_approvalrequestId: { a: 'msdyn_flow_approvalrequestid' },
			msdyn_flow_approvalrequestidx_approvalid: { a: 'msdyn_flow_approvalrequestidx_approvalid' },
			msdyn_flow_approvalrequestidx_owninguserid: { a: 'msdyn_flow_approvalrequestidx_owninguserid' },
			msdyn_flow_approvalrequestidx_reassignedfromid: { a: 'msdyn_flow_approvalrequestidx_reassignedfromid' },
			msdyn_flow_approvalrequestidx_stage: { a: 'msdyn_flow_approvalrequestidx_stage' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			StageNumber: { a: 'stagenumber', g: 'Integer' },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const msdyn_flow_approvalrequest = {};
		msdyn_flow_approvalrequest.ODataEntity = e;
		msdyn_flow_approvalrequest.FormattedValue = {};
		for (const field in _msdyn_flow_approvalrequest) {
			const fieldConfig = _msdyn_flow_approvalrequest[field];
			webApiField(msdyn_flow_approvalrequest, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		msdyn_flow_approvalrequest.Entity = u;
		msdyn_flow_approvalrequest.EntityName = 'msdyn_flow_approvalrequest';
		msdyn_flow_approvalrequest.EntityCollectionName = 'msdyn_flow_approvalrequests';
		msdyn_flow_approvalrequest['@odata.etag'] = e?.['@odata.etag'];
		msdyn_flow_approvalrequest.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		msdyn_flow_approvalrequest.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return msdyn_flow_approvalrequest;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_flow_approvalrequest = {
		msdyn_flow_approvalrequest_responseoptionstype: { BasicApproveReject: 192350001, CustomOptions: 192350002, NotSpecified: 192350000 },
		msdyn_flow_approvalrequest_stage: { Basic: 192350001, Complete: 192351000, Not_Specified: 192350000 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2, Reassigned: 192350000 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));