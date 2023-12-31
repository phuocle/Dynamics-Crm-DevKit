'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ContractDetailApi = function (e) {
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
		var _contractdetail = {
			AccountId: { b: 'accountid', a: '_accountid_value', c: 'accounts', d: 'account', r: true },
			ActiveOn_UtcDateOnly: { a: 'activeon' },
			AllotmentsOverage: { a: 'allotmentsoverage', r: true },
			AllotmentsRemaining: { a: 'allotmentsremaining', r: true },
			AllotmentsUsed: { a: 'allotmentsused', r: true },
			ContactId: { b: 'contactid', a: '_contactid_value', c: 'contacts', d: 'contact', r: true },
			ContractDetailId: { a: 'contractdetailid' },
			ContractId: { b: 'contractid', a: '_contractid_value', c: 'contracts', d: 'contract' },
			ContractStateCode: { a: 'contractstatecode', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			customerid_account: { b: 'customerid_account', a: '_customerid_value', c: 'accounts', d: 'account' },
			customerid_contact: { b: 'customerid_contact', a: '_customerid_value', c: 'contacts', d: 'contact' },
			Discount: { a: 'discount' },
			Discount_Base: { a: 'discount_base', r: true },
			DiscountPercentage: { a: 'discountpercentage' },
			EffectivityCalendar: { a: 'effectivitycalendar' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExpiresOn_UtcDateOnly: { a: 'expireson' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InitialQuantity: { a: 'initialquantity' },
			LineItemOrder: { a: 'lineitemorder' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Net: { a: 'net', r: true },
			Net_Base: { a: 'net_base', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			Price: { a: 'price' },
			Price_Base: { a: 'price_base', r: true },
			ProductId: { b: 'productid', a: '_productid_value', c: 'products', d: 'product' },
			ProductSerialNumber: { a: 'productserialnumber' },
			Rate: { a: 'rate', r: true },
			Rate_Base: { a: 'rate_base', r: true },
			ServiceAddress: { b: 'serviceaddress', a: '_serviceaddress_value', c: 'customeraddresses', d: 'customeraddress' },
			ServiceContractUnitsCode: { a: 'servicecontractunitscode' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Title: { a: 'title' },
			TotalAllotments: { a: 'totalallotments' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			UoMId: { b: 'uomid', a: '_uomid_value', c: 'uoms', d: 'uom' },
			UoMScheduleId: { b: 'uomscheduleid', a: '_uomscheduleid_value', c: 'uomschedules', d: 'uomschedule' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var contractdetail = {};
		contractdetail.ODataEntity = e;
		contractdetail.FormattedValue = {};
		for (var field in _contractdetail) {
			var a = _contractdetail[field].a;
			var b = _contractdetail[field].b;
			var c = _contractdetail[field].c;
			var d = _contractdetail[field].d;
			var g = _contractdetail[field].g;
			var r = _contractdetail[field].r;
			webApiField(contractdetail, field, e, a, b, c, d, r, u, g);
		}
		contractdetail.Entity = u;
		contractdetail.EntityName = 'contractdetail';
		contractdetail.EntityCollectionName = 'contractdetails';
		contractdetail['@odata.etag'] = e['@odata.etag'];
		contractdetail.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		contractdetail.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return contractdetail;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ContractDetail = {
		ContractStateCode : {
		},
		CustomerIdType : {
		},
		OwnerIdType : {
		},
		ServiceContractUnitsCode : {
			Default_Value: 1
		},
		StateCode : {
			Canceled: 2,
			Existing: 0,
			Expired: 3,
			Renewed: 1
		},
		StatusCode : {
			Canceled: 3,
			Expired: 4,
			New: 1,
			Renewed: 2
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