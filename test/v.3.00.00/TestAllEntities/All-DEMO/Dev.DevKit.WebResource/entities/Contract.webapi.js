'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ContractApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var property = {};
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return EMPTY_STRING;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return EMPTY_STRING;
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
					value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(property, 'FormattedValue', {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(property, 'Value', {
					get: getValue
				});
			}
			else {
				Object.defineProperty(property, 'Value', {
					get: getValue,
					set: setValue
				});
			}
			return property;
		}
		var contract = {
			AccountId: { b: 'accountid', a: '_accountid_value', c: 'accounts', d: 'account', r: true },
			ActiveOn_UtcDateOnly: { a: 'activeon' },
			AllotmentTypeCode: { a: 'allotmenttypecode' },
			BillingAccountId: { b: 'billingaccountid', a: '_billingaccountid_value', c: 'accounts', d: 'account', r: true },
			BillingContactId: { b: 'billingcontactid', a: '_billingcontactid_value', c: 'contacts', d: 'contact', r: true },
			billingcustomerid_account: { b: 'billingcustomerid_account', a: '_billingcustomerid_value', c: 'accounts', d: 'account' },
			billingcustomerid_contact: { b: 'billingcustomerid_contact', a: '_billingcustomerid_value', c: 'contacts', d: 'contact' },
			BillingEndOn_UtcDateOnly: { a: 'billingendon' },
			BillingFrequencyCode: { a: 'billingfrequencycode' },
			BillingStartOn_UtcDateOnly: { a: 'billingstarton' },
			BillToAddress: { b: 'billtoaddress', a: '_billtoaddress_value', c: 'customeraddresses', d: 'customeraddress' },
			CancelOn_UtcDateOnly: { a: 'cancelon', r: true },
			ContactId: { b: 'contactid', a: '_contactid_value', c: 'contacts', d: 'contact', r: true },
			ContractId: { a: 'contractid' },
			ContractLanguage: { a: 'contractlanguage' },
			ContractNumber: { a: 'contractnumber' },
			ContractServiceLevelCode: { a: 'contractservicelevelcode' },
			ContractTemplateAbbreviation: { a: 'contracttemplateabbreviation', r: true },
			ContractTemplateId: { b: 'contracttemplateid', a: '_contracttemplateid_value', c: 'contracttemplates', d: 'contracttemplate' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			customerid_account: { b: 'customerid_account', a: '_customerid_value', c: 'accounts', d: 'account' },
			customerid_contact: { b: 'customerid_contact', a: '_customerid_value', c: 'contacts', d: 'contact' },
			Duration: { a: 'duration', r: true },
			EffectivityCalendar: { a: 'effectivitycalendar' },
			EmailAddress: { a: 'emailaddress' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExpiresOn_UtcDateOnly: { a: 'expireson' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			NetPrice: { a: 'netprice', r: true },
			NetPrice_Base: { a: 'netprice_base', r: true },
			OriginatingContract: { b: 'originatingcontract', a: '_originatingcontract_value', c: 'contracts', d: 'contract' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ServiceAddress: { b: 'serviceaddress', a: '_serviceaddress_value', c: 'customeraddresses', d: 'customeraddress' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Title: { a: 'title' },
			TotalDiscount: { a: 'totaldiscount', r: true },
			TotalDiscount_Base: { a: 'totaldiscount_base', r: true },
			TotalPrice: { a: 'totalprice', r: true },
			TotalPrice_Base: { a: 'totalprice_base', r: true },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UseDiscountAsPercentage: { a: 'usediscountaspercentage' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in contract) {
			var a = contract[field].a;
			var b = contract[field].b;
			var c = contract[field].c;
			var d = contract[field].d;
			var g = contract[field].g;
			var r = contract[field].r;
			contract[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		contract.Entity = u;
		contract.EntityName = 'contract';
		contract.EntityCollectionName = 'contracts';
		contract['@odata.etag'] = e['@odata.etag'];
		contract.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		contract.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return contract;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.Contract = {
			AllotmentTypeCode : {
				Coverage_Dates: 3,
				Number_of_Cases: 1,
				Time: 2
			},
			BillingFrequencyCode : {
				Annually: 5,
				Bimonthly: 2,
				Monthly: 1,
				Quarterly: 3,
				Semiannually: 4
			},
			ContractServiceLevelCode : {
				Bronze: 3,
				Gold: 1,
				Silver: 2
			},
			StateCode : {
				Active: 2,
				Canceled: 4,
				Draft: 0,
				Expired: 5,
				Invoiced: 1,
				On_Hold: 3
			},
			StatusCode : {
				Active: 3,
				Canceled: 5,
				Draft: 1,
				Expired: 6,
				Invoiced: 2,
				On_Hold: 4
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