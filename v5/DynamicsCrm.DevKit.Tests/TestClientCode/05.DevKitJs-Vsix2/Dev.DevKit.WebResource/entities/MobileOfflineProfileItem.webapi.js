'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.MobileOfflineProfileItemApi = function (e) {
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
		const _mobileofflineprofileitem = {
			CanBeFollowed: { a: 'canbefollowed', g: 'Boolean' },
			ComponentState: { a: 'componentstate', r: true, g: 'Integer' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EntityObjectTypeCode: { a: 'entityobjecttypecode', r: true, g: 'Integer' },
			GetRelatedEntityRecords: { a: 'getrelatedentityrecords', g: 'Boolean' },
			IntroducedVersion: { a: 'introducedversion' },
			IsManaged: { a: 'ismanaged', r: true, g: 'Boolean' },
			IsValidated: { a: 'isvalidated', r: true, g: 'Boolean' },
			IsVisibleInGrid: { a: 'isvisibleingrid', g: 'Boolean' },
			MobileOfflineProfileItemId: { a: 'mobileofflineprofileitemid' },
			MobileOfflineProfileItemIdUnique: { a: 'mobileofflineprofileitemidunique', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true, g: 'DateTime' },
			ProcessId: { a: 'processid' },
			ProfileItemEntityFilter: { a: 'profileitementityfilter' },
			ProfileItemRule: { b: 'profileitemrule', a: '_profileitemrule_value', c: 'savedqueries', d: 'savedquery' },
			PublishedOn_UtcDateAndTime: { a: 'publishedon', r: true, g: 'DateTime' },
			RecordDistributionCriteria: { a: 'recorddistributioncriteria', g: 'Integer' },
			RecordsOwnedByMe: { a: 'recordsownedbyme', g: 'Boolean' },
			RecordsOwnedByMyBusinessUnit: { a: 'recordsownedbymybusinessunit', g: 'Boolean' },
			RecordsOwnedByMyTeam: { a: 'recordsownedbymyteam', g: 'Boolean' },
			RegardingObjectId: { b: 'regardingobjectid', a: '_regardingobjectid_value', c: 'mobileofflineprofiles', d: 'mobileofflineprofile' },
			RelationshipData: { a: 'relationshipdata' },
			SelectedColumns: { a: 'selectedcolumns' },
			SelectedEntityMetadata: { a: 'selectedentitymetadata', r: true },
			SolutionId: { a: 'solutionid', r: true },
			StageId: { a: 'stageid' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			SyncIntervalInMinutes: { a: 'syncintervalinminutes', g: 'Integer' },
			TraversedPath: { a: 'traversedpath' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' },
			ViewQuery: { a: 'viewquery' }
		};
		if (e === undefined) e = {};
		const u = {};
		const mobileofflineprofileitem = {};
		mobileofflineprofileitem.ODataEntity = e;
		mobileofflineprofileitem.FormattedValue = {};
		for (const field in _mobileofflineprofileitem) {
			const fieldConfig = _mobileofflineprofileitem[field];
			webApiField(mobileofflineprofileitem, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		mobileofflineprofileitem.Entity = u;
		mobileofflineprofileitem.EntityName = 'mobileofflineprofileitem';
		mobileofflineprofileitem.EntityCollectionName = 'mobileofflineprofileitems';
		mobileofflineprofileitem['@odata.etag'] = e?.['@odata.etag'];
		mobileofflineprofileitem.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		mobileofflineprofileitem.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return mobileofflineprofileitem;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.MobileOfflineProfileItem = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		RecordDistributionCriteria: { All_records: 1, Custom_data_filter: 3, Download_related_data_only: 0, Other_data_filter: 2 },
		SelectedEntityTypeCode: { Account: 1, AccountBPF: 10919, Activity_File_Attachment: 10252, Appointment: 4201, Attachment: 1001, Contact: 2, Email: 4202, Image_Descriptor: 1007, Interim_Update_Knowledge_Article: 10705, Knowledge_Article_Attachment: 10267, Knowledge_Article_Custom_Entity: 10706, Knowledge_Article_Image: 10261, Knowledge_Harvest_Job_Record: 10275, msdyn_historicalcaseharvestbatch: 10273, msdyn_historicalcaseharvestrun: 10274, Note: 5, OrganizationDataSyncFnoState: 10297, OrganizationDataSyncState: 10298, PowerPagesDDOSAlert: 10451, Queue: 2020, Queue_Item: 2029, Reserve_entity_10701ed370: 10604, Reserve_entity_1bfb649ef5: 10488, Reserve_entity_26a8ef60be: 10810, Reserve_entity_2de89d6f96: 10819, Reserve_entity_2f931a2c87: 10468, Reserve_entity_3d0e4d135d: 10799, Reserve_entity_49318bf520: 10675, Reserve_entity_56035df1f6: 10571, Reserve_entity_58265009a3: 10822, Reserve_entity_6356b0c104: 10524, Reserve_entity_6a32540060: 10585, Reserve_entity_702362ceb4: 10787, Reserve_entity_7aab32d91e: 10669, Reserve_entity_878256b1bd: 10506, Reserve_entity_9520b6e405: 10807, Reserve_entity_9eafbd660d: 10686, Reserve_entity_a8cd77b9ac: 10825, Reserve_entity_af3e0052ac: 10816, Reserve_entity_b3331f12e0: 10715, Reserve_entity_ba02296c07: 10542, Reserve_entity_bbc4b9fafc: 10655, Reserve_entity_c15f669578: 10718, Reserve_entity_c21749bb70: 10621, Reserve_entity_cd9cd968cc: 10712, Reserve_entity_dc212544db: 10638, Reserve_entity_dfef254c8f: 10590, Reserve_entity_dff8308cc9: 10813, Reserve_entity_e113384c28: 10828, Reserve_entity_e4227f9f0f: 10557, Reserve_entity_ed7de5dd0b: 10700, SLA_KPI_Instance: 9752, Task: 4212, Team: 9, User: 8 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));