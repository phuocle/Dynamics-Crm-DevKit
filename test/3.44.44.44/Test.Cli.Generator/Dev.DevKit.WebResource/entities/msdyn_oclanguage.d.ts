//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_oclanguage_Information {
		interface Tabs {
		}
		interface Body {
			/** The language name of the record. */
			msdyn_languagename: DevKit.Controls.String;
			/** The Locale ID of the language this record represents. */
			msdyn_localeid: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_ocapplebusinessaccount_ocwidgetlanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_ocgooglebusinessmessagesagentaccount_ocwidgetlanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_ocvoicechannellanguagesetting_languageid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage: DevKit.Controls.NavigationItem,
			msdyn_oclanguage_msdyn_oclocalizationdata: DevKit.Controls.NavigationItem,
			msdyn_oclanguage_msdyn_ocvoice_languageid: DevKit.Controls.NavigationItem,
			msdyn_ocoutboundmessage_occustomerlocale: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_oclanguage_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_oclanguage_Information */
		Body: DevKit.Formmsdyn_oclanguage_Information.Body;
		/** The Navigation of form msdyn_oclanguage_Information */
		Navigation: DevKit.Formmsdyn_oclanguage_Information.Navigation;
		/** The SidePanes of form msdyn_oclanguage_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_oclanguageApi {
		/**
		* DynamicsCrm.DevKit msdyn_oclanguageApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_oclanguage.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The language name of the record. */
		msdyn_languagename: string;
		/** The locale code of the language this record represents. This is the string representation of the locale id. */
		msdyn_localecode: string;
		/** The Locale ID of the language this record represents. */
		msdyn_localeid: number;
		/** Unique identifier for entity instances */
		msdyn_oclanguageId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Language */
		statecode: OptionSet.msdyn_oclanguage.statecode;
		/** Reason for the status of the Language */
		statuscode: OptionSet.msdyn_oclanguage.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The language name of the record. */
			readonly msdyn_languagename: string;
			/** The locale code of the language this record represents. This is the string representation of the locale id. */
			readonly msdyn_localecode: string;
			/** The Locale ID of the language this record represents. */
			readonly msdyn_localeid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_oclanguageId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Language */
			readonly statecode: string;
			/** Reason for the status of the Language */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_oclanguage {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}