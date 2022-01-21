//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocoutboundconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			/** Channel type */
			msdyn_channel: DevKit.Controls.OptionSet;
			/** Unique Identifier for Channel associated with the channel selected */
			msdyn_channelid: DevKit.Controls.String;
			/** Configuration ID */
			msdyn_displayoutboundconfigurationid: DevKit.Controls.String;
			/** Message template */
			msdyn_messagetemplate: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** If this is turned on, outbound activity record will be created in CRM. */
			msdyn_showinactivities: DevKit.Controls.Boolean;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_CopyConfigurationID: DevKit.Controls.WebResource;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_ocoutboundconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocoutboundconfiguration_Information */
		Body: DevKit.Formmsdyn_ocoutboundconfiguration_Information.Body;
		/** The Process of form msdyn_ocoutboundconfiguration_Information */
		Process: DevKit.Formmsdyn_ocoutboundconfiguration_Information.Process;
		/** The SidePanes of form msdyn_ocoutboundconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocoutboundconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocoutboundconfigurationApi
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
		/** Channel type */
		msdyn_channel: DevKit.WebApi.OptionSetValue;
		/** User-friendly description of the selected channel. */
		msdyn_channeldisplayname: DevKit.WebApi.StringValue;
		/** Unique Identifier for Channel associated with the channel selected */
		msdyn_channelid: DevKit.WebApi.StringValue;
		/** Deprecated - This language will be used if there’s no customer preferred language or message template in customer's language. */
		msdyn_defaultlocale: DevKit.WebApi.LookupValue;
		/** Configuration ID */
		msdyn_displayoutboundconfigurationid: DevKit.WebApi.StringValue;
		/** Enable Message Logging */
		msdyn_enablemessagelogging: DevKit.WebApi.BooleanValue;
		/** Unique identifier for Work Stream associated with Outbound Configuration */
		msdyn_liveworkstreamid: DevKit.WebApi.LookupValue;
		/** Message template */
		msdyn_messagetemplate: DevKit.WebApi.LookupValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_ocoutboundconfigurationId: DevKit.WebApi.GuidValue;
		/** Scope of the outbound configuration */
		msdyn_ocscope: DevKit.WebApi.OptionSetValue;
		/** User-friendly description of the selected secondary channel. */
		msdyn_secondarychanneldisplayname: DevKit.WebApi.StringValue;
		/** Secondary identifier associated with the channel selected. */
		msdyn_secondarychannelid: DevKit.WebApi.StringValue;
		/** If this is turned on, outbound activity record will be created in CRM. */
		msdyn_showinactivities: DevKit.WebApi.BooleanValue;
		/** Conversation record */
		msdyn_type: DevKit.WebApi.OptionSetValue;
		/** Use Customer Preferred channel */
		msdyn_usecustomerpreference: DevKit.WebApi.BooleanValue;
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
		/** Status of the Outbound Configuration */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Outbound Configuration */
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
	namespace msdyn_ocoutboundconfiguration {
		enum msdyn_channel {
			/** 192390000 */
			Co_browse,
			/** 192350002 */
			Custom,
			/** 192350000 */
			Entity_Records,
			/** 192330000 */
			Facebook,
			/** 192310000 */
			LINE,
			/** 192360000 */
			Live_chat,
			/** 19241000 */
			Microsoft_Teams,
			/** 192400000 */
			Screen_sharing,
			/** 192340000 */
			SMS,
			/** 192350001 */
			Twitter,
			/** 192380000 */
			Video,
			/** 192370000 */
			Voice,
			/** 192320000 */
			WeChat,
			/** 192300000 */
			WhatsApp
		}
		enum msdyn_ocscope {
			/** 837500000 */
			Global,
			/** 837500001 */
			Workstream
		}
		enum msdyn_type {
			/** 100000001 */
			Create_conversation_on_send,
			/** 100000000 */
			Create_conversation_when_customer_responds
		}
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