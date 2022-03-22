'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_projectteamApi = function (e) {
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
		var _msdyn_projectteam = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_allocationmethod: { a: 'msdyn_allocationmethod' },
			msdyn_Applicantcount: { a: 'msdyn_applicantcount', r: true },
			msdyn_Applicantcount_Date_UtcDateAndTime: { a: 'msdyn_applicantcount_date', r: true },
			msdyn_Applicantcount_State: { a: 'msdyn_applicantcount_state', r: true },
			msdyn_Applicantsavailable: { a: 'msdyn_applicantsavailable', r: true },
			msdyn_AssignedHours: { a: 'msdyn_assignedhours' },
			msdyn_BillingType: { a: 'msdyn_billingtype' },
			msdyn_bookableresourceid: { b: 'msdyn_bookableresourceid', a: '_msdyn_bookableresourceid_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_calendarId: { a: 'msdyn_calendarid' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_From_UtcDateOnly: { a: 'msdyn_from' },
			msdyn_hardbookedhours: { a: 'msdyn_hardbookedhours' },
			msdyn_hours: { a: 'msdyn_hours' },
			msdyn_HoursRequested: { a: 'msdyn_hoursrequested' },
			msdyn_MembershipStatus: { a: 'msdyn_membershipstatus' },
			msdyn_msprojectclientid: { a: 'msdyn_msprojectclientid' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Number: { a: 'msdyn_number' },
			msdyn_organizationalunit: { b: 'msdyn_organizationalunit', a: '_msdyn_organizationalunit_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_percentage: { a: 'msdyn_percentage' },
			msdyn_project: { b: 'msdyn_project', a: '_msdyn_project_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_ProjectApprover: { a: 'msdyn_projectapprover' },
			msdyn_projectteamId: { a: 'msdyn_projectteamid' },
			msdyn_requiredhours: { a: 'msdyn_requiredhours' },
			msdyn_resourcecategory: { b: 'msdyn_resourcecategory', a: '_msdyn_resourcecategory_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_resourcerequirementid: { b: 'msdyn_resourcerequirementid', a: '_msdyn_resourcerequirementid_value', c: 'msdyn_resourcerequirements', d: 'msdyn_resourcerequirement' },
			msdyn_RoleDescription: { a: 'msdyn_roledescription' },
			msdyn_softbookedhours: { a: 'msdyn_softbookedhours' },
			msdyn_To_UtcDateOnly: { a: 'msdyn_to' },
			msdyn_worktemplate: { b: 'msdyn_worktemplate', a: '_msdyn_worktemplate_value', c: 'msdyn_workhourtemplates', d: 'msdyn_workhourtemplate' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_projectteam = {};
		msdyn_projectteam.ODataEntity = e;
		msdyn_projectteam.FormattedValue = {};
		for (var field in _msdyn_projectteam) {
			var a = _msdyn_projectteam[field].a;
			var b = _msdyn_projectteam[field].b;
			var c = _msdyn_projectteam[field].c;
			var d = _msdyn_projectteam[field].d;
			var g = _msdyn_projectteam[field].g;
			var r = _msdyn_projectteam[field].r;
			webApiField(msdyn_projectteam, field, e, a, b, c, d, r, u, g);
		}
		msdyn_projectteam.Entity = u;
		msdyn_projectteam.EntityName = 'msdyn_projectteam';
		msdyn_projectteam.EntityCollectionName = 'msdyn_projectteams';
		msdyn_projectteam['@odata.etag'] = e['@odata.etag'];
		msdyn_projectteam.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_projectteam.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_projectteam;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_projectteam = {
		msdyn_allocationmethod : {
			By_Hours_Distribute_evenly: 192350003,
			By_Hours_Front_load: 192350005,
			Full_Capacity: 192350001,
			None: 192350000,
			Percentage_Capacity: 192350004
		},
		msdyn_BillingType : {
			Chargeable: 192350001,
			Complimentary: 192350002,
			Non_Chargeable: 192350000,
			Not_Available: 192350003
		},
		msdyn_MembershipStatus : {
			Assigned: 2,
			Declined: 3,
			Requested: 1
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