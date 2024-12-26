//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_octwitterapplication_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Field indicating whether Twitter Application form saved or not */
			msdyn_twitterapplicationsaved: DevKit.Controls.String;
			/** Twitter Messaging Callback URL */
			msdyn_twittercallbackurl: DevKit.Controls.String;
			/** Twitter Consumer Key */
			msdyn_twitterconsumerkey: DevKit.Controls.String;
			/** Twitter Consumer Secret */
			msdyn_twitterconsumersecret: DevKit.Controls.String;
			/** Twitter Developer Account Environment Name */
			msdyn_twitterenvironmentname: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_CopyTwitterCallbackUrl: DevKit.Controls.WebResource;
			WebResource_ShowHideTwitterConsumerKey: DevKit.Controls.WebResource;
			WebResource_ShowHideTwitterConsumerSecret: DevKit.Controls.WebResource;
			WebResource_TwitterAccountInstructions: DevKit.Controls.WebResource;
			WebResource_TwitterApplicationSaved: DevKit.Controls.WebResource;
			WebResource_TwitterCallbackUrlDisclaimer: DevKit.Controls.WebResource;
		}
		interface Navigation {
			msdyn_msdyn_octwitterapplication_msdyn_octwitterhandle_octwitterapplicationid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_octwitterapplication_msdyn_octwitterhandleprovisioningstatus_octwitterapplicationid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_octwitterapplication_msdyn_octwitterhandlesecret_octwitterapplicationid: DevKit.Controls.NavigationItem
		}
		interface Grid {
			TwitterHandles: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_octwitterapplication_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_octwitterapplication_Information */
		Body: DevKit.Formmsdyn_octwitterapplication_Information.Body;
		/** The Navigation of form msdyn_octwitterapplication_Information */
		Navigation: DevKit.Formmsdyn_octwitterapplication_Information.Navigation;
		/** The Grid of form msdyn_octwitterapplication_Information */
		Grid: DevKit.Formmsdyn_octwitterapplication_Information.Grid;
		/** The SidePanes of form msdyn_octwitterapplication_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_octwitterapplicationApi {
		/**
		* DynamicsCrm.DevKit msdyn_octwitterapplicationApi
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
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_octwitterapplicationId: string;
		/** Twitter Secure Consumer Key */
		msdyn_securetwitterconsumerkey: string;
		/** Twitter Consumer Secret */
		msdyn_securetwitterconsumersecret: string;
		/** Field indicating whether Twitter Application form saved or not */
		msdyn_twitterapplicationsaved: string;
		/** Twitter Messaging Callback URL */
		msdyn_twittercallbackurl: string;
		/** Twitter Consumer Key */
		msdyn_twitterconsumerkey: string;
		/** Twitter Consumer Secret */
		msdyn_twitterconsumersecret: string;
		/** Twitter Developer Account Environment Name */
		msdyn_twitterenvironmentname: string;
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
		/** Status of the Twitter Application */
		statecode: OptionSet.msdyn_octwitterapplication.statecode;
		/** Reason for the status of the Twitter Application */
		statuscode: OptionSet.msdyn_octwitterapplication.statuscode;
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
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_octwitterapplicationId: string;
			/** Twitter Secure Consumer Key */
			readonly msdyn_securetwitterconsumerkey: string;
			/** Twitter Consumer Secret */
			readonly msdyn_securetwitterconsumersecret: string;
			/** Field indicating whether Twitter Application form saved or not */
			readonly msdyn_twitterapplicationsaved: string;
			/** Twitter Messaging Callback URL */
			readonly msdyn_twittercallbackurl: string;
			/** Twitter Consumer Key */
			readonly msdyn_twitterconsumerkey: string;
			/** Twitter Consumer Secret */
			readonly msdyn_twitterconsumersecret: string;
			/** Twitter Developer Account Environment Name */
			readonly msdyn_twitterenvironmentname: string;
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
			/** Status of the Twitter Application */
			readonly statecode: string;
			/** Reason for the status of the Twitter Application */
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
	namespace msdyn_octwitterapplication {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}