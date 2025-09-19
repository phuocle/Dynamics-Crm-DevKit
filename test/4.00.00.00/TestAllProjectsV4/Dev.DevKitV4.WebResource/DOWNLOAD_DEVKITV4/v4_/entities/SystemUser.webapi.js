'use strict';
/** @namespace DevKitV4 */
var DevKitV4;
(function (DevKitV4) {
	DevKitV4.SystemUserApi = function (e) {
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
		const _systemuser = {
			AccessMode: { a: 'accessmode', g: 'Integer' },
			ActiveDirectoryGuid: { a: 'activedirectoryguid', r: true },
			Address1_AddressId: { a: 'address1_addressid' },
			Address1_AddressTypeCode: { a: 'address1_addresstypecode', g: 'Integer' },
			Address1_City: { a: 'address1_city' },
			Address1_Composite: { a: 'address1_composite', r: true },
			Address1_Country: { a: 'address1_country' },
			Address1_County: { a: 'address1_county' },
			Address1_Fax: { a: 'address1_fax' },
			Address1_Latitude: { a: 'address1_latitude', g: 'Number' },
			Address1_Line1: { a: 'address1_line1' },
			Address1_Line2: { a: 'address1_line2' },
			Address1_Line3: { a: 'address1_line3' },
			Address1_Longitude: { a: 'address1_longitude', g: 'Number' },
			Address1_Name: { a: 'address1_name' },
			Address1_PostalCode: { a: 'address1_postalcode' },
			Address1_PostOfficeBox: { a: 'address1_postofficebox' },
			Address1_ShippingMethodCode: { a: 'address1_shippingmethodcode', g: 'Integer' },
			Address1_StateOrProvince: { a: 'address1_stateorprovince' },
			Address1_Telephone1: { a: 'address1_telephone1' },
			Address1_Telephone2: { a: 'address1_telephone2' },
			Address1_Telephone3: { a: 'address1_telephone3' },
			Address1_UPSZone: { a: 'address1_upszone' },
			Address1_UTCOffset: { a: 'address1_utcoffset', g: 'Integer' },
			Address2_AddressId: { a: 'address2_addressid' },
			Address2_AddressTypeCode: { a: 'address2_addresstypecode', g: 'Integer' },
			Address2_City: { a: 'address2_city' },
			Address2_Composite: { a: 'address2_composite', r: true },
			Address2_Country: { a: 'address2_country' },
			Address2_County: { a: 'address2_county' },
			Address2_Fax: { a: 'address2_fax' },
			Address2_Latitude: { a: 'address2_latitude', g: 'Number' },
			Address2_Line1: { a: 'address2_line1' },
			Address2_Line2: { a: 'address2_line2' },
			Address2_Line3: { a: 'address2_line3' },
			Address2_Longitude: { a: 'address2_longitude', g: 'Number' },
			Address2_Name: { a: 'address2_name' },
			Address2_PostalCode: { a: 'address2_postalcode' },
			Address2_PostOfficeBox: { a: 'address2_postofficebox' },
			Address2_ShippingMethodCode: { a: 'address2_shippingmethodcode', g: 'Integer' },
			Address2_StateOrProvince: { a: 'address2_stateorprovince' },
			Address2_Telephone1: { a: 'address2_telephone1' },
			Address2_Telephone2: { a: 'address2_telephone2' },
			Address2_Telephone3: { a: 'address2_telephone3' },
			Address2_UPSZone: { a: 'address2_upszone' },
			Address2_UTCOffset: { a: 'address2_utcoffset', g: 'Integer' },
			ApplicationId: { a: 'applicationid' },
			ApplicationIdUri: { a: 'applicationiduri', r: true },
			AzureActiveDirectoryObjectId: { a: 'azureactivedirectoryobjectid', r: true },
			AzureDeletedOn_UtcDateAndTime: { a: 'azuredeletedon', r: true, g: 'DateTime' },
			AzureState: { a: 'azurestate', g: 'Integer' },
			BusinessUnitId: { b: 'businessunitid', a: '_businessunitid_value', c: 'businessunits', d: 'businessunit' },
			CalendarId: { b: 'calendarid', a: '_calendarid_value', c: 'calendars', d: 'calendar' },
			CALType: { a: 'caltype', g: 'Integer' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DefaultFiltersPopulated: { a: 'defaultfilterspopulated', r: true, g: 'Boolean' },
			DefaultMailbox: { b: 'defaultmailbox', a: '_defaultmailbox_value', c: 'mailboxes', d: 'mailbox', r: true },
			DefaultOdbFolderName: { a: 'defaultodbfoldername', r: true },
			DeletedState: { a: 'deletedstate', r: true, g: 'Integer' },
			DisabledReason: { a: 'disabledreason', r: true },
			DisplayInServiceViews: { a: 'displayinserviceviews', g: 'Boolean' },
			DomainName: { a: 'domainname' },
			EmailRouterAccessApproval: { a: 'emailrouteraccessapproval', g: 'Integer' },
			EmployeeId: { a: 'employeeid' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true, g: 'Number' },
			FirstName: { a: 'firstname' },
			FullName: { a: 'fullname', r: true },
			GovernmentId: { a: 'governmentid' },
			HomePhone: { a: 'homephone' },
			IdentityId: { a: 'identityid', r: true, g: 'Integer' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			IncomingEmailDeliveryMethod: { a: 'incomingemaildeliverymethod', g: 'Integer' },
			InternalEMailAddress: { a: 'internalemailaddress' },
			InviteStatusCode: { a: 'invitestatuscode', g: 'Integer' },
			IsActiveDirectoryUser: { a: 'isactivedirectoryuser', r: true, g: 'Boolean' },
			IsAllowedByIpFirewall: { a: 'isallowedbyipfirewall', g: 'Boolean' },
			IsDisabled: { a: 'isdisabled', g: 'Boolean' },
			IsEmailAddressApprovedByO365Admin: { a: 'isemailaddressapprovedbyo365admin', r: true, g: 'Boolean' },
			IsIntegrationUser: { a: 'isintegrationuser', g: 'Boolean' },
			IsLicensed: { a: 'islicensed', g: 'Boolean' },
			IsSyncWithDirectory: { a: 'issyncwithdirectory', g: 'Boolean' },
			JobTitle: { a: 'jobtitle' },
			LastName: { a: 'lastname' },
			LatestUpdateTime_UtcDateAndTime: { a: 'latestupdatetime', r: true, g: 'DateTime' },
			MiddleName: { a: 'middlename' },
			MobileAlertEMail: { a: 'mobilealertemail' },
			MobileOfflineProfileId: { b: 'mobileofflineprofileid', a: '_mobileofflineprofileid_value', c: 'mobileofflineprofiles', d: 'mobileofflineprofile' },
			MobilePhone: { a: 'mobilephone' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			NickName: { a: 'nickname' },
			OrganizationId: { a: 'organizationid', r: true },
			OutgoingEmailDeliveryMethod: { a: 'outgoingemaildeliverymethod', g: 'Integer' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			ParentSystemUserId: { b: 'parentsystemuserid', a: '_parentsystemuserid_value', c: 'systemusers', d: 'systemuser' },
			PassportHi: { a: 'passporthi', g: 'Integer' },
			PassportLo: { a: 'passportlo', g: 'Integer' },
			PersonalEMailAddress: { a: 'personalemailaddress' },
			PhotoUrl: { a: 'photourl' },
			PositionId: { b: 'positionid', a: '_positionid_value', c: 'positions', d: 'position' },
			PreferredAddressCode: { a: 'preferredaddresscode', g: 'Integer' },
			PreferredEmailCode: { a: 'preferredemailcode', g: 'Integer' },
			PreferredPhoneCode: { a: 'preferredphonecode', g: 'Integer' },
			ProcessId: { a: 'processid' },
			QueueId: { b: 'queueid', a: '_queueid_value', c: 'queues', d: 'queue' },
			Salutation: { a: 'salutation' },
			SetupUser: { a: 'setupuser', g: 'Boolean' },
			SharePointEmailAddress: { a: 'sharepointemailaddress' },
			Skills: { a: 'skills' },
			StageId: { a: 'stageid' },
			SystemManagedUserType: { a: 'systemmanagedusertype', g: 'Integer' },
			SystemUserId: { a: 'systemuserid' },
			TerritoryId: { b: 'territoryid', a: '_territoryid_value', c: 'territories', d: 'territory' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UserLicenseType: { a: 'userlicensetype', g: 'Integer' },
			UserPuid: { a: 'userpuid', r: true },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' },
			WindowsLiveID: { a: 'windowsliveid' },
			YammerEmailAddress: { a: 'yammeremailaddress' },
			YammerUserId: { a: 'yammeruserid' },
			YomiFirstName: { a: 'yomifirstname' },
			YomiFullName: { a: 'yomifullname', r: true },
			YomiLastName: { a: 'yomilastname' },
			YomiMiddleName: { a: 'yomimiddlename' }
		};
		if (e === undefined) e = {};
		const u = {};
		const systemuser = {};
		systemuser.ODataEntity = e;
		systemuser.FormattedValue = {};
		for (const field in _systemuser) {
			const fieldConfig = _systemuser[field];
			webApiField(systemuser, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		systemuser.Entity = u;
		systemuser.EntityName = 'systemuser';
		systemuser.EntityCollectionName = 'systemusers';
		systemuser['@odata.etag'] = e?.['@odata.etag'];
		systemuser.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		systemuser.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return systemuser;
	};
})(DevKitV4 || (DevKitV4 = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SystemUser = {
		AccessMode : {
			Administrative: 1,
			Delegated_Admin: 5,
			Non_interactive: 4,
			Read: 2,
			Read_Write: 0,
			Support_User: 3
		},
		Address1_AddressTypeCode : {
			Default_Value: 1
		},
		Address1_ShippingMethodCode : {
			Default_Value: 1
		},
		Address2_AddressTypeCode : {
			Default_Value: 1
		},
		Address2_ShippingMethodCode : {
			Default_Value: 1
		},
		AzureState : {
			Exists: 0,
			Not_found_or_hard_deleted: 2,
			Soft_deleted: 1
		},
		CALType : {
			Administrative: 1,
			Basic: 2,
			Device_Basic: 4,
			Device_Enterprise: 8,
			Device_Essential: 6,
			Device_Professional: 3,
			Enterprise: 7,
			Essential: 5,
			Field_Service: 11,
			Professional: 0,
			Project_Service: 12,
			Sales: 9,
			Service: 10
		},
		DeletedState : {
			Not_deleted: 0,
			Soft_deleted: 1
		},
		EmailRouterAccessApproval : {
			Approved: 1,
			Empty: 0,
			Pending_Approval: 2,
			Rejected: 3
		},
		IncomingEmailDeliveryMethod : {
			Forward_Mailbox: 3,
			Microsoft_Dynamics_365_for_Outlook: 1,
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		InviteStatusCode : {
			Invitation_Accepted: 4,
			Invitation_Expired: 3,
			Invitation_Near_Expired: 2,
			Invitation_Not_Sent: 0,
			Invitation_Rejected: 5,
			Invitation_Revoked: 6,
			Invited: 1
		},
		OutgoingEmailDeliveryMethod : {
			Microsoft_Dynamics_365_for_Outlook: 1,
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		PreferredAddressCode : {
			Mailing_Address: 1,
			Other_Address: 2
		},
		PreferredEmailCode : {
			Default_Value: 1
		},
		PreferredPhoneCode : {
			Home_Phone: 3,
			Main_Phone: 1,
			Mobile_Phone: 4,
			Other_Phone: 2
		},
		SystemManagedUserType : {
			C2_User: 1,
			Entra_User: 0,
			Impersonable_Stub_User: 2
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