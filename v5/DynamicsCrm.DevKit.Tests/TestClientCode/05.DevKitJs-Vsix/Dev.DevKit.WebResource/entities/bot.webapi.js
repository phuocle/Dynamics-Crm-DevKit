'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.botApi = function (e) {
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
		const _bot = {
			accesscontrolpolicy: { a: 'accesscontrolpolicy', g: 'Integer' },
			applicationmanifestinformation: { a: 'applicationmanifestinformation' },
			authenticationconfiguration: { a: 'authenticationconfiguration' },
			authenticationmode: { a: 'authenticationmode', g: 'Integer' },
			authenticationtrigger: { a: 'authenticationtrigger', g: 'Integer' },
			authorizedsecuritygroupids: { a: 'authorizedsecuritygroupids' },
			botId: { a: 'botid' },
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true, g: 'Integer' },
			Configuration: { a: 'configuration' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			iconbase64: { a: 'iconbase64' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true, g: 'Boolean' },
			Language: { a: 'language', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			Origin: { a: 'origin' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true, g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ProviderConnectionReferenceId: { b: 'ProviderConnectionReferenceId', a: '_providerconnectionreferenceid_value', c: 'connectionreferences', d: 'connectionreference' },
			publishedby: { b: 'publishedby', a: '_publishedby_value', c: 'systemusers', d: 'systemuser' },
			publishedon_UtcDateAndTime: { a: 'publishedon', g: 'DateTime' },
			RuntimeProvider: { a: 'runtimeprovider', g: 'Integer' },
			SchemaName: { a: 'schemaname' },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' },
			SupportedLanguages: { a: 'supportedlanguages', g: 'MultiOptionSet' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			SynchronizationStatus: { a: 'synchronizationstatus' },
			Template: { a: 'template' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const bot = {};
		bot.ODataEntity = e;
		bot.FormattedValue = {};
		for (const field in _bot) {
			const fieldConfig = _bot[field];
			webApiField(bot, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		bot.Entity = u;
		bot.EntityName = 'bot';
		bot.EntityCollectionName = 'bots';
		bot['@odata.etag'] = e?.['@odata.etag'];
		bot.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		bot.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return bot;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.bot = {
		accesscontrolpolicy: { Any: 0, Any_multi_tenant: 3, Copilot_readers: 1, Group_membership: 2 },
		authenticationmode: { Custom_Azure_Active_Directory: 3, Generic_OAuth2: 4, Integrated: 2, None: 1, Unspecified: 0 },
		authenticationtrigger: { Always: 1, As_Needed: 0 },
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		Language: { Arabic: 1025, Chinese_Simplified: 2052, Chinese_Traditional: 1028, Czech: 1029, Danish: 1030, Dutch: 1043, English: 1033, English_Australia: 3081, English_United_Kingdom: 2057, Finnish: 1035, French: 1036, French_Canada: 3084, German: 1031, Greek: 1032, Hebrew: 1037, Hindi: 1081, Indonesian: 1057, Italian: 1040, Japanese: 1041, Korean: 1042, Norwegian: 1044, Polish: 1045, Portuguese_Brazilian: 1046, Portuguese_Portugal: 2070, Russian: 1049, Spanish: 1034, Spanish_United_States: 21514, Swedish: 1053, Thai: 1054, Turkish: 1055 },
		RuntimeProvider: { Nuance_Mix_Shell: 1, Power_Virtual_Agents: 0 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Deprovisioned: 2, MissingLicense: 5, Provisioned: 1, ProvisionFailed: 4, Provisioning: 3 },
		SupportedLanguages: { Arabic: 1025, Chinese_Simplified: 2052, Chinese_Traditional: 1028, Czech: 1029, Danish: 1030, Dutch: 1043, English: 1033, English_Australia: 3081, English_United_Kingdom: 2057, Finnish: 1035, French: 1036, French_Canada: 3084, German: 1031, Greek: 1032, Hebrew: 1037, Hindi: 1081, Indonesian: 1057, Italian: 1040, Japanese: 1041, Korean: 1042, Norwegian: 1044, Polish: 1045, Portuguese_Brazilian: 1046, Portuguese_Portugal: 2070, Russian: 1049, Spanish: 1034, Spanish_United_States: 21514, Swedish: 1053, Thai: 1054, Turkish: 1055 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));