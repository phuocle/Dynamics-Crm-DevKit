'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_resourcecategorymarkuppricelevelApi = function (e) {
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
		var _msdyn_resourcecategorymarkuppricelevel = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_bookableresource: { b: 'msdyn_bookableresource', a: '_msdyn_bookableresource_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_organizationalunit: { b: 'msdyn_organizationalunit', a: '_msdyn_organizationalunit_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_percent: { a: 'msdyn_percent' },
			msdyn_pricecalculation: { a: 'msdyn_pricecalculation', r: true },
			msdyn_pricelist: { b: 'msdyn_pricelist', a: '_msdyn_pricelist_value', c: 'pricelevels', d: 'pricelevel' },
			msdyn_resourcecategory: { b: 'msdyn_resourcecategory', a: '_msdyn_resourcecategory_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_resourcecategorymarkuppricelevelId: { a: 'msdyn_resourcecategorymarkuppricelevelid' },
			msdyn_transactioncategory: { b: 'msdyn_transactioncategory', a: '_msdyn_transactioncategory_value', c: 'msdyn_transactioncategories', d: 'msdyn_transactioncategory' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_resourcecategorymarkuppricelevel = {};
		msdyn_resourcecategorymarkuppricelevel.ODataEntity = e;
		msdyn_resourcecategorymarkuppricelevel.FormattedValue = {};
		for (var field in _msdyn_resourcecategorymarkuppricelevel) {
			var a = _msdyn_resourcecategorymarkuppricelevel[field].a;
			var b = _msdyn_resourcecategorymarkuppricelevel[field].b;
			var c = _msdyn_resourcecategorymarkuppricelevel[field].c;
			var d = _msdyn_resourcecategorymarkuppricelevel[field].d;
			var g = _msdyn_resourcecategorymarkuppricelevel[field].g;
			var r = _msdyn_resourcecategorymarkuppricelevel[field].r;
			webApiField(msdyn_resourcecategorymarkuppricelevel, field, e, a, b, c, d, r, u, g);
		}
		msdyn_resourcecategorymarkuppricelevel.Entity = u;
		msdyn_resourcecategorymarkuppricelevel.EntityName = 'msdyn_resourcecategorymarkuppricelevel';
		msdyn_resourcecategorymarkuppricelevel.EntityCollectionName = 'msdyn_resourcecategorymarkuppricelevels';
		msdyn_resourcecategorymarkuppricelevel['@odata.etag'] = e['@odata.etag'];
		msdyn_resourcecategorymarkuppricelevel.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_resourcecategorymarkuppricelevel.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_resourcecategorymarkuppricelevel;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_resourcecategorymarkuppricelevel = {
		msdyn_pricecalculation : {
			At_cost: 192350001,
			Markup_percentage: 192350002,
			Price_per_unit: 192350000
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