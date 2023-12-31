'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_quotebookingsetupApi = function (e) {
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
		var _msdyn_quotebookingsetup = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_autogeneratebooking: { a: 'msdyn_autogeneratebooking' },
			msdyn_autogenerateworkorder: { a: 'msdyn_autogenerateworkorder' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_EstimatedCost: { a: 'msdyn_estimatedcost' },
			msdyn_estimatedcost_Base: { a: 'msdyn_estimatedcost_base', r: true },
			msdyn_estimatedduration: { a: 'msdyn_estimatedduration' },
			msdyn_EstimatedMargin: { a: 'msdyn_estimatedmargin' },
			msdyn_EstimatedMarginPerWO: { a: 'msdyn_estimatedmarginperwo' },
			msdyn_EstimatedProductCost: { a: 'msdyn_estimatedproductcost' },
			msdyn_estimatedproductcost_Base: { a: 'msdyn_estimatedproductcost_base', r: true },
			msdyn_EstimatedProductRevenue: { a: 'msdyn_estimatedproductrevenue' },
			msdyn_estimatedproductrevenue_Base: { a: 'msdyn_estimatedproductrevenue_base', r: true },
			msdyn_EstimatedRevenue: { a: 'msdyn_estimatedrevenue' },
			msdyn_estimatedrevenue_Base: { a: 'msdyn_estimatedrevenue_base', r: true },
			msdyn_EstimatedRevenuePerWO: { a: 'msdyn_estimatedrevenueperwo' },
			msdyn_estimatedrevenueperwo_Base: { a: 'msdyn_estimatedrevenueperwo_base', r: true },
			msdyn_EstimatedServiceCost: { a: 'msdyn_estimatedservicecost' },
			msdyn_estimatedservicecost_Base: { a: 'msdyn_estimatedservicecost_base', r: true },
			msdyn_EstimatedServiceRevenue: { a: 'msdyn_estimatedservicerevenue' },
			msdyn_estimatedservicerevenue_Base: { a: 'msdyn_estimatedservicerevenue_base', r: true },
			msdyn_generateworkorderdaysinadvance: { a: 'msdyn_generateworkorderdaysinadvance' },
			msdyn_Internalflags: { a: 'msdyn_Internalflags' },
			msdyn_Latitude: { a: 'msdyn_latitude' },
			msdyn_Longitude: { a: 'msdyn_longitude' },
			msdyn_Margin: { a: 'msdyn_margin' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_NumberOfWO: { a: 'msdyn_numberofwo' },
			msdyn_postbookingflexibility: { a: 'msdyn_postbookingflexibility' },
			msdyn_postponegenerationuntil_TimezoneDateAndTime: { a: 'msdyn_postponegenerationuntil' },
			msdyn_prebookingflexibility: { a: 'msdyn_prebookingflexibility' },
			msdyn_preferredresource: { b: 'msdyn_preferredresource', a: '_msdyn_preferredresource_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_preferredstarttime_UtcDateOnly: { a: 'msdyn_preferredstarttime' },
			msdyn_priority: { b: 'msdyn_priority', a: '_msdyn_priority_value', c: 'msdyn_priorities', d: 'msdyn_priority' },
			msdyn_quote: { b: 'msdyn_quote', a: '_msdyn_quote_value', c: 'quotes', d: 'quote' },
			msdyn_quotebookingsetupId: { a: 'msdyn_quotebookingsetupid' },
			msdyn_quotedetail: { b: 'msdyn_quotedetail', a: '_msdyn_quotedetail_msdyn_quotebookingset_value', c: 'quotedetails', d: 'quotedetail' },
			msdyn_QuoteDetailId: { a: 'msdyn_quotedetailid' },
			msdyn_recurrencesettings: { a: 'msdyn_recurrencesettings' },
			msdyn_revision: { a: 'msdyn_revision' },
			msdyn_timewindowend_UtcDateOnly: { a: 'msdyn_timewindowend' },
			msdyn_timewindowstart_UtcDateOnly: { a: 'msdyn_timewindowstart' },
			msdyn_WorkLocation: { a: 'msdyn_worklocation' },
			msdyn_workordersummary: { a: 'msdyn_workordersummary' },
			msdyn_workordertype: { b: 'msdyn_workordertype', a: '_msdyn_workordertype_value', c: 'msdyn_workordertypes', d: 'msdyn_workordertype' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			processid: { a: 'processid' },
			stageid: { a: 'stageid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			traversedpath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_quotebookingsetup = {};
		msdyn_quotebookingsetup.ODataEntity = e;
		msdyn_quotebookingsetup.FormattedValue = {};
		for (var field in _msdyn_quotebookingsetup) {
			var a = _msdyn_quotebookingsetup[field].a;
			var b = _msdyn_quotebookingsetup[field].b;
			var c = _msdyn_quotebookingsetup[field].c;
			var d = _msdyn_quotebookingsetup[field].d;
			var g = _msdyn_quotebookingsetup[field].g;
			var r = _msdyn_quotebookingsetup[field].r;
			webApiField(msdyn_quotebookingsetup, field, e, a, b, c, d, r, u, g);
		}
		msdyn_quotebookingsetup.Entity = u;
		msdyn_quotebookingsetup.EntityName = 'msdyn_quotebookingsetup';
		msdyn_quotebookingsetup.EntityCollectionName = 'msdyn_quotebookingsetups';
		msdyn_quotebookingsetup['@odata.etag'] = e['@odata.etag'];
		msdyn_quotebookingsetup.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_quotebookingsetup.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_quotebookingsetup;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_quotebookingsetup = {
		msdyn_WorkLocation : {
			Facility: 690970001,
			Location_Agnostic: 690970002,
			Onsite: 690970000
		},
		OwnerIdType : {
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