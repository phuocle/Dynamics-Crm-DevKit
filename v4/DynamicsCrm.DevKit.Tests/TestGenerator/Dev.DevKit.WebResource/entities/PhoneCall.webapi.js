'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.PhoneCallApi = function (e) {
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
		const _phonecall = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes', g: 'Integer' },
			ActualEnd_UtcDateOnly: { a: 'actualend', g: 'DateTime' },
			ActualStart_UtcDateOnly: { a: 'actualstart', g: 'DateTime' },
			Category: { a: 'category' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			DirectionCode: { a: 'directioncode', g: 'Boolean' },
			ExchangeRate: { a: 'exchangerate', r: true, g: 'Number' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			IsBilled: { a: 'isbilled', g: 'Boolean' },
			IsRegularActivity: { a: 'isregularactivity', r: true, g: 'Boolean' },
			IsWorkflowCreated: { a: 'isworkflowcreated', g: 'Boolean' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime', g: 'DateTime' },
			LeftVoiceMail: { a: 'leftvoicemail', g: 'Boolean' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OnHoldTime: { a: 'onholdtime', r: true, g: 'Integer' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PhoneNumber: { a: 'phonenumber' },
			PriorityCode: { a: 'prioritycode', g: 'Integer' },
			ProcessId: { a: 'processid' },
			regardingobjectid_account_phonecall: { b: 'regardingobjectid_account_phonecall', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_adx_invitation_phonecall: { b: 'regardingobjectid_adx_invitation_phonecall', a: '_regardingobjectid_value', c: 'adx_invitations', d: 'adx_invitation' },
			regardingobjectid_contact_phonecall: { b: 'regardingobjectid_contact_phonecall', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_knowledgearticle_phonecall: { b: 'regardingobjectid_knowledgearticle_phonecall', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_phonecall: { b: 'regardingobjectid_knowledgebaserecord_phonecall', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_mspp_adplacement_phonecall: { b: 'regardingobjectid_mspp_adplacement_phonecall', a: '_regardingobjectid_value', c: 'mspp_adplacements', d: 'mspp_adplacement' },
			regardingobjectid_mspp_pollplacement_phonecall: { b: 'regardingobjectid_mspp_pollplacement_phonecall', a: '_regardingobjectid_value', c: 'mspp_pollplacements', d: 'mspp_pollplacement' },
			regardingobjectid_mspp_publishingstatetransitionrule_phonecall: { b: 'regardingobjectid_mspp_publishingstatetransitionrule_phonecall', a: '_regardingobjectid_value', c: 'mspp_publishingstatetransitionrules', d: 'mspp_publishingstatetransitionrule' },
			regardingobjectid_mspp_redirect_phonecall: { b: 'regardingobjectid_mspp_redirect_phonecall', a: '_regardingobjectid_value', c: 'mspp_redirects', d: 'mspp_redirect' },
			regardingobjectid_mspp_shortcut_phonecall: { b: 'regardingobjectid_mspp_shortcut_phonecall', a: '_regardingobjectid_value', c: 'mspp_shortcuts', d: 'mspp_shortcut' },
			regardingobjectid_mspp_website_phonecall: { b: 'regardingobjectid_mspp_website_phonecall', a: '_regardingobjectid_value', c: 'mspp_websites', d: 'mspp_website' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes', r: true, g: 'Integer' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend', g: 'DateTime' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart', g: 'DateTime' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SortDate_UtcDateAndTime: { a: 'sortdate', g: 'DateTime' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			Subcategory: { a: 'subcategory' },
			Subject: { a: 'subject' },
			SubscriptionId: { a: 'subscriptionid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const phonecall = {};
		phonecall.ODataEntity = e;
		phonecall.FormattedValue = {};
		for (const field in _phonecall) {
			const fieldConfig = _phonecall[field];
			webApiField(phonecall, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		Object.defineProperty(phonecall, 'ActivityParties', {
			get: function () { return e?.['phonecall_activity_parties']; },
			set: function (value) {
				e['phonecall_activity_parties'] = value;
				u['phonecall_activity_parties'] = value;
			}
		});
		phonecall.Entity = u;
		phonecall.EntityName = 'phonecall';
		phonecall.EntityCollectionName = 'phonecalls';
		phonecall['@odata.etag'] = e?.['@odata.etag'];
		phonecall.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		phonecall.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return phonecall;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PhoneCall = {
		ActivityTypeCode : { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		PriorityCode : { High: 2, Low: 0, Normal: 1 },
		RegardingObjectTypeCode : { },
		StateCode : { Canceled: 2, Completed: 1, Open: 0 },
		StatusCode : { Canceled: 3, Made: 2, Open: 1, Received: 4 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));