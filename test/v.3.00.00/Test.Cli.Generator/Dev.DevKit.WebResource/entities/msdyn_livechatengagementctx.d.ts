﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_livechatengagementctx_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_livechatengagementctx_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_livechatengagementctx_Information */
		Body: DevKit.Formmsdyn_livechatengagementctx_Information.Body;
		/** The Process of form msdyn_livechatengagementctx_Information */
		Process: DevKit.Formmsdyn_livechatengagementctx_Information.Process;
		/** The SidePanes of form msdyn_livechatengagementctx_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_livechatengagementctxApi {
		/**
		* DynamicsCrm.DevKit msdyn_livechatengagementctxApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Browser where customer initiated chat */
		msdyn_browser: string;
		/** City where customer initiated chat */
		msdyn_City: string;
		/** Country where customer initiated chat */
		msdyn_country: string;
		/** Device where customer initiated chat */
		msdyn_device: string;
		/** Indicates if chat is authenticated */
		msdyn_isauthenticated: boolean;
		/** Indicates if chat was initiated from proactive chat */
		msdyn_isproactivechat: boolean;
		/** Latitude where customer initiated chat */
		msdyn_latitude: string;
		/** Unique identifier for entity instances */
		msdyn_livechatengagementctxId: string;
		/** Unique identifier for engagement context */
		msdyn_livechatengagementid: string;
		/** Corresponding conversation identifier for the chat */
		msdyn_liveworkitemid: string;
		/** Locale for this chat */
		msdyn_locale: string;
		/** Longitude where customer initiated chat */
		msdyn_longitude: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Browser URL where customer initiated chat */
		msdyn_originurl: string;
		/** Operating system where customer initiated chat */
		msdyn_os: string;
		/** Customer portal identifier if exists */
		msdyn_portalcontactid: string;
		/** Postal code where customer initiated chat */
		msdyn_PostalCode: string;
		/** State where customer initiated chat */
		msdyn_State: string;
		/** Street 1 where customer initiated chat */
		msdyn_Street1: string;
		/** Street 2 where customer initiated chat */
		msdyn_Street2: string;
		/** Street 3 where customer initiated chat */
		msdyn_Street3: string;
		/** Corresponding widget application identifier for the chat */
		msdyn_widgetappid: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Live chat context */
		statecode: OptionSet.msdyn_livechatengagementctx.statecode;
		/** Reason for the status of the Live chat context */
		statuscode: OptionSet.msdyn_livechatengagementctx.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_livechatengagementctx {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}