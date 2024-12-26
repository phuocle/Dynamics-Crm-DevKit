'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_eventpurchaseApi = function (e) {
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
		var _msevtmgt_eventpurchase = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msevtmgt_Area: { a: 'msevtmgt_area' },
			msevtmgt_CompanySize: { a: 'msevtmgt_companysize' },
			msevtmgt_EventId: { b: 'msevtmgt_EventId', a: '_msevtmgt_eventid_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			msevtmgt_eventpurchaseId: { a: 'msevtmgt_eventpurchaseid' },
			msevtmgt_Industry: { a: 'msevtmgt_industry' },
			msevtmgt_name: { a: 'msevtmgt_name' },
			msevtmgt_Paid: { a: 'msevtmgt_paid' },
			msevtmgt_Processed: { a: 'msevtmgt_processed' },
			msevtmgt_PurchasingContactId: { b: 'msevtmgt_PurchasingContactId', a: '_msevtmgt_purchasingcontactid_value', c: 'contacts', d: 'contact' },
			msevtmgt_YearsInIndustry: { a: 'msevtmgt_yearsinindustry' },
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
		var msevtmgt_eventpurchase = {};
		msevtmgt_eventpurchase.ODataEntity = e;
		msevtmgt_eventpurchase.FormattedValue = {};
		for (var field in _msevtmgt_eventpurchase) {
			var a = _msevtmgt_eventpurchase[field].a;
			var b = _msevtmgt_eventpurchase[field].b;
			var c = _msevtmgt_eventpurchase[field].c;
			var d = _msevtmgt_eventpurchase[field].d;
			var g = _msevtmgt_eventpurchase[field].g;
			var r = _msevtmgt_eventpurchase[field].r;
			webApiField(msevtmgt_eventpurchase, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_eventpurchase.Entity = u;
		msevtmgt_eventpurchase.EntityName = 'msevtmgt_eventpurchase';
		msevtmgt_eventpurchase.EntityCollectionName = 'msevtmgt_eventpurchases';
		msevtmgt_eventpurchase['@odata.etag'] = e['@odata.etag'];
		msevtmgt_eventpurchase.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_eventpurchase.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_eventpurchase;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_eventpurchase = {
		msevtmgt_Area : {
			Administration: 100000000,
			Customer_service: 100000001,
			Executivemanagement: 100000002,
			Finance: 100000004,
			HR: 100000005,
			IT: 100000006,
			Legal: 100000007,
			Logistics: 100000003,
			Marketing: 100000008,
			Sales: 100000009
		},
		msevtmgt_CompanySize : {
			_10001_or_more: 100000008,
			_1001_to_2500: 100000005,
			_101_to_250: 100000002,
			_2501_to_5000: 100000006,
			_251_to_500: 100000003,
			_50_or_less: 100000000,
			_5001_to_10000: 100000007,
			_501_to_1000: 100000004,
			_51_to_100: 100000001
		},
		msevtmgt_Industry : {
			Architecture_and_engineering: 100000000,
			Financial_services: 100000001,
			Manufacturing: 100000002,
			Media_entertainment: 100000003,
			Other: 100000008,
			Professional_services: 100000004,
			Public_sector: 100000005,
			Retail: 100000006,
			Wholesale_and_distribution: 100000007
		},
		msevtmgt_YearsInIndustry : {
			_1_to_5_years: 100000001,
			_5_to_10_years: 100000002,
			Over_10_years: 100000003,
			Under_one_year: 100000000
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