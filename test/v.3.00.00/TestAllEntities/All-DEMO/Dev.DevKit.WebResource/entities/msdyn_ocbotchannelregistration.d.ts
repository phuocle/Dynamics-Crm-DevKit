//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocbotchannelregistration_Information {
		interface tab__A5BDA06F_065C_4B0C_B963_1A94D7693649_Sections {
			_3C9CB577_F8E3_4468_912D_98FEF8318FAC: DevKit.Controls.Section;
			_A5BDA06F_065C_4B0C_B963_1A94D7693649_SECTION_2: DevKit.Controls.Section;
			_A5BDA06F_065C_4B0C_B963_1A94D7693649_SECTION_3: DevKit.Controls.Section;
		}
		interface tab__A5BDA06F_065C_4B0C_B963_1A94D7693649 extends DevKit.Controls.ITab {
			Section: tab__A5BDA06F_065C_4B0C_B963_1A94D7693649_Sections;
		}
		interface Tabs {
			_A5BDA06F_065C_4B0C_B963_1A94D7693649: tab__A5BDA06F_065C_4B0C_B963_1A94D7693649;
		}
		interface Body {
			Tab: Tabs;
			/** Flag to indicate if BCR entity is related to Custom Messaging */
			msdyn_iscustommessagingbcr: DevKit.Controls.Boolean;
			/** Flag to indicate if the record is newly created */
			msdyn_iscustommessagingcreated: DevKit.Controls.Boolean;
			/** Microsoft app Id and secret last validated date. */
			msdyn_lastvalidateddate: DevKit.Controls.DateTime;
			/** Messaging Endpoint (URL) */
			msdyn_messagingendpoint: DevKit.Controls.String;
			/** MS Application ID for the BCR */
			msdyn_msappid: DevKit.Controls.String;
			/** Bot channel registration client secret */
			msdyn_msappsecret: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Microsoft app ID and secert Validation status */
			msdyn_validationstatus: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_CopyCustomMessagingEndpointUrl: DevKit.Controls.WebResource;
			WebResource_CustomMessagingAccountDetailsDisclaimer: DevKit.Controls.WebResource;
			WebResource_CustomMessagingEndpointUrlDisclaimer: DevKit.Controls.WebResource;
			WebResource_CustomMessagingValidateButton: DevKit.Controls.WebResource;
			WebResource_ShowHideCustomMessagingMSAppSecret: DevKit.Controls.WebResource;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			CustomMessagingChannels: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_ocbotchannelregistration_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocbotchannelregistration_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocbotchannelregistration_Information */
		Body: DevKit.Formmsdyn_ocbotchannelregistration_Information.Body;
		/** The Process of form msdyn_ocbotchannelregistration_Information */
		Process: DevKit.Formmsdyn_ocbotchannelregistration_Information.Process;
		/** The Grid of form msdyn_ocbotchannelregistration_Information */
		Grid: DevKit.Formmsdyn_ocbotchannelregistration_Information.Grid;
		/** The SidePanes of form msdyn_ocbotchannelregistration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocbotchannelregistrationApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocbotchannelregistrationApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for Communication Provider Setting associated with Bot Channel Registration. */
		msdyn_communicationprovidersettingid: DevKit.WebApi.LookupValue;
		/** Flag to indicate if BCR entity is related to Custom Messaging */
		msdyn_iscustommessagingbcr: DevKit.WebApi.BooleanValue;
		/** Flag to indicate if the record is newly created */
		msdyn_iscustommessagingcreated: DevKit.WebApi.BooleanValue;
		/** Microsoft app Id and secret last validated date. */
		msdyn_lastvalidateddate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Messaging Endpoint (URL) */
		msdyn_messagingendpoint: DevKit.WebApi.StringValue;
		/** MS Application ID for the BCR */
		msdyn_msappid: DevKit.WebApi.StringValue;
		/** Bot channel registration client secret */
		msdyn_msappsecret: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_ocbotchannelregistrationId: DevKit.WebApi.GuidValue;
		/** Related Facebook application */
		msdyn_ocfbapplicationid: DevKit.WebApi.LookupValue;
		/** Related Line Channel */
		msdyn_oclinechannelconfigid: DevKit.WebApi.LookupValue;
		/** Related Teams Channel */
		msdyn_octeamschannelconfigid: DevKit.WebApi.LookupValue;
		/** Microsoft app ID and secert Validation status */
		msdyn_validationstatus: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Bot Channel Registration */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Bot Channel Registration */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocbotchannelregistration {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}