'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.BookableResourceBookingExchangeSyncIdMappingApi = function (e) {
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
		var _bookableresourcebookingexchangesyncidmapping = {
			BookableResourceBookingExchangeSyncIdMappingId: { a: 'bookableresourcebookingexchangesyncidmappingid' },
			BookableResourceBookingId: { a: 'bookableresourcebookingid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeEntryId: { a: 'exchangeentryid' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsDeletedInExchange: { a: 'isdeletedinexchange' },
			LastSyncError: { a: 'lastsyncerror' },
			LastSyncErrorCode: { a: 'lastsyncerrorcode' },
			LastSyncErrorOccurredOn_UtcDateAndTime: { a: 'lastsyncerroroccurredon' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Retries: { a: 'retries' },
			SyncStatus: { a: 'syncstatus' },
			SyncVersionNumber: { a: 'syncversionnumber' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var bookableresourcebookingexchangesyncidmapping = {};
		bookableresourcebookingexchangesyncidmapping.ODataEntity = e;
		bookableresourcebookingexchangesyncidmapping.FormattedValue = {};
		for (var field in _bookableresourcebookingexchangesyncidmapping) {
			var a = _bookableresourcebookingexchangesyncidmapping[field].a;
			var b = _bookableresourcebookingexchangesyncidmapping[field].b;
			var c = _bookableresourcebookingexchangesyncidmapping[field].c;
			var d = _bookableresourcebookingexchangesyncidmapping[field].d;
			var g = _bookableresourcebookingexchangesyncidmapping[field].g;
			var r = _bookableresourcebookingexchangesyncidmapping[field].r;
			webApiField(bookableresourcebookingexchangesyncidmapping, field, e, a, b, c, d, r, u, g);
		}
		bookableresourcebookingexchangesyncidmapping.Entity = u;
		bookableresourcebookingexchangesyncidmapping.EntityName = 'bookableresourcebookingexchangesyncidmapping';
		bookableresourcebookingexchangesyncidmapping.EntityCollectionName = 'bookableresourcebookingexchangesyncidmappings';
		bookableresourcebookingexchangesyncidmapping['@odata.etag'] = e['@odata.etag'];
		bookableresourcebookingexchangesyncidmapping.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		bookableresourcebookingexchangesyncidmapping.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return bookableresourcebookingexchangesyncidmapping;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BookableResourceBookingExchangeSyncIdMapping = {
		OwnerIdType : {
		},
		SyncStatus : {
			Completed: 0,
			Pending: 2,
			Retry: 1
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