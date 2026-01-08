'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.MailboxApi = function (e) {
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
		const _mailbox = {
			ACSEnabledForOutgoingEmail: { a: 'acsenabledforoutgoingemail', g: 'Boolean' },
			ACSMailFromCreated: { a: 'acsmailfromcreated', g: 'Boolean' },
			ACSOutgoingEmailStatus: { a: 'acsoutgoingemailstatus', g: 'Integer' },
			ACTDeliveryMethod: { a: 'actdeliverymethod', g: 'Integer' },
			ACTStatus: { a: 'actstatus', g: 'Integer' },
			AllowEmailConnectorToUseCredentials: { a: 'allowemailconnectortousecredentials', g: 'Boolean' },
			AverageTotalDuration: { a: 'averagetotalduration', r: true, g: 'Integer' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EmailAddress: { a: 'emailaddress' },
			EmailAddressApprovedBy: { b: 'emailaddressapprovedby', a: '_emailaddressapprovedby_value', c: 'systemusers', d: 'systemuser', r: true },
			EmailAddressApprovedOn_UtcDateAndTime: { a: 'emailaddressapprovedon', r: true, g: 'DateTime' },
			EmailRouterAccessApproval: { a: 'emailrouteraccessapproval', g: 'Integer' },
			EmailServerProfile: { b: 'emailserverprofile', a: '_emailserverprofile_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			EnabledForACT: { a: 'enabledforact', g: 'Boolean' },
			EnabledForIncomingEmail: { a: 'enabledforincomingemail', g: 'Boolean' },
			EnabledForOutgoingEmail: { a: 'enabledforoutgoingemail', g: 'Boolean' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			EWSURL: { a: 'ewsurl' },
			ExchangeContactsImportCompletedOn_UtcDateAndTime: { a: 'exchangecontactsimportcompletedon', r: true, g: 'DateTime' },
			ExchangeContactsImportStatus: { a: 'exchangecontactsimportstatus', g: 'Integer' },
			ExchangeSyncStateXml: { a: 'exchangesyncstatexml' },
			ExchangeSyncStateXmlFileRef_name: { a: 'exchangesyncstatexmlfileref', r: true },
			FolderHierarchy: { a: 'folderhierarchy' },
			ForcedUnlockCount: { a: 'forcedunlockcount', r: true, g: 'Integer' },
			HostId: { a: 'hostid', r: true },
			IncomingEmailDeliveryMethod: { a: 'incomingemaildeliverymethod', g: 'Integer' },
			IncomingEmailStatus: { a: 'incomingemailstatus', g: 'Integer' },
			IsACTSyncOrgFlagSet: { a: 'isactsyncorgflagset', g: 'Boolean' },
			IsEmailAddressApprovedByO365Admin: { a: 'isemailaddressapprovedbyo365admin', g: 'Boolean' },
			IsExchangeContactsImportScheduled: { a: 'isexchangecontactsimportscheduled', r: true, g: 'Boolean' },
			IsForwardMailbox: { a: 'isforwardmailbox', r: true, g: 'Boolean' },
			IsOauthAccessTokenSet: { a: 'isoauthaccesstokenset', r: true, g: 'Boolean' },
			IsOauthRefreshTokenSet: { a: 'isoauthrefreshtokenset', r: true, g: 'Boolean' },
			IsPasswordSet: { a: 'ispasswordset', r: true, g: 'Boolean' },
			IsServiceAccount: { a: 'isserviceaccount', r: true, g: 'Boolean' },
			ItemsFailedForLastSync: { a: 'itemsfailedforlastsync', g: 'Integer' },
			ItemsProcessedForLastSync: { a: 'itemsprocessedforlastsync', g: 'Integer' },
			LastActiveOn_UtcDateAndTime: { a: 'lastactiveon', r: true, g: 'DateTime' },
			LastAutoDiscoveredOn_UtcDateAndTime: { a: 'lastautodiscoveredon', g: 'DateTime' },
			LastDuration: { a: 'lastduration', r: true, g: 'Integer' },
			LastIncomingEmailsRequestedFromEmailServerOn_UtcDateAndTime: { a: 'lastincomingemailsrequestedfromemailserveron', g: 'DateTime' },
			LastMailboxForcedUnlockOccurredOn_UtcDateAndTime: { a: 'lastmailboxforcedunlockoccurredon', r: true, g: 'DateTime' },
			LastMessageId: { a: 'lastmessageid' },
			LastSuccessfulSyncCompletedOn_UtcDateAndTime: { a: 'lastsuccessfulsynccompletedon', g: 'DateTime' },
			LastSyncError: { a: 'lastsyncerror' },
			LastSyncErrorCode: { a: 'lastsyncerrorcode', g: 'Integer' },
			LastSyncErrorCount: { a: 'lastsyncerrorcount', g: 'Integer' },
			LastSyncErrorMachineName: { a: 'lastsyncerrormachinename' },
			LastSyncErrorOccurredOn_UtcDateAndTime: { a: 'lastsyncerroroccurredon', g: 'DateTime' },
			LastSyncStartedOn_UtcDateAndTime: { a: 'lastsyncstartedon', r: true, g: 'DateTime' },
			LastTagCompletedOn_UtcDateAndTime: { a: 'lasttagcompletedon', g: 'DateTime' },
			LastTaggedMessageId: { a: 'lasttaggedmessageid' },
			LastTagProcessedMaxItems: { a: 'lasttagprocessedmaxitems', g: 'Boolean' },
			MailboxId: { a: 'mailboxid' },
			MailboxProcessingContext: { a: 'mailboxprocessingcontext', g: 'Integer' },
			MailboxStatus: { a: 'mailboxstatus', r: true, g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NextScheduledACTSyncInSeconds: { a: 'nextscheduledactsyncinseconds', r: true, g: 'Integer' },
			NoACTCount: { a: 'noactcount', r: true, g: 'Integer' },
			NoEmailCount: { a: 'noemailcount', r: true, g: 'Integer' },
			OauthAccessToken: { a: 'oauthaccesstoken' },
			OauthRefreshToken: { a: 'oauthrefreshtoken' },
			OauthTokenExpiresOn_UtcDateAndTime: { a: 'oauthtokenexpireson', g: 'DateTime' },
			OfficeAppsDeploymentCompleteOn_UtcDateAndTime: { a: 'officeappsdeploymentcompleteon', r: true, g: 'DateTime' },
			OfficeAppsDeploymentError: { a: 'officeappsdeploymenterror', r: true },
			OfficeAppsDeploymentScheduled: { a: 'officeappsdeploymentscheduled', g: 'Boolean' },
			OfficeAppsDeploymentStatus: { a: 'officeappsdeploymentstatus', g: 'Integer' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OrgMarkedAsPrimaryForExchangeSync: { a: 'orgmarkedasprimaryforexchangesync', g: 'Boolean' },
			OutgoingEmailDeliveryMethod: { a: 'outgoingemaildeliverymethod', g: 'Integer' },
			OutgoingEmailStatus: { a: 'outgoingemailstatus', g: 'Integer' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Password: { a: 'password' },
			PostponeMailboxProcessingUntil_UtcDateOnly: { a: 'postponemailboxprocessinguntil', g: 'DateTime' },
			PostponeOfficeAppsDeploymentUntil_UtcDateAndTime: { a: 'postponeofficeappsdeploymentuntil', g: 'DateTime' },
			PostponeSendingUntil_UtcDateOnly: { a: 'postponesendinguntil', g: 'DateTime' },
			PostponeTestEmailConfigurationUntil_UtcDateAndTime: { a: 'postponetestemailconfigurationuntil', g: 'DateTime' },
			ProcessAndDeleteEmails: { a: 'processanddeleteemails', g: 'Boolean' },
			ProcessedTimes: { a: 'processedtimes', r: true, g: 'Integer' },
			ProcessEmailReceivedAfter_UtcDateOnly: { a: 'processemailreceivedafter', g: 'DateTime' },
			ProcessingLastAttemptedOn_UtcDateAndTime: { a: 'processinglastattemptedon', g: 'DateTime' },
			ProcessingStateCode: { a: 'processingstatecode', r: true, g: 'Integer' },
			ReceivingPostponedUntil_UtcDateOnly: { a: 'receivingpostponeduntil', r: true, g: 'DateTime' },
			ReceivingPostponedUntilForACT_UtcDateOnly: { a: 'receivingpostponeduntilforact', r: true, g: 'DateTime' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			TagEmailsAfter_UtcDateOnly: { a: 'tagemailsafter', g: 'DateTime' },
			TestAndEnableLastAttemptedBy: { b: 'testandenablelastattemptedby', a: '_testandenablelastattemptedby_value', c: 'systemusers', d: 'systemuser', r: true },
			TestAndEnableLastAttemptedOn_UtcDateAndTime: { a: 'testandenablelastattemptedon', r: true, g: 'DateTime' },
			TestEmailConfigurationRetryCount: { a: 'testemailconfigurationretrycount', g: 'Integer' },
			TestEmailConfigurationScheduled: { a: 'testemailconfigurationscheduled', g: 'Boolean' },
			TestMailboxAccessCompletedOn_UtcDateAndTime: { a: 'testmailboxaccesscompletedon', g: 'DateTime' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			TransientFailureCount: { a: 'transientfailurecount', r: true, g: 'Integer' },
			UndeliverableFolder: { a: 'undeliverablefolder' },
			Username: { a: 'username' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VerboseLoggingEnabled: { a: 'verboseloggingenabled', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const mailbox = {};
		mailbox.ODataEntity = e;
		mailbox.FormattedValue = {};
		for (const field in _mailbox) {
			const fieldConfig = _mailbox[field];
			webApiField(mailbox, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		mailbox.Entity = u;
		mailbox.EntityName = 'mailbox';
		mailbox.EntityCollectionName = 'mailboxes';
		mailbox['@odata.etag'] = e?.['@odata.etag'];
		mailbox.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		mailbox.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return mailbox;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Mailbox = {
		ACSOutgoingEmailStatus: { Failure: 2, Not_Run: 0, Success: 1 },
		ACTDeliveryMethod: { Microsoft_Dynamics_365_for_Outlook: 0, None: 2, Server_Side_Synchronization: 1 },
		ACTStatus: { Failure: 2, Not_Run: 0, Success: 1 },
		EmailRouterAccessApproval: { Approved: 1, Empty: 0, Pending_Approval: 2, Rejected: 3 },
		ExchangeContactsImportStatus: { Imported: 1, ImportFailed: 2, NotImported: 0 },
		IncomingEmailDeliveryMethod: { Forward_Mailbox: 3, Microsoft_Dynamics_365_for_Outlook: 1, None: 0, Server_Side_Synchronization: 2 },
		IncomingEmailStatus: { Failure: 2, Not_Run: 0, Success: 1 },
		MailboxStatus: { Failure: 2, Not_Run: 0, Success: 1 },
		OfficeAppsDeploymentStatus: { Installed: 1, InstallFailed: 2, NotInstalled: 0, UninstallFailed: 3, UpgradeRequired: 4 },
		OutgoingEmailDeliveryMethod: { Microsoft_Dynamics_365_for_Outlook: 1, None: 0, Server_Side_Synchronization: 2 },
		OutgoingEmailStatus: { Failure: 2, Not_Run: 0, Success: 1 },
		RegardingObjectTypeCode: { },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));