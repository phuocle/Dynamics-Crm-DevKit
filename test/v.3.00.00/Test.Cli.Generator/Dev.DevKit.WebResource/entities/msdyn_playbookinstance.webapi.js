'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_playbookinstanceApi = function (e) {
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
		var _msdyn_playbookinstance = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_activitiesassociated: { a: 'msdyn_activitiesassociated' },
			msdyn_activitiesclosed: { a: 'msdyn_activitiesclosed' },
			msdyn_categoryid: { b: 'msdyn_categoryid', a: '_msdyn_categoryid_value', c: 'msdyn_playbookcategories', d: 'msdyn_playbookcategory' },
			msdyn_estimatedclose_UtcDateOnly: { a: 'msdyn_estimatedclose' },
			msdyn_evaluateactivityclosure: { a: 'msdyn_evaluateactivityclosure' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_playbookinstanceId: { a: 'msdyn_playbookinstanceid' },
			msdyn_playbooktemplateid: { b: 'msdyn_playbooktemplateid', a: '_msdyn_playbooktemplateid_value', c: 'msdyn_playbooktemplates', d: 'msdyn_playbooktemplate' },
			msdyn_trackprogress: { a: 'msdyn_trackprogress' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			regarding_account: { b: 'regarding_account', a: '_regarding_value', c: 'accounts', d: 'account' },
			regarding_contact: { b: 'regarding_contact', a: '_regarding_value', c: 'contacts', d: 'contact' },
			regarding_invoice: { b: 'regarding_invoice', a: '_regarding_value', c: 'invoices', d: 'invoice' },
			regarding_lead: { b: 'regarding_lead', a: '_regarding_value', c: 'leads', d: 'lead' },
			regarding_opportunity: { b: 'regarding_opportunity', a: '_regarding_value', c: 'opportunities', d: 'opportunity' },
			regarding_quote: { b: 'regarding_quote', a: '_regarding_value', c: 'quotes', d: 'quote' },
			regarding_salesorder: { b: 'regarding_salesorder', a: '_regarding_value', c: 'salesorders', d: 'salesorder' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_playbookinstance = {};
		msdyn_playbookinstance.ODataEntity = e;
		msdyn_playbookinstance.FormattedValue = {};
		for (var field in _msdyn_playbookinstance) {
			var a = _msdyn_playbookinstance[field].a;
			var b = _msdyn_playbookinstance[field].b;
			var c = _msdyn_playbookinstance[field].c;
			var d = _msdyn_playbookinstance[field].d;
			var g = _msdyn_playbookinstance[field].g;
			var r = _msdyn_playbookinstance[field].r;
			webApiField(msdyn_playbookinstance, field, e, a, b, c, d, r, u, g);
		}
		msdyn_playbookinstance.Entity = u;
		msdyn_playbookinstance.EntityName = 'msdyn_playbookinstance';
		msdyn_playbookinstance.EntityCollectionName = 'msdyn_playbookinstances';
		msdyn_playbookinstance['@odata.etag'] = e['@odata.etag'];
		msdyn_playbookinstance.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_playbookinstance.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_playbookinstance;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_playbookinstance = {
		OwnerIdType : {
		},
		RegardingObjectTypeCode : {
		},
		statecode : {
			Active: 0,
			Completed: 1
		},
		statuscode : {
			In_Progress: 1,
			Not_Required: 5,
			Not_Successful: 3,
			Not_Tracked: 6,
			Partially_Successful: 4,
			Successful: 2
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