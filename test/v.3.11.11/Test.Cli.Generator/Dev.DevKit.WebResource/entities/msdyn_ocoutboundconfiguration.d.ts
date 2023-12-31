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
		/** Channel type */
		msdyn_channel: OptionSet.msdyn_ocoutboundconfiguration.msdyn_channel;
		/** User-friendly description of the selected channel. */
		msdyn_channeldisplayname: string;
		/** Unique Identifier for Channel associated with the channel selected */
		msdyn_channelid: string;
		/** Deprecated - This language will be used if there’s no customer preferred language or message template in customer's language. */
		msdyn_defaultlocale: string;
		/** Configuration ID */
		msdyn_displayoutboundconfigurationid: string;
		/** Enable Message Logging */
		msdyn_enablemessagelogging: boolean;
		/** Unique identifier for Work Stream associated with Outbound Configuration */
		msdyn_liveworkstreamid: string;
		/** Message template */
		msdyn_messagetemplate: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_ocoutboundconfigurationId: string;
		/** Scope of the outbound configuration */
		msdyn_ocscope: OptionSet.msdyn_ocoutboundconfiguration.msdyn_ocscope;
		/** User-friendly description of the selected secondary channel. */
		msdyn_secondarychanneldisplayname: string;
		/** Secondary identifier associated with the channel selected. */
		msdyn_secondarychannelid: string;
		/** If this is turned on, outbound activity record will be created in CRM. */
		msdyn_showinactivities: boolean;
		/** Conversation record */
		msdyn_type: OptionSet.msdyn_ocoutboundconfiguration.msdyn_type;
		/** Use Customer Preferred channel */
		msdyn_usecustomerpreference: boolean;
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
		/** Status of the Outbound Configuration */
		statecode: OptionSet.msdyn_ocoutboundconfiguration.statecode;
		/** Reason for the status of the Outbound Configuration */
		statuscode: OptionSet.msdyn_ocoutboundconfiguration.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Channel type */
			readonly msdyn_channel: string;
			/** User-friendly description of the selected channel. */
			readonly msdyn_channeldisplayname: string;
			/** Unique Identifier for Channel associated with the channel selected */
			readonly msdyn_channelid: string;
			/** Deprecated - This language will be used if there’s no customer preferred language or message template in customer's language. */
			readonly msdyn_defaultlocale: string;
			/** Configuration ID */
			readonly msdyn_displayoutboundconfigurationid: string;
			/** Enable Message Logging */
			readonly msdyn_enablemessagelogging: string;
			/** Unique identifier for Work Stream associated with Outbound Configuration */
			readonly msdyn_liveworkstreamid: string;
			/** Message template */
			readonly msdyn_messagetemplate: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocoutboundconfigurationId: string;
			/** Scope of the outbound configuration */
			readonly msdyn_ocscope: string;
			/** User-friendly description of the selected secondary channel. */
			readonly msdyn_secondarychanneldisplayname: string;
			/** Secondary identifier associated with the channel selected. */
			readonly msdyn_secondarychannelid: string;
			/** If this is turned on, outbound activity record will be created in CRM. */
			readonly msdyn_showinactivities: string;
			/** Conversation record */
			readonly msdyn_type: string;
			/** Use Customer Preferred channel */
			readonly msdyn_usecustomerpreference: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Outbound Configuration */
			readonly statecode: string;
			/** Reason for the status of the Outbound Configuration */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_ocoutboundconfiguration {
		enum msdyn_channel {
			/** 192450000 */
			Apple_Messages_for_Business,
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
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}