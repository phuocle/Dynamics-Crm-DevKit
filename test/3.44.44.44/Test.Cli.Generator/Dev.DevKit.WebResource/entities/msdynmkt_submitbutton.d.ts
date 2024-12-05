//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_submitbutton_Information {
		interface Tabs {
		}
		interface Body {
			msdynmkt_bordercolor: DevKit.Controls.String;
			msdynmkt_bordersize: DevKit.Controls.String;
			msdynmkt_borderstyle: DevKit.Controls.String;
			msdynmkt_buttoncolor: DevKit.Controls.String;
			/** Button text */
			msdynmkt_buttontext: DevKit.Controls.String;
			msdynmkt_fontfamily: DevKit.Controls.String;
			msdynmkt_fontitalicstyle: DevKit.Controls.String;
			msdynmkt_fontsize: DevKit.Controls.String;
			msdynmkt_fontweight: DevKit.Controls.String;
			/** The name of the Submit Button. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_roundedcorners: DevKit.Controls.String;
			msdynmkt_textdecoration: DevKit.Controls.String;
			msdynmkt_textstylecolor: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_submitbutton_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_submitbutton_Information */
		Body: DevKit.Formmsdynmkt_submitbutton_Information.Body;
		/** The Navigation of form msdynmkt_submitbutton_Information */
		Navigation: DevKit.Formmsdynmkt_submitbutton_Information.Navigation;
		/** The SidePanes of form msdynmkt_submitbutton_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_submitbuttonApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_submitbuttonApi
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
		msdynmkt_bordercolor: string;
		msdynmkt_bordersize: string;
		msdynmkt_borderstyle: string;
		msdynmkt_buttoncolor: string;
		/** Button text */
		msdynmkt_buttontext: string;
		msdynmkt_fontfamily: string;
		msdynmkt_fontitalicstyle: string;
		msdynmkt_fontsize: string;
		msdynmkt_fontweight: string;
		/** The name of the Submit Button. */
		msdynmkt_name: string;
		msdynmkt_roundedcorners: string;
		/** Unique identifier for entity instances */
		msdynmkt_submitbuttonId: string;
		msdynmkt_textdecoration: string;
		msdynmkt_textstylecolor: string;
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
		/** Status of the Submit Button */
		statecode: OptionSet.msdynmkt_submitbutton.statecode;
		/** Reason for the status of the Submit Button */
		statuscode: OptionSet.msdynmkt_submitbutton.statuscode;
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
			readonly msdynmkt_bordercolor: string;
			readonly msdynmkt_bordersize: string;
			readonly msdynmkt_borderstyle: string;
			readonly msdynmkt_buttoncolor: string;
			/** Button text */
			readonly msdynmkt_buttontext: string;
			readonly msdynmkt_fontfamily: string;
			readonly msdynmkt_fontitalicstyle: string;
			readonly msdynmkt_fontsize: string;
			readonly msdynmkt_fontweight: string;
			/** The name of the Submit Button. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_roundedcorners: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_submitbuttonId: string;
			readonly msdynmkt_textdecoration: string;
			readonly msdynmkt_textstylecolor: string;
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
			/** Status of the Submit Button */
			readonly statecode: string;
			/** Reason for the status of the Submit Button */
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
	namespace msdynmkt_submitbutton {
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